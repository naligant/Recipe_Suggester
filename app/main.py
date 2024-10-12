from fastapi import FastAPI
import uvicorn
from pymongo.mongo_client import MongoClient
from dotenv import load_dotenv
import os

root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
path = os.path.join(root_dir, '.env')

load_dotenv(path)

app = FastAPI()

#connect mongodb database

uri = os.getenv("MONGODB_URI")
# print(uri)

# Create a new client and connect to the server
client = MongoClient(uri)
# print(client)

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

@app.get("/")
async def root():
    return {"message": "Hello World"}

# if __name__ == '__main__':
#     uvicorn.run(app, host="0.0.0.0", port = 8000)
