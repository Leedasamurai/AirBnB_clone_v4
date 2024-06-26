#!/usr/bin/python3
"""Flask app to generate complete html page"""
from flask import Flask, render_template
from models import storage
import uuid

app = Flask(__name__, root_path='/AirBnB_clone_v4/web_dynamic')

@app.route('/101-hbnb')
def display_hbnb():
    """Generate page with popdown menu of states/cities"""
    states = storage.all('State')
    cities = storage.all('City')
    amenities = storage.all('Amenity')
    cache_id = uuid.uuid4()
    return render_template('101-hbnb.html',
            states=states,
            cities=cities,
            amenities=amenities,
            cache_id=cache_id)

    @app.teardown_appcontext
def teardown_db(*args, **kwargs):
    """Close database or file storage"""
    storage.close()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
