from pydantic import BaseModel
from typing import List , Dict
from datetime import datetime

class RegisteredCreate(BaseModel):
    band_name : str
    player_names : str
    instrument_names : str
    email : str
    year : str
    contact_number : str
    song_names : str


class Registered(RegisteredCreate):
    id : int
    event_id : int
    
    class Config:
        orm_mode : True

class EventCreate(BaseModel):

    name :str = ''
    state : str = ''
    poster : str = ''
    description : str = '' 
    date : str = ''
    time : str = ''
    db_time : datetime = datetime.now()
    venue : str = ''
    gallery_link : str = ''
    ping_link : str = ''
    


class AdminDetail(BaseModel):
    username :str = ''
    password :str = ''

class AdminPassword(BaseModel):
    username :str = ''
    password :str = ''
    confirmpassword :str = ''
        
class AddPhoto(BaseModel):
    event_id : int
    label : str = ""
    image : bytes
    
class Event(EventCreate):
    id : int
    registrations : List[Registered] = []

    class Config:
        orm_mod : True



class LineupCreate(BaseModel):
    band_name : str = ''
    slot_given : str = ''
    slot_number : int = 0
    song_name  : str = ''

class Lineup(LineupCreate):
    id : int
    event_id : int

    class Config:
        orm_mode : True

    

