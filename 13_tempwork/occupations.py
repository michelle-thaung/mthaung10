#Team Meow Wow -- Michelle Thaung, Mary Shang, Stella Oh
#SoftDev
#K13: Template for Success
#2020-10-18

from csv import DictReader
from random import choices as c

def select(file: str, path: str) -> str:
    with open(file + path) as file:  # open the file
        reader = DictReader(file)

        jobs = []
        weights = []

        for row in reader:
            jobs.append(row["Job Class"])
            # casts each str into a float
            weights.append(float(row['Percentage']))

    file.close()

    return c(jobs[:-1], weights=weights[:-1])[0]


def get_occs_list(file: str, path: str) -> list:
    with open(file + path) as file:
        reader = DictReader(file)

        jobs = []

        for row in reader:
            jobs.append(row["Job Class"])
    file.close()

    return jobs[:-1]

def get_percentage_list(file: str, path: str) -> list:
    with open(file + path) as file:
        reader = DictReader(file)

        percentages = []

        for row in reader:
            percentages.append(row["Percentage"])
    file.close()

    return percentages[:-1]


if __name__ == "__main__":
    print(select("occupations.csv"))
    print(get_occs_list('occupations.csv'))
