import requests
from openai import OpenAI
from dotenv import load_dotenv
#import subprocess
import os
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
path = os.path.join(root_dir, '.env')

load_dotenv(path)

def ai_insights(calories, cuisine, ingredients, api_key=' '):
    client = OpenAI(api_key=api_key)

#Flatten the ingredients if it's a list of lists
    if all(isinstance(item, list) for item in ingredients):
        ingredients = [ingredient for sublist in ingredients for ingredient in sublist]

#Join the ingredients into a single string
    ingredients = ', '.join(ingredients)

    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that should only answer questions related to recipes, ingredients, calories, and cuisines. Any other topics prompted, respond with 'Invalid question.'"},
            {"role": "user", "content": f"Give me a few {cuisine} recipes that can be made with {ingredients} that are close to about {calories} calories? Give me a short description, ingredient list, and instructions to cook the recipe in a Python list format."}
        ]
    )
    return completion.choices[0].message.content


def main(calories, cuisine, ingredients):
    apikey = os.getenv('OPENAI_KEY')
    os.environ["OPENAI_API_KEY"] = apikey
    insight = ai_insights(calories, cuisine, ingredients, apikey)
    return insight

if __name__ == '__main__':
    calories = 1800  # Example value
    cuisine = "Italian"  # Example value
    ingredients = ["eggs", "milk", "bread", "oil"]  # Example value
    main(calories, cuisine, ingredients)