import os
import io
from google.cloud import speech



def voice(voice):
  os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'aaaa.json'
  # Instantiates a client
  client = speech.SpeechClient()

  ### rb(read binary)でデータを読み込む
  with io.open(voice, 'rb') as f:
      content = f.read()

  ### RecognitionAudioにデータを渡す
  audio = speech.RecognitionAudio(content=content)

  config = speech.RecognitionConfig(
      ### encodeでエラーが出たのでENCODING_UNSPECIFIEDに変更
      encoding=speech.RecognitionConfig.AudioEncoding.ENCODING_UNSPECIFIED,
      language_code="ja-JP",
  )

  ### 音声を抽出
  response = client.recognize(config=config, audio=audio)

  ### 抽出結果をprintで表示
  for result in response.results:
      print(result.alternatives[0].transcript)
      return result.alternatives[0].transcript
  
# a = "sounds/test.wav"
# voice(a)