# Team PurpleSnake (Michelle Thaung, Pak Ming Lau, Yi Ling Wu)
# SoftDev
# K14 -- Form and Function
# 2020-12-10

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def login():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    #print("***DIAG: request.args['username']  ***")
    #print(request.args['username'])
    print("***DIAG: request.headers ***")
    print(request.headers)
    return render_template("login.html")

@app.route("/auth", methods=["GET", "POST"])
def authenticate():
    print("\n\n\n")
    print("***DIAG: this Flask obj ***")
    print(app)
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    print("***DIAG: request.headers ***")
    print(request.headers)
    if(request.method == "GET"):
        print("***DIAG: request.args['username']  ***")
        print(request.args['username'])
        return render_template("response.html", username = request.args["username"], reqMethod = request.method)
    else:
        print("***DIAG: request.form['username']  ***")
        print(request.form['username'])
        return render_template("response.html", username = request.form["username"], reqMethod = request.method)

if __name__ == "__main__":
    app.debug = True
    app.run()