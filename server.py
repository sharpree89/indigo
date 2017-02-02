from flask import Flask, render_template, redirect

app = Flask(__name__, static_url_path='/static')

# HOME

@app.route('/')
def index():
    return render_template('index.html')

# BUTTONS

@app.route('/buttons')
def buttons_home():
    return render_template('buttonshome.html')

@app.route('/buttons/buttons')
def buttons():
    return render_template('buttons.html')

@app.route('/buttons/tags')
def tags():
    return render_template('tags.html')

# LABELS

@app.route('/labels')
def labels_home():
    return render_template('labelshome.html')

@app.route('/labels/stickys')
def stickys():
    return render_template('stickys.html')

@app.route('/labels/badges')
def badges():
    return render_template('badges.html')


app.run(debug=True)
