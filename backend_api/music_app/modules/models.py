from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from database import Base
from sqlalchemy.orm import relationship


class UpcomingEvent(Base):
    __tablename__ = "upcoming_event"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String,index=True)
    state = Column(String,index=True)
    poster = Column(String,index=True)
    description = Column(String,index=True)
    date = Column(String,index=True)
    time = Column(String,index=True)
    venue = Column(String,index=True)
    gallery_link = Column(String,index=True)
    ping_link = Column(String,index=True)


class Registreation(Base):
    __tablename__ = "registeration"

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer,ForeignKey("upcoming_event.id"))
    band_name = Column(String,index=True)
    player_name = Column(String,index=True)
    instrument_name = Column(String,index=True)
    email = Column(String,index=True)
    contact_number = Column(Integer,index=True)
    slot_required = Column(String,index=True)
    song_name = Column(String,index=True)

class Lineup(Base):
    __tablename__ = "lineup"

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer,ForeignKey("upcoming_event.id"))
    band_name = Column(String,index=True)
    slot_given = Column(String,index=True)
    slot_number = Column(String,index=True)
    song_name = Column(String,index=True)

class Photos(Base):
    __tablename__ = "photos"

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer,ForeignKey("upcoming_event.id"))
    label = Column(String,index=True)
    link = Column(String,index=True)

class User(Base):
    __tablename__ = "adminuser"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String,index=True) 
    password = Column(String,index=True)
