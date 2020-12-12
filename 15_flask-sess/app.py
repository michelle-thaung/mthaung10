# Team PurpleSnake (Michelle Thaung, Pak Ming Lau, Yi Ling Wu)
# SoftDev
# K15 -- Sessions Greetings
# 2020-12-14

from flask import Flask, render_template, request, session
import os

app = Flask(__name__)
user = "purplesnake" #hardcoded username
passphrase = "pleasesendhelp" #hardcoded password

@app.route("/", methods=["GET", "POST"])
def root():
    if(request.method == "POST"):
        session["username"] = request.form["username"] #setting the session cookies to form inputs
        session["password"] = request.form["password"]
        if(session["username"] == "" and session["password"] == ""): #different templates for different errors 
            return render_template("no_credentials.html")
        elif(session["username"] == ""):
            return render_template("no_username.html")
        elif(session["password"] == ""):
            return render_template("no_password.html")
        elif(session["username"] != user and session["password"] != passphrase):
            return render_template("wrong_credentials.html")
        elif(session["username"] != user):
            return render_template("wrong_username.html")
        elif(session["password"] != passphrase):
            return render_template("wrong_password.html")
    if("username" in session and session["username"] == user and "password" in session and session["password"] == passphrase): #checking if session cookies match up with hardcoded credentials
        return render_template("welcome.html", userID=session["username"])
    return render_template("login.html") 

@app.route("/logout", methods=["GET", "POST"])
def logout():
    if(request.method == "POST"):
        session.pop("username") #delete session user/pass
        session.pop("password")
    return render_template("login.html")

if __name__ == "__main__":
    app.secret_key = os.urandom(32) #set secret key to random 32-bit character
    app.debug = True
    app.run()