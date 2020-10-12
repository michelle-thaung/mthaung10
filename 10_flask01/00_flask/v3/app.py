# Team MESS (Stella Oh, Ethan Shenker, Michelle Thuang)
# SoftDev
# K10 -- Putting Little Pieces Together
# 2020-10-12

from flask import Flask
app = Flask(__name__)  # create instance of class Flask


@app.route("/")  # assign fxn to route
def hello_world():
    print("about to print __name__...")
    # where will this go? both of these print statements will show up in the shell
    print(__name__)
    return "No hablo queso!"


app.debug = True  # if there are any errors within the code, the website shows a full traceback of where the error occurred
app.run()
