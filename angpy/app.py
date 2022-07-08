from flask import Flask, render_template

app = Flask(__name__, static_folder="dist/firstapp", template_folder="dist")

@app.route("/")
def hello():
    return render_template('firstapp/index.html')

print('Starting Flask!')

app.debug=True
app.run(host='0.0.0.0')