from fastapi import FastAPI , Query , Body , Path , Header
from typing import List , Dict
from enum import Enum
import uvicorn
from pydantic import BaseModel , Field , HttpUrl

app = FastAPI(debug=True)


@app.get('/')
async def root():
    return {"Hello" : "World"}



if __name__ == "__main__":
    uvicorn.run("main:app" , host = "127.0.0.1",port = 8000,reload = True)