import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    API_TOKEN = os.getenv('API_TOKEN')
    if not API_TOKEN:
        raise ValueError("API_TOKEN is missing. Check your .env file.")