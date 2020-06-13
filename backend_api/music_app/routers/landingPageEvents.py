from fastapi import APIRouter , Query , Body , Path , Header
from typing import List , Dict
from modules import schemas
router = APIRouter()

# HERE THE FORM DATA FROM A REGISTERING USER IS PRINTED AND CONSOLE LOGGED 
# THE PARAMETER registered IS OF THE TYPE REGISTERED WHICH IS A PYDANTIC MODEL IN schemas.py

@router.post('/events/register' , response_model = schemas.Registered)
async def get_registered(registered : schemas.Registered = Body(...)):
    print(registered)
    return registered


