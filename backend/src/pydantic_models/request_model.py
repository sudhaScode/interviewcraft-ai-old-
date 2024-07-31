from pydantic import BaseModel

class Request(BaseModel):
    prompt: str
    file_name: str