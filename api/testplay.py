# FastAPIエンドポイントのURL
import requests
from fastapi import FastAPI, Form, File, UploadFile
from typing import List


url = "http://localhost:8000/interview/"  # FastAPIの実際のエンドポイントに合わせて変更

# テスト用のファイルデータを作成
file_data = {"image_data": ("images/img.jpg", open("images/image.jpg", "rb"))}  # sample.jpgは実際のファイルパスに合わせて変更
data = [
  {
    "image_data": ("images/img.jpg", open("images/image.jpg", "rb")),
    "audio_data": ("sounds/voice_1.wav", open("sounds/voice_1.wav", "rb"))
  },
  {
    "image_data": ("images/img.jpg", open("images/image.jpg", "rb")),
    "audio_data": ("sounds/voice_1.wav", open("sounds/voice_1.wav", "rb"))
  }
]

# リクエストを作成してデータを送信
response = requests.post(url, files=file_data)
print(response)