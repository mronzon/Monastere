from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    # Logique pour récupérer des données
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

@app.route('/api/send-data', methods=['POST'])
def receive_data():
    data = request.get_json()
    # Logique pour traiter les données reçues
    return jsonify({'message': 'Data received successfully!'})

if __name__ == '__main__':
    app.run(debug=False, port=9000)
