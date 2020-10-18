#Team Meow Wow -- Michelle Thaung, Mary Shang, Stella Oh
#SoftDev
#K13: Template for Success
#2020-10-18

from flask import Flask, render_template
from occupations import select, get_occs_list, get_percentage_list
app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Welcome!"

occupations = get_occs_list("data/", "occupations.csv")
percentages = get_percentage_list("data/", "occupations.csv")
team_name = 'Team Meow Wow -- Michelle Thaung, Mary Shang, Stella Oh'

@app.route("/occupyflaskst")
def test_tmplt():
    occ = select("data/", "occupations.csv")
    return render_template('tablified.html', title='Occupations', TNPG=team_name, heading='Random Occupations', collection=occupations, percentage=percentages, rand_occ=occ)


if __name__ == "__main__":
    app.debug = True
    app.run()