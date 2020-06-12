from fastapi import APIRouter
router = APIRouter()

@router.get('/landingPage/events')
async def root():
    return "Hello World"


