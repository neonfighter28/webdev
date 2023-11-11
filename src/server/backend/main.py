import flask
from pathfinding import get_route

app = flask.Flask(__name__)

@app.route('/path', methods=['POST'])
def pathfinding():
    data = flask.request.get_json()
    print(data)
    path = get_route(origin=data["origin"])
    return flask.jsonify(path=path)