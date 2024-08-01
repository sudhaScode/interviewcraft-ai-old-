from langchain.chains.llm import LLMChain
# # depreceated
def setup_chain(llm, prompt_template, memory):
    chain = LLMChain(llm=llm, prompt=prompt_template, memory=memory)
    return chain

def advance_chain(llm, prompt_template):
    chain = prompt_template | llm 
    return chain

