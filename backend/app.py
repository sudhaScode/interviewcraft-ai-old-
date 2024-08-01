from src.langchain_components.prompts.resumeenhance import format_prompt, chat_template_prompt, prompt_template
from src.langchain_components.llm.model import setup_model
from src.langchain_components.chains.llmchain import advance_chain, setup_chain
from src.utilities.utility import load_file, to_markdown
from src.langchain_components.document_loaders.pdfloader import resume_reader
## Pydatic data validation
from src.pydantic_models.request_model import Request
from src.pydantic_models.reponse_model import Response

from src.langchain_components.chains.conversationchain import setup_conversationchain
from src.langchain_components.memory.conversationbuffermemory import setup_conversationmemory

from src.utilities.logger import logger

import json
## Rstfull servies - ASGI

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],    
    allow_headers=["*"],
)
# global chain
#print(chat_template_prompt)
chat_model= setup_model()
memory = setup_conversationmemory()
# chain = setup_conversationchain(chat_model, memory, prompt_template)
# classificationchain = advance_chain(chat_model)
#chain = advance_chain(chat_model,chat_template_prompt)
chain = setup_chain(chat_model,chat_template_prompt, memory=memory)

@app.post("/load")
async def load(file: UploadFile = File(...)):
    print("Received request for load")
    #print(file, "asddfghlkjkjds")
    try:
       file_name= load_file(file) #for tommorow
    #    global resume
    #    resume= resume_reader(f"store/{file_name}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return JSONResponse(content={"response": "Upload and read done successful"}, status_code=200)

@app.post("/prompt")
async def prompt(req:Request):
    print("Received request for prompt: ",req.prompt)
    try:
        resume= resume_reader(f"store/{req.file_name}")
        query = req.prompt +" \n\n RESUME: \n\n "
        query = query + resume
        #print(resume)
        #response = chain.invoke(input =req.prompt, resume= resume) # for advanced chain
        #data = response.content
        response = chain.invoke(input = query)
        # data = to_markdown(response.content)
        data = response["text"]
    except Exception as e: 
        #  logger.info(e)
        raise HTTPException(status_code=503, detail=str(e))
    
    # logger.info(response)

    return Response(response=data, status="200 ok")