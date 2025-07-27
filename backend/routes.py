from flask import Blueprint, request, jsonify
from models import transactions, init_db

transaction_routes = Blueprint('transaction_routes', __name__)

@transaction_routes.route('/api/transactions', methods=['GET'])
def get_transactions():
    return jsonify(transactions)

@transaction_routes.route('/api/transactions', methods=['POST'])
def add_transaction():
    data = request.get_json()
    transactions.append(data)
    return jsonify({"message": "Transaction added"}), 201