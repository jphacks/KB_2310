
import openai, os

def chatgpt(text):
    openai.api_key = os.getenv('CHATGPT')
    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "条件:1.上司になった気持ちで聴いてください。そして、悪いところと良いところを教えてください。2.発表の時間も評価店を含んでください。例）発表が遅い＝飽きてくる、発表が早い＝テンポが良くて聞きやすい。"
            },
            {
                "role": "user",
                "content": text
            },
        ],
    )
    # print(res)　←　これは、データ全体を表示する・別になくてもいい
    return res["choices"][0]["message"]["content"]

def union(chatgpt, palm):
    openai.api_key = os.getenv('CHATGPT')
    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "日本語で答えてください。また、文章をまとめてください。"
            },
            {
                "role": "user",
                "content": chatgpt + palm
            },
        ],
    )
    return res["choices"][0]["message"]["content"]