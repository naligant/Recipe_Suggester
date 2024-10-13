from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for your frontend domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock database of users
users_db = {
    "user1@example.com": {
        "password": "password123"
    },
    "user2@example.com": {
        "password": "password456"
    },
}

# Request body model for signup
class SignupRequest(BaseModel):
    email: str
    password: str

# Signup route to add new users
@app.post("/signup")
async def signup(user: SignupRequest):
    # Check if user already exists
    if user.email in users_db:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email is already registered.",
        )
    
    # Add the new user to the database
    users_db[user.email] = {"password": user.password}
    
    return {"message": "User registered successfully"}

# Existing login route (for context)
@app.post("/login")
async def login(user: SignupRequest):
    '''
    if user.email not in users_db or users_db[user.email]["password"] != user.password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    '''
    if user.email not in users_db:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not registered!")
    elif user.email in users_db and users_db[user.email]["password"] != user.password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials!")
    return {"message": "Login successful"}

@app.get("/usersdb")
async def login():
    return users_db

#get user information to the frontend
class IngredientList(BaseModel):
    ingredients: list[str]

@app.post("/submit")
async def submit_ingredients(data: IngredientList):
    print("Received ingredients: {data.ingredients}")
    return {"message": "Ingredients received", "ingredients": data.ingredients}