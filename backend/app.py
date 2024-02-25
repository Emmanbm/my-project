from flask import Flask

app = Flask(__name__)
app.config.from_object("config.DevelopmentConfig")

@app.route('/')
def home():
    return '<h1>Welcome home</h1>'

if __name__=='__main__':
    app.run()