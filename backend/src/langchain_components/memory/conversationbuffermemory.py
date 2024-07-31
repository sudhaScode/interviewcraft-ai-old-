from langchain.memory import ConversationBufferMemory


def setup_conversationmemory():
    memory = ConversationBufferMemory()
    return memory