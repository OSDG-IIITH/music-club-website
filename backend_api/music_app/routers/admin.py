from fastapi import APIRouter, Query, Body, Path, Header, Depends
from fastapi.encoders import jsonable_encoder
from typing import List, Dict
from modules import schemas
from modules import models
from sqlalchemy.orm import Session
from modules.database import SessionLocal
router = APIRouter()


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
async def add_photo(newPhoto : schemas.AddPhoto = Body(...) , db: Session = Depends(get_db)):
    db_img = models.Photos(**newPhoto.dict())
    db.add(db_img)
    db.commit()
    db.refresh(db_img)
    return "photo has been added to db!"

@router.post('/delPhoto')
async def add_photo(photo_id  : int = Body(...) , db: Session = Depends(get_db)):
    image_to_delete = db.query(models.Photos).get(photo_id)
    db.delete(image_to_delete)
    db.commit()
    return "photo has been deleted to db!"

