import requests

def palm(text):
    headers = {
        'Content-Type': 'application/json',
    }

    params = {
        'key': 'AIzaSyBwLzsvmTsA4jfI266rLE3K1t-ljHMINCU',
    }

    json_data = {
        'prompt': {
            'text': text,
        },
    }

    response = requests.post(
        'https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText',
        params=params,
        headers=headers,
        json=json_data,
    )
    result = response.json()
    print(result)
    a = result["candidates"][0]["output"]

    print(a)
    return a