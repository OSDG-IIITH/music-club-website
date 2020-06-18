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


@router.post('/admin')
async def add_pass(registered: schemas.AdminDetail = Body(...), db: Session = Depends(get_db)):
    db_pass = models.User(**registered.dict())
    db.add(db_pass)
    db.commit()
    db.refresh(db_pass)
    return "Password is updated"



@router.get('/login', response_model=List[schemas.AdminDetail])
async def get_pass(db: Session = Depends(get_db)):
    data = []
    name = ""
    paas = ""
    for username, password in db.query(User.username, User.password):    
        name=username
        paas=password
    return {name,paas}

