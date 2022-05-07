# Note I import jsonify
from flask import Flask, request, jsonify, abort

app = Flask(__name__)

db_users = {
    "John" : "Miami",
    "David" : "Miami",
    "Jane" : "London",
    "Gabriella" : "Paris",
    "Tanaka" : "Tokyo"
}

users = {
    "name": ["John"]
}

items = [1,2,3,4,5,6]

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    print(request)
    if request.method == 'POST':
        return jsonify({'message': "It's a POST request!"})
    else:
        return jsonify({'message': "It's a GET request"})

@app.route('/items/<int:id>', methods=['GET'])
def get_item(id):
    item = str(items[id])
    return jsonify({'item': item})

@app.route('/search', methods=['GET'])
def search():
    args = request.args
    name = args.get('name')
    location = args.get('location')

    # result = db_users
    if None not in (name, location):
        result = jsonify({key: value for key, value in db_users.items() if key == name and value == location})
    elif name is not None:
        result = jsonify({key: value for key, value in db_users.items() if key == name})
    elif location is not None:
        result = jsonify({key: value for key, value in db_users.items() if value == location})

    return result

@app.route('/searchppl', methods=['POST'])
def searchppl(): 
    data = request.json

    # Error handle
    if len(data['name']) < 1:
        status_code = 400
        success = False
        response = {
            'success': success,
            'error': {
                'message': "Name too short"
            }
        }
        return jsonify(response), status_code

    users["name"].append(data['name'])
    return users

if __name__ == "__main__":
    app.run(debug=True)