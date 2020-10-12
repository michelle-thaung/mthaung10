# Team MESS (Stella Oh, Ethan Shenker, Michelle Thuang)
# SoftDev
# K10 -- Putting Little Pieces Together
# 2020-10-12

from flask import Flask
from occupations import select, get_occs_list

app = Flask(__name__)  # create instance of class Flask


@app.route("/")  # assign fxn to route
def rand_occ():

    output = '''<!DOCTYPE html> <html> <body> <p>Team MESS (Stella Oh, Ethan Shenker, Michelle Thuang) </p>'''

    output += '''<p> {} </p>'''.format(select("occupations.csv"))

    output += '''<p> {} </p> </body> </html>'''.format(
        str(get_occs_list("occupations.csv")))

    return output


if __name__ == "__main__":  # true if this file NOT imported # if imported, nothing happens, else, file is ran with debugging enabled
    app.debug = True        # enable auto-reload upon code change
    app.run()
