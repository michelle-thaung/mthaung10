# Team MESS (Stella Oh, Ethan Shenker, Michelle Thuang)
# SoftDev
# K10 -- Putting Little Pieces Together
# 2020-10-12

from flask import Flask
app = Flask(__name__)  # create instance of class Flask


@app.route("/")  # assign fxn to route
def hello_world():
    # only change from v0 is that "__main__" isn't printed to shell
    return "No hablo queso!"


app.run()
