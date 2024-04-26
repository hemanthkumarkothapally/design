from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_building', methods=['POST'])
def generate_building():
    land_width = int(request.form['landWidth'])
    land_height = int(request.form['landHeight'])
    
    # Call AI algorithm to generate building design based on land dimensions
    building_design = generate_building_ai(land_width, land_height)
    
    return jsonify(building_design)

def generate_building_ai(land_width, land_height):
    # Placeholder for AI algorithm to generate building design
    # This function would actually call your AI model or algorithm
    # and return the generated building design
    return {'building_type': 'Skyscraper', 'floors': 20, 'area': land_width * land_height}

if __name__ == '__main__':
    app.run(debug=True)
