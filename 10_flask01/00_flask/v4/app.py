# Team MESS (Stella Oh, Ethan Shenker, Michelle Thuang)
# SoftDev
# K10 -- Putting Little Pieces Together
# 2020-10-12

from flask import Flask
app = Flask(__name__)  # create instance of class Flask


@app.route("/")  # assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"


if __name__ == "__main__":  # true if this file NOT imported # if imported, nothing happens, else, file is ran with debugging enabled
    app.debug = True        # enable auto-reload upon code change
    app.run()
