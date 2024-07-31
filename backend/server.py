from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
import json
from fastapi.middleware.cors import CORSMiddleware
from src.pydantic_models.request_model import PromptRequestModel
from src.main import llm, to_markdown, resume_enhance

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],    
    allow_headers=["*"],
)


@app.post("/prompt")
async def start(Prompt: PromptRequestModel):
    response = llm.invoke(Prompt.prompt)
    
    result = to_markdown(response.content)
    print(result)
    return JSONResponse({"response": result})

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