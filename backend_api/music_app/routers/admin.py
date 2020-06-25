from fastapi import APIRouter, Query, Body, Path, Header, Depends, HTTPException, status , File , UploadFile
from fastapi.encoders import jsonable_encoder
from typing import List, Dict
from modules import schemas
from modules import models
from sqlalchemy import desc
import jwt
from jwt import PyJWTError
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from modules.database import SessionLocal
router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_db():
    db = SessionLocal()
    try:
        yield db

    finally:
        db.close()



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


# @router.post('/addPhoto')
# async def add_photo(newPhoto : schemas.AddPhoto = Body(...) , db: Session = Depends(get_db)):
#     db_img = models.Photos(**newPhoto.dict())
#     db.add(db_img)
#     db.commit()
#     db.refresh(db_img)
#     return "photo has been added to db!"

# @router.post('/delPhoto')
# async def add_photo(photo_id  : int = Body(...) , db: Session = Depends(get_db)):
#     image_to_delete = db.query(models.Photos).get(photo_id)
#     db.delete(image_to_delete)
#     db.commit()
#     return "photo has been deleted to db!"

# @router.post('/addPhoto')
# async def add_photo(img_files : UploadFile = List[UploadFile])
