from fastapi import FastAPI, File, UploadFile, HTTPException
import json
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from src.main import llm, to_markdown, resume_enhance

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
async def resume(resume: UploadFile = File(...)):
    try:
        file_path = f"C:/Users/SUBOMMAS/interviewcraft.ai/backend/store/{resume.filename}"
        file_name = resume.filename
        #print(file_path)
        with open(file_path, "wb") as f:
            f.write(resume.file.read())

        # invoke the  resume enhancing

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return {"message": "Upload successful"}

@app.post("/enhance")
async def enhance(payload: dict):
    file_name = payload["fileName"]
    path = f"C:/Users/SUBOMMAS/interviewcraft.ai/backend/store/{file_name}"
    response =  resume_enhance(file_path=path)
    #content = response.split("Enhanced Resume by GenAI:")
    print(response)
    #print(content[1])
    #result = to_markdown(content[1])
    return ""

#pipenv shell