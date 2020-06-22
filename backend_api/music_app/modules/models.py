from sqlalchemy import Boolean, Column, ForeignKey, Integer, String , DateTime
from modules.database import Base
from sqlalchemy.orm import relationship


class Event(Base):
    __tablename__ = "event"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String,index=True)
    state = Column(String,index=True)
    poster = Column(String,index=True)
    description = Column(String,index=True)
    date = Column(String,index=True)
    time = Column(String,index=True)
    db_time = Column(DateTime,index=True)
    venue = Column(String,index=True)
    gallery_link = Column(String,index=True)
    ping_link = Column(String,index=True)
    registrations = relationship("Registration",cascade="all,delete,delete-orphan")
    lineup = relationship("Lineup" , cascade="all,delete,delete-orphan")


class Registration(Base):
    __tablename__ = "registration"

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer,ForeignKey("event.id"))
    band_name = Column(String,index=True)
    player_names = Column(String,index=True)
    instrument_names = Column(String,index=True)
    email = Column(String,index=True)
    year = Column(String , index=True)
    contact_number = Column(String,index=True)
    # slot_required = Column(String,index=True)
    song_names = Column(String,index=True)

class Lineup(Base):
    __tablename__ = "lineup"

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer,ForeignKey("event.id"))
    band_name = Column(String,index=True)
    slot_given = Column(String,index=True)
    slot_number = Column(Integer,index=True)
    song_name = Column(String,index=True)

class Photos(Base):
    __tablename__ = "photos"

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer,ForeignKey("event.id"))
    photo_id = Column(String,primary_key=True,index=True)
    label = Column(String,index=True)
    link = Column(String,index=True)

class User(Base):
    __tablename__ = "adminuser"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String,index=True) 
    password = Column(String,index=True)
