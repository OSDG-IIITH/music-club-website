from pydantic import BaseModel

class RegisteredCreate(BaseModel):
    event_id : int
    band_name : str
    player_names : str
    instrument_names : str
    email : str
    year : str
    contact_number : str
    song_names : str


class Registered(RegisteredCreate):
    id : int
    
    class Config:
        orm_mode : True

class EventCreate(BaseModel):

    name :str
    state : str 
    poster : str 
    description : str 
    date : str 
    time : str 
    venue : str 
    gallery_link : str
    ping_link : str 

class Event(EventCreate):
    id : int