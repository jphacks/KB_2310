from google.cloud import vision
from google.oauth2 import service_account


def text(data):
    credentials = service_account.Credentials.from_service_account_file('aaaa.json')

    client = vision.ImageAnnotatorClient(credentials=credentials)
    
    with open(data, "rb") as image_file:
        content = image_file.read()

    image = vision.Image(content=content)
    response = client.text_detection(image=image)
    texts = response.text_annotations[0].description
    texts = texts.splitlines()
    print(texts)
    return texts
    
    
# data = "images/image.jpg"
# text(data)