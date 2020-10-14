# Team MESS (Stella Oh, Ethan Shenker, Michelle Thuang)
# SoftDev
# K12 -- ...or The Only Constant is Change?
# 2020-10-14

# Q0: What happens if you remove render_template from this line?
# A0: Name Error displayed by Flask - name render_template not found
from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def hello_world():
    return "No hablo queso!"


coll = [0, 1, 1, 2, 3, 5, 8]


# Q1: Can all of your teammates confidently predict the URL to use to load this page?
# A1: Yes. (localhost:5000/my_foist_template)
@app.route("/my_foist_template")
def test_tmplt():
    # Q2: What is the significance of each argument?
    # A2: Answered in notes.txt
    return render_template('model_tmplt.html', foo="fooooo", collection=coll)


if __name__ == "__main__":
    app.debug = True
    app.run()
