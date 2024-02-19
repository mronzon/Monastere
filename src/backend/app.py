import json
import os.path

from flask import Flask, request, jsonify
from flask_cors import CORS

from scrapping.asura import Asura

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5173"}})

# Scrapper
asura = Asura(url="https://asuratoon.com/manga/?page=", name="Asura")


@app.route('/api/get-manwha', methods=['GET'])
def get_data():
    # Logique pour récupérer des données

    if os.path.exists("./resources/manhwa.json"):
        with open("./resources/manhwa.json", "r", encoding="utf-8") as f:
            data = json.loads(f.read())
    else:
        data = {asura.name: asura.scrap()}
        with open(r"resources\manhwa.json", 'w', encoding="UTF-8") as file:
            file.write(json.dumps(data, indent=4, ensure_ascii=False))
    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/api/send-data', methods=['POST'])
def receive_data():
    data = request.get_json()
    # Logique pour traiter les données reçues
    return jsonify({'message': 'Data received successfully!'})


if __name__ == '__main__':
    app.run(debug=False, port=9000)
