from fastapi import FastAPI , Query , Body , Path , Header
from typing import List , Dict
from enum import Enum
import uvicorn
from pydantic import BaseModel , Field , HttpUrl
from sqlalchemy.orm import Session
from modules import schemas
from routers import landingPageEvents

app = FastAPI(debug=True)



@app.get('/')
async def root():
    return {"Hello" : "World"}

# THIS IS INCLUDING ALL LANDINGPAGE ENDPOINTS FROM routers/landingPage.py
app.include_router(landingPageEvents.router , prefix="/landingPage" , tags=["landingPage"])  

if __name__ == "__main__":
    uvicorn.run("main:app" , host = "127.0.0.1",port = 8000,reload = True)
