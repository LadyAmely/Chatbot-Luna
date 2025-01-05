from flask import request, jsonify
from ..services.chat_services import get_chat_response


def chat():
    data = request.get_json()
    messages = data.get('messages')
    if not messages:
        return jsonify({"error": "Messages are required"}), 400

    try:
        response = get_chat_response(messages)
        return jsonify({"response": response})
    except RuntimeError as e:
        return jsonify({"error": str(e)}), 500
