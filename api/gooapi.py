import requests, os, config

headers = {
    'Content-type': 'application/json',
}

json_data = {
    'app_id': config.GOO,
    'sentence': '日本語解析',
}

response = requests.post('https://labs.goo.ne.jp/api/morph', headers=headers, json=json_data)

print(response.json())