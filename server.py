from flask import Flask, render_template, redirect

app = Flask(__name__, static_url_path='/static')

# HOME

@app.route('/')
def index():
    return render_template('index.html')

# BUTTONS

@app.route('/components')
def buttons_home():
    return render_template('components.html')

@app.route('/components/buttons')
def buttons():
    return render_template('buttons.html')

@app.route('/components/tags')
def tags():
    return render_template('tags.html')

# LABELS

@app.route('/components/stickys')
def stickys():
    return render_template('stickys.html')

@app.route('/components/badges')
def badges():
    return render_template('badges.html')


app.run(debug=True)
