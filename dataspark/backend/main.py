from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow the frontend running on localhost:3000 to access this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"]
)

class Contact(BaseModel):
    name: str
    email: str
    message: str

@app.get("/ping")
async def ping():
    return {"ping": "pong"}

@app.post("/contact", status_code=202)
async def contact(data: Contact):
    # In a real app, send email or store in DB
    return {"status": "received"}
