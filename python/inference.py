import requests
import secrets

API_URL = "https://api-inference.huggingface.co/models/eddiegulay/Whisperer_Mozilla_Sw_2000"
headers = {"Authorization": secrets.access_token}

def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()

output = query("sample1.flac") # sample1.flac is the audio file replace it with your own audio file

print("Transcription: ", output)