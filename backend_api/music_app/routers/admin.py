from fastapi import APIRouter, Query, Body, Path, Header, Depends, HTTPException, status , File , UploadFile
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

router = APIRouter()
import onedrivesdk
from onedrivesdk.helpers import GetAuthCodeServer




pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 15
def get_db():
    db = SessionLocal()
    try:
        yield db

    finally:
        db.close()


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

@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = get_password(db: Session = Depends(get_db))         
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}
    




# @router.post('/admin')
# async def add_event(registered: schemas.EventCreate = Body(...), db: Session = Depends(get_db)):
#     print(registered)
#     db_img = models.Event(**registered.dict())
#     db.add(db_img)
#     db.commit()
#     db.refresh(db_registered)
#     return "photo has been added to db!"


def get_password_hash(password):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)




@router.post('/changepassword')
async def change_password(*, db: Session = Depends(get_db), user : schemas.AdminPassword):
    if user.password == user.confirmpassword :
        new_username = user.username['username']
        new_password = get_password_hash(user.password)['password']
        db.query(models.User).filter(models.User.id == 1).update({models.User.username : new_username , models.User.password : new_password} , synchronize_session= False)
        # db_user.update({models.User : new_username , new_password})
        db.commit()
        return "username and password is updated"
    return "confirm password did't match"

@router.post('/login')
async def get_password(db: Session = Depends(get_db)):
    # from /login form
    name=user.username
    paas=user.password 
    # from database table named User
    db_ok = db.query(models.User).filter(models.User.id == 1 )
    if db_ok.username == name and verify_password(paas, db_ok.password) :
        return True # value neede to be used in login.js
    return False


@router.post('/addEvent')
async def add_event(newEvent : schemas.EventCreate = Body(...) , db : Session = Depends(get_db)):
    db_event = models.Event(**newEvent.dict())
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return "event added successfully"

@router.post('/delEvent')
async def delete_event(event_id  : int = Body(...) , db: Session = Depends(get_db)):
    event_to_delete = db.query(models.Event).get(event_id)
    db.delete(event_to_delete)
    db.commit()
    return "event deleted"


@router.post('/addLineup')
async def add_lineup(db : Session = Depends(get_db) , new_lineup : List[schemas.LineupCreate] = Body(...)):
    lineup_event = db.query(models.Event).order_by(desc(models.Event.db_time)).first()
    ev_id = lineup_event.id
    for slot in new_lineup:
        db_slot = models.Lineup(**slot.dict() , event_id = ev_id)
        db.add(db_slot)
    
    db.commit()

    return "lineup added"

@router.put('/updateState')
async def set_new_state(new_event_state = Body(...) , db: Session = Depends(get_db)):
    ev_id = new_event_state['event_id']
    newState = new_event_state['state']
    event_to_change = db.query(models.Event).filter(models.Event.id == ev_id )
    print(event_to_change)
    event_to_change.update({models.Event.state : newState} , synchronize_session = False)
    db.commit()
    return "state updated!"

@router.post('/addPhoto')
async def add_photo(*, img_files : List[UploadFile] = File(...) , db : Session = Depends(get_db) , eventId : int = Body(...)):
    for f in img_files:
        data = await f.read(10)
        b64data = base64.b64encode(data)
        newImage = {
            'event_id' : eventId,
            'label' : "test",
            'image' : b64data
        }
        
        newImageRow = schemas.AddPhoto(**newImage)
        db_img = models.Photos(**newImageRow.dict())
        db.add(db_img)
        db.commit()
        db.refresh(db_img)

    return "photo saved in db"

@router.post('/delPhoto')
async def add_photo(photo_id  : int = Body(...) , db: Session = Depends(get_db)):
    image_to_delete = db.query(models.Photos).get(photo_id)
    db.delete(image_to_delete)
    db.commit()
    return "photo has been deleted to db!"

