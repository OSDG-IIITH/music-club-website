from fastapi import APIRouter, Query, Body, Path, Header, Depends
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

# HERE THE FORM DATA FROM A REGISTERING USER IS PRINTED AND CONSOLE LOGGED
# THE PARAMETER registered IS OF THE TYPE REGISTERED WHICH IS A PYDANTIC MODEL IN schemas.py


@router.post('/events/register')
async def get_registered(registered: schemas.RegisteredCreate = Body(...), db: Session = Depends(get_db)):
    print(registered)
    db_registered = models.Registration(**registered.dict())
    db.add(db_registered)
    db.commit()
    db.refresh(db_registered)
    return "Registration added to db!"



@router.get('/events', response_model=List[schemas.EventCreate])
async def get_event(db: Session = Depends(get_db)):
    data = []
    try:
        upcoming_event = db.query(models.Event).filter(
            models.Event.state == 'upcoming').first()
        if upcoming_event != None:
            data.append(upcoming_event)
    except:
        print("No upcoming events")

    try:
        past_events = db.query(models.Event).filter(
            models.Event.state == 'completed').limit(3)
        if past_events != None:
            data.append(past_events)
        print(past_events)
    except:
        print("No past events found!")

    return data

