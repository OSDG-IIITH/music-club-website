from pydantic import BaseModel

class Registered(BaseModel):
    name : str
    email : str
    year : str
    number : str
    instruments : str
    songs : str

    class Config:
        orm_mode : True