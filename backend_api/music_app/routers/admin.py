from fastapi import APIRouter, Query, Body, Path, Header, Depends, HTTPException, status , File , UploadFile , Form , Response
from fastapi.encoders import jsonable_encoder
from fastapi.responses import HTMLResponse
from typing import List, Dict
import base64
from modules import schemas
from modules import models
from sqlalchemy import desc
import jwt
from jwt import PyJWTError
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from modules.database import SessionLocal
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from datetime import timedelta , datetime

router = APIRouter()
# import onedrivesdk
# from onedrivesdk.helpers import GetAuthCodeServer




pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/admin/token")

SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 100
def get_db():
    db = SessionLocal()
    try:
        yield db

    finally:
        db.close()

def get_password_hash(password):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_user_fromDB(username : str , db : Session):
    user_requested = db.query(models.User).filter(models.User.username == username).first()
    if user_requested:
        return schemas.UserDB(**(user_requested.__dict__))
    
    

def authenticate(username : str , password : str , db : Session):
    user = get_user_fromDB(username , db)
    if not user:
        return False

    if not verify_password(password , user.hashed_password):
        return False

    return user


class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str = None

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

@router.post("/token", response_model=Token)
async def login_for_access_token(*, form_data = Body(...) , db : Session = Depends(get_db)):
    print(form_data)
    user = authenticate(form_data['username'] , form_data['password'] , db)         
    if not user:
        return None
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}
    



@router.post('/changepassword')
async def change_password(*, db: Session = Depends(get_db), user : schemas.User):
    
    username = user.username
    new_password = get_password_hash(user.password)
    db.query(models.User).filter(models.User.username == username).update({models.User.hashed_password : new_password} , synchronize_session= False)
    # db_user.update({models.User : new_username , new_password})
    db.commit()
    return "username and password is updated"
   

@router.post('/createAccount')
async def make_new_user(* , db : Session = Depends(get_db) , new_user : schemas.User = Body(...)):
    new_hashed_password = get_password_hash(new_user.password)
    db_user = models.User(username = new_user.username , hashed_password=new_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return "account created successfully"




@router.post('/addEvent')
async def add_event(*,newEvent : schemas.EventCreate = Body(...) , db : Session = Depends(get_db) , token : str = Body(...) , res : Response):
    
    try:
        payload = jwt.decode(token , SECRET_KEY , algorithms=[ALGORITHM])
    except:
        return "TOKEN EXPIRED"
        
    
    username : str = payload.get('sub')
    if username is None:
        raise credentials_exception
    else:
        db_event = models.Event(**newEvent.dict())
        db.add(db_event)
        db.commit()
        db.refresh(db_event)
        return "event added successfully"

@router.post('/delEvent')
async def delete_event(* , event_id  : int = Body(...) , db: Session = Depends(get_db) , token : str = Body(...)):

    try:
        payload = jwt.decode(token , SECRET_KEY , algorithms=[ALGORITHM])
    except:
        return "TOKEN EXPIRED"
    
    username : str = payload.get('sub')
    expiry_time = payload.get('exp')
    expiry_time = datetime.fromtimestamp(expiry_time)
    print((expiry_time - datetime.now()).seconds)
    if username is None:
        raise credentials_exception
    else: 
        event_to_delete = db.query(models.Event).get(event_id)
        db.delete(event_to_delete)
        db.commit()
        return "event deleted"


@router.post('/addLineup')
async def add_lineup(db : Session = Depends(get_db) , new_lineup : List[schemas.LineupCreate] = Body(...) , token : str = Body(...)):

    try:
        payload = jwt.decode(token , SECRET_KEY , algorithms=[ALGORITHM])
    except:
        return "TOKEN EXPIRED"
        
    
    username : str = payload.get('sub')
    if username is None:
        raise credentials_exception
    else:    
        lineup_event = db.query(models.Event).order_by(desc(models.Event.db_time)).first()
        ev_id = lineup_event.id
        for slot in new_lineup:
            db_slot = models.Lineup(**slot.dict() , event_id = ev_id)
            db.add(db_slot)
        
        db.commit()

        return "lineup added"

@router.put('/updateState')
async def set_new_state(* , updated_event : schemas.UpdatedEvent = Body(...) , db: Session = Depends(get_db) , token : str = Body(...)):

    try:
        payload = jwt.decode(token , SECRET_KEY , algorithms=[ALGORITHM])
    except:
        return "TOKEN EXPIRED"
        
    username : str = payload.get('sub')
    if username is None:
        raise credentials_exception
    else:   
        ev_id = updated_event.id
        newState = updated_event.state
        newGalLink = updated_event.gallery_link
        newPingLink = updated_event.ping_link
        event_to_change = db.query(models.Event).filter(models.Event.id == ev_id)
        print(event_to_change)
        if newState != '':
            event_to_change.update({models.Event.state : newState} , synchronize_session = False)

        if newPingLink != '':
            event_to_change.update({models.Event.ping_link : newPingLink} , synchronize_session = False)

        if newGalLink != '':
            event_to_change.update({models.Event.gallery_link : newGalLink} , synchronize_session = False)
        
        # event_to_change.update({models.Event.state : newState , models.Event.gallery_link : newGalLink , models.Event.ping_link : newPingLink} , synchronize_session = False)
        db.commit()
        return "state updated!"

@router.post('/addPhoto')
async def add_photo(*, img_files : List[UploadFile] = File(...) , db : Session = Depends(get_db) , eventId : int = Form(2) , photoLabel : str = Form(...) , token : str = Form(...)):
    
    try:
        payload = jwt.decode(token , SECRET_KEY , algorithms=[ALGORITHM])
    except:
        return "TOKEN EXPIRED"

    username : str = payload.get('sub')
    if username is None:
        raise credentials_exception
    else:
        for f in img_files:
            data = await f.read()
            b64data = base64.b64encode(data)
            newImage = {
                'event_id' : eventId,
                'label' : photoLabel,
                'image' : b64data
            }
            
            newImageRow = schemas.AddPhoto(**newImage)
            db_img = models.Photos(**newImageRow.dict())
            db.add(db_img)
            db.commit()
            db.refresh(db_img)

        return "photo saved in db"
        
    
    

@router.post('/delPhoto')
async def delete_photo(*,photo_id  : int = Body(...) , db: Session = Depends(get_db) , token : str = Body(...)):

    try:
        payload = jwt.decode(token , SECRET_KEY , algorithms=[ALGORITHM])
    except:
        return "TOKEN EXPIRED"
        
    username : str = payload.get('sub')
    expiry_time = payload.get('exp')
    expiry_time = datetime.fromtimestamp(expiry_time)
    print((expiry_time - datetime.now()).seconds)
    if username is None:
        raise credentials_exception
    else:
        image_to_delete = db.query(models.Photos).get(photo_id)
        db.delete(image_to_delete)
        db.commit()
        return "image deleted"
   

@router.post('/confirm')
async def confirm_delete(photo_id  : int = Body(...) , db: Session = Depends(get_db)):
    image_to_delete = db.query(models.Photos).get(photo_id)
    db.delete(image_to_delete)
    db.commit()
    return "photo has been deleted to db!"




