# Team MESS (Stella Oh, Ethan Shenker, Michelle Thuang)
# SoftDev
# K10 -- Putting Little Pieces Together
# 2020-10-12

from flask import Flask

# Q0: Where have you seen similar syntax in other langs? Java. Variable = object(<parameter>)
app = Flask(__name__)


# Q1: What points of reference do you have for meaning of '/'? Reference to home directory path of flask app.
@app.route("/")
def hello_world():
    # Q2: Where will this print to? Prints into shell that the python script is running in. Q3: What will it print? __main__
    print(__name__)
    # Q3: Will this appear anywhere? How u know?  No hablo queso! Is displayed on the webpage. We see No hablo queso! printed on the website.
    return "No hablo queso!"


app.run()  # Q4: Where have you seen similar construcs in other languages? Java
