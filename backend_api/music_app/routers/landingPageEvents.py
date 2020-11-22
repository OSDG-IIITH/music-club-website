from fastapi import APIRouter, Query, Body, Path, Header, Depends
from typing import List, Dict
from modules import schemas
from modules import models
from sqlalchemy import desc
from sqlalchemy.orm import Session
from modules.database import SessionLocal
router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db

    finally:
        db.close()

# HERE THE FORM DATA FROM A REGISTERING USER IS PRINTED AND CONSOLE LOGGED
# THE PARAMETER registered IS OF THE TYPE REGISTERED WHICH IS A PYDANTIC MODEL IN schemas.py


@router.post('/events/register')
async def get_registered(registered: schemas.RegisteredCreate = Body(...), db: Session = Depends(get_db)):
    print(registered)
    reg_event = db.query(models.Event).order_by(desc(models.Event.db_time)).first()
    ev_id = reg_event.id
    print(reg_event.__dict__)
    print(ev_id)
    db_registered = models.Registration(**registered.dict() , event_id = ev_id)
    db.add(db_registered)
    db.commit()
    db.refresh(db_registered)
    return "Registration added to db!"


    


@router.get('/allEvents' , response_model = List[schemas.Event])
async def get_all_events(db : Session = Depends(get_db)):
    data = []
    allEvents = db.query(models.Event).all()

    if allEvents != None:
        for e in allEvents:
            data.append(e.__dict__)

    return data

@router.get('/events' , response_model = List[schemas.Event])
async def get_event(db: Session = Depends(get_db)):
    data = []
    
    events = db.query(models.Event).order_by(desc(models.Event.db_time)).limit(4).all()
    
    
    # print((events[0]))
    if events != None:
        for e in events:
            data.append(e.__dict__)

    return data

@router.get('/events/{eventId}' , response_model = schemas.Event)
async def get_event(eventId : int ,db: Session = Depends(get_db)):

    event = db.query(models.Event).filter(models.Event.id == eventId).first()
    
    if event is None:
        return "No event found"

    
    return event.__dict__

@router.get('/photos' , response_model = List[schemas.Photo])
async def get_photos(db : Session = Depends(get_db)):
    data = []
    photos = db.query(models.Photos).all()
    if photos!= None:
        for p in photos:
            data.append(p.__dict__)

    return data
    


@router.get('/lineupEvent' , response_model=List[schemas.Lineup])
async def get_lineup(db : Session = Depends(get_db)):
    lineup_data = []
    lineup_event = db.query(models.Event).order_by(desc(models.Event.db_time)).first()
    ev_id = lineup_event.id
    lineup = db.query(models.Lineup).filter(models.Lineup.event_id == ev_id).order_by(models.Lineup.slot_number).all()
    for slot in lineup:
        lineup_data.append(slot.__dict__)
    

    return lineup_data




