from fastapi import APIRouter
router = APIRouter()

@router.post('/landingPage/events/register')
async def root():
    return "Hello World"


