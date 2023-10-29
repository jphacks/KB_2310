import requests
import palm as p
#import gooapi as cl
import chatgpt as ch
import deepl
import sound
import base64
import image
from fastapi import FastAPI, Form, File, UploadFile
from typing import List

image_data: List[UploadFile] = File(...),
audio_data: List[UploadFile] = File(...),

text = []
soundtext = []


data = [
  {
    "image_data": "images/dayo.png",
    "audio_data": "sounds/test.wav"
  },
  {
    "image_data": "images/dayo.png",
    "audio_data": "sounds/test.wav"
  }
]

def read(data):
  bun = ""
  for num, i in enumerate(data):
    resultimg = ""
    resultaudio = ""
    dataimage = i["image_data"]
    dataaudio = i["audio_data"]
    # with open(dataimage, "wb") as file:
    resultimg = image.text(dataimage)
    # with open(dataaudio, "wb") as file:
    resultaudio = sound.voice(dataaudio)
    bun += str(num + 1) + "枚目のプレゼン資料"
    bun += str(''.join(resultimg))
    bun += str(num + 1) + "枚目の発言内容"
    bun += resultaudio
  print(bun)
  palm = deepl.output(p.palm(deepl.input(bun)))
  #claude = cl.claude(text)
  chatgpt = ch.chatgpt(bun)
  result = ch.union(palm, chatgpt)
  print(result)
  return result

read(data)