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



# @router.post('/admin')
# async def add_event(registered: schemas.EventCreate = Body(...), db: Session = Depends(get_db)):
#     print(registered)
#     db_img = models.Event(**registered.dict())
#     db.add(db_img)
#     db.commit()
#     db.refresh(db_registered)
#     return "photo has been added to db!"

@router.post('/delEvent')
async def delete_event(event_id = Body(...) , db: Session = Depends(get_db)):
    event_to_delete = db.query(models.Event).get(event_id)
    db.delete(event_to_delete)
    db.commit()
    return "event deleted"
