import flask
import flask_cors
from pathfinding import get_route

app = flask.Flask(__name__)

@app.route('/path', methods=['POST'])
def pathfinding():
    data = flask.request.get_json()
    print(data)
    path = get_route(origin=data["origin"])
    return flask.jsonify(path=path)

@app.route('/api/density_map', methods=['GET']) 
def density_map():
    return flask.send_file("static/density_map.json")

if __name__ == "__main__":
    flask_cors.CORS(app)
    app.run(host="localhost", port=5000, debug=True)