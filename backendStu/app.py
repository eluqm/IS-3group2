from flask import Flask
from flask_mysqldb import MySQL

from config import config

app=Flask(__name__)
conexion = MySQL(app)

@app.route('/users/<name>', methods = ["GET"])
def list_users():
	try:
		cursor = conexion.connection.cursor()
		sql = "SELECT FROM users WHERE namecompleto = ´name´"
		cursor.execute(sql)
		datos = cursor.fetchall()
		return
	except Exception as ex:
		return "Error"

@app.route('/projects/<id>', methods=['PUT'])
def update_user(id):
	try:
		cursor = conexion.connection.cursor()
		sql = "UPDATE projects SET likes = likes + 1 WHERE projects.idP = ´id´"
		cursor.execute(sql)
		datos = cursor.fetchall()
		return
	except Exception as ex:
		return "Error"

def pagina_no_encontrada(error):
	return "<h1> Pagina no encontrada </h1>"



if __name__ == "__main__":
	app.config.from_object(config['development'])
	app.register_error_handler(404, pagina_no_encontrada)
	app.run()