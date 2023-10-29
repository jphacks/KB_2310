from fastapi import FastAPI, Body, status
from fastapi.responses import JSONResponse
import presentation as pre
import interview as inter
app = FastAPI()

data = [ #フロントからの想定データ
  {
    "image_data": "images/dayo.png",
    "audio_data": "sounds/test.wav"
  },
  {
    "image_data": "images/dayo.png",
    "audio_data": "sounds/test.wav"
  }
]

@app.get("/")
async def hello():
    return {"message" : "Hello,World"}
  
@app.post("/api/interview")
async def interview(data: list):
  result = inter.read(data)
  return {"message" : result}

@app.post("/api/presentation")
async def presentation():
  return {"message" : "presentationページです。"}
  
#起動方法
# uvicorn main:app --reload
