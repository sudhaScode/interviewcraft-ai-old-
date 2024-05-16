from fastapi import FastAPI, File, UploadFile, HTTPException
import json
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from src.main import llm, to_markdown

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],    
    allow_headers=["*"],
)
@app.get("/")
def start():
    response = llm.invoke("Write about the interview process for freshsers")
    result = to_markdown(response.content)
    return result.data

@app.post("/resume")
def enhance(file: UploadFile = File(...)):
    try:
        file_path = f"C:/Users/SUBOMMAS/interviewcraft.ai/backend/store/{file.filename}"
        with open(file_path, "wb") as f:
            f.write(file.file.read())

        # invoke the  resume enhancing

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return {"message": "Upload successful"}