import requests, os

def palm(text):
    headers = {
        'Content-Type': 'application/json',
    }

    params = {
        'key': os.getenv("PALM"),
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