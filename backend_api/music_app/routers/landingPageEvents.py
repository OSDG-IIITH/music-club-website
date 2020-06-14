from fastapi import APIRouter , Query , Body , Path , Header , Depends
from typing import List , Dict
from modules import schemas
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

@router.post('/events/register' , response_model = schemas.RegisteredCreate)
async def get_registered(registered : schemas.RegisteredCreate = Body(...) , db : Session = Depends(get_db)):
    print(registered)
    return registered

@router.get('/events' , response_model= schemas.EventCreate)
async def get_event(db : Session = Depends(get_db)):
    return "TODO"


