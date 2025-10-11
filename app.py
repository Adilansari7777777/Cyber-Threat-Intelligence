from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

app.secret_key = os.getenv("SECRET_KEY", "changeme")

# In-memory user storage (replace with DB in prod)
users = {}

@app.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    if username in users:
        return jsonify({"status":"fail","message":"User already exists"})
    users[username] = password
    return jsonify({"status":"success","message":"Registered successfully"})

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    if users.get(username) == password:
        return jsonify({"status":"success","message":"Login successful"})
    return jsonify({"status":"fail","message":"Invalid credentials"})

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status":"ok","message":"Backend running"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
