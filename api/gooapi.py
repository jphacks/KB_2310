import requests, os

headers = {
    'Content-type': 'application/json',
}

json_data = {
    'app_id': os.getenv("GOO"),
    'sentence': '日本語解析',
}

response = requests.post('https://labs.goo.ne.jp/api/morph', headers=headers, json=json_data)

print(response.json())