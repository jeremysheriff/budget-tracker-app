from flask import Flask
from routes import transaction_routes
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.register_blueprint(transaction_routes)

if __name__ == '__main__':
    app.run(debug=True)