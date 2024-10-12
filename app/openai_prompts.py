import requests
from openai import OpenAI
from dotenv import load_dotenv
# import subprocess
import os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
path = os.path.join(root_dir, '.env')

load_dotenv(path)

def ai_insights():
    client = OpenAI()

    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that should only answer questions related to recipes, ingredients, calories, and cuisines. Any other topics prompted, respond with 'Invalid question.'"},
            {"role": "user", "content": "what are some good Italian recipes that can be made with eggs, chicken, cheese, and tortillas that is close to about 1800 calories?"}
        ]
    )
    return completion.choices[0].message.content

def main():
    api_key = os.getenv('OPENAI_KEY')
    os.environ["OPENAI_API_KEY"] = api_key
    insight = ai_insights()
    print('\n', insight)

if __name__ == '__main__':
    main()