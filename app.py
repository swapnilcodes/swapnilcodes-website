from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/explore')
def explore():
    return render_template('explore-section.html')


@app.route('/blogs')
def blogs():
    return render_template('blogs.html')


@app.route('/blog1')
def blog1():
    return render_template('blog-1.html')


@app.route('/blog2')
def blog2():
    return render_template('blog-2.html')


@app.route('/memes')
def memes():
    return render_template('memes.html')


app.run()