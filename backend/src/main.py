from langchain_community import llms
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from IPython.display import Markdown, display
import textwrap

load_dotenv()

llm = ChatGoogleGenerativeAI(model="gemini-pro")

def to_markdown(text):
    text = text.replace("**", " ")
    text = text.replace("*", " ")
    text = text.replace("\n \n", "\n")
    return Markdown(textwrap.indent(text,' ', predicate=lambda _:True))
