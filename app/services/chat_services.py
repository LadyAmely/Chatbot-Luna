from huggingface_hub import InferenceClient
from ..config.settings import Config

client = InferenceClient(api_key=Config.API_TOKEN)


def get_chat_response(messages):
    try:
        completion = client.chat.completions.create(
            model="PowerInfer/SmallThinker-3B-Preview",
            messages=messages,
            max_tokens=500
        )
        return completion.choices[0].message.content
    except Exception as e:
        raise RuntimeError(f"Error occurred while fetching chat response: {e}")
