from langchain_core.prompts import PromptTemplate

prompt = """
Suggest the improvements and grammer to make resume context concise.\n
Enhance and prephase the resume context. the below is the user resume given for enhancing and best advises to improve it.
resume: {resume}

Follow keyword search for resume shortlist and describe the skill set with exprience mentioned\n
Make the resume best suitable for given job profile and enhance resume to stay on top of job hiring 

Enhanced Resume by GenAI:
"""

prompt_template = PromptTemplate(
    input_variables= ["resume"],
    template = prompt

)