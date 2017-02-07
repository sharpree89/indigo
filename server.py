from flask import Flask, render_template, redirect

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/components')
def components():
    return render_template('components.html')

@app.route('/about')
def about():
    return render_template('about.html')


app.run(debug=True)
