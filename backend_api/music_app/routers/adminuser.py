from fastapi import APIRouter, Query, Body, Path, Header, Depends, HTTPException, status
from typing import List, Dictfrom fastapi.security
from modules import schemas
from modules import models
from sqlalchemy.orm import Session
from modules.database import SessionLocal
import jwt
from jwt import PyJWTError
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db

    finally:
        db.close()

# HERE THE FORM DATA FROM A REGISTERING USER IS PRINTED AND CONSOLE LOGGED
# THE PARAMETER registered IS OF THE TYPE REGISTERED WHICH IS A PYDANTIC MODEL IN schemas.py

def get_password_hash(password):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

@router.post('/admin')
async def add_password( db: Session = Depends(get_db), user : schemas.AdminDetail):
    db_user = models.User(username = user.username , password = get_password_hash(user.password))
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return "username and password is updated"



@router.post('/login', response_model=List[schemas.AdminDetail])
async def get_password(db: Session = Depends(get_db)):
    # from /login form
    username=User.username
    password=User.password 
    # from database
    for username, password in db.query(User.username, User.password):    
        name=User.username
        paas=User.password
    if verify_password :
        return true
    return false

