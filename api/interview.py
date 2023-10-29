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
    variable_type = type(resultimg)

    print(variable_type)  # 変数の型を表示
    # with open(dataaudio, "wb") as file:
    resultaudio = sound.voice(dataaudio)
    bun += str(num + 1) + "枚目のプレゼン資料"
    bun += str(''.join(resultimg))
    bun += str(num + 1) + "枚目の発言内容"
    bun += resultaudio
  print(bun)
  #text = sound.voice('sounds/voice_1.wav')
  # for audio_file in audio_data:   #audioをテキストに変換し、配列に格納
  #   with open(audio_file.filename, "wb") as file:
  #     text.append(sound.voice(file))
  # for img_file in image_data:     #画像データをテキストに変換
  #   with open(img_file.filename, "wb") as file:
  #     soundtext.append(image.text(file))
  palm = deepl.output(p.palm(deepl.input(bun)))
  #claude = cl.claude(text)
  chatgpt = ch.chatgpt(bun)
  result = ch.union(palm, chatgpt)
  print(result)
  return result