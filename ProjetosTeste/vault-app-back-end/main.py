from flask import Flask, request, jsonify

app = Flask(__name__)

data = {}
next_id = 1


@app.route("/items", methods=["POST"])
def create_item():
    global next_id

    body = request.get_json()

    if not body or "nome" not in body:
        return jsonify({"erro": "Campo 'nome' é obrigatório"}), 400

    item = {
        "id": next_id,
        "nome": body["nome"],
        "descricao": body.get("descricao", "")
    }

    data[next_id] = item
    next_id += 1

    return jsonify(item), 201


@app.route("/items", methods=["GET"])
def list_items():
    nome = request.args.get("nome")

    if nome:
        resultado = [
            item for item in data.values()
            if nome.lower() in item["nome"].lower()
        ]
        return jsonify(resultado), 200

    return jsonify(list(data.values())), 200


@app.route("/items/<int:item_id>", methods=["GET"])
def get_item(item_id):
    item = data.get(item_id)

    if not item:
        return jsonify({"erro": "Item não encontrado"}), 404

    return jsonify(item), 200


@app.route("/items/<int:item_id>", methods=["PUT"])
def update_item(item_id):
    item = data.get(item_id)

    if not item:
        return jsonify({"erro": "Item não encontrado"}), 404

    body = request.get_json()

    if not body:
        return jsonify({"erro": "JSON inválido"}), 400

    item["nome"] = body.get("nome", item["nome"])
    item["descricao"] = body.get("descricao", item["descricao"])

    data[item_id] = item
    return jsonify(item), 200


@app.route("/items/<int:item_id>", methods=["DELETE"])
def delete_item(item_id):
    if item_id not in data:
        return jsonify({"erro": "Item não encontrado"}), 404

    del data[item_id]
    return jsonify({"mensagem": "Item excluído com sucesso"}), 200


if __name__ == "__main__":
    app.run(debug=True)