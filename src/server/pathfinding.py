# We use google maps api to get the shortest route from a selected coordinate to
# Zurich main station

import googlemaps
from dataclasses import dataclass
import typing
# Read api key from .env
import os
with (open(os.path.join(os.path.dirname(__file__), ".env"), "r")) as f:
    API_KEY = f.read()


# Get the shortest route from a selected coordinate to Zurich main station

def get_route(origin):
    gmaps = googlemaps.Client(key=API_KEY)
    # Get the route from the selected coordinate to Zurich main station
    directions_result = gmaps.directions(origin, "Zurich main station", mode="transit")
    return directions_result

if __name__ == "__main__":
    pass