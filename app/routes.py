from flask import Flask, request, jsonify, send_from_directory
app = Flask(__name__, static_folder='../client/build', static_url_path='')
@app.route('/')
def serve_react():
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')