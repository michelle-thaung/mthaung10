# Team PurpleSnake (Michelle Thaung, Pak Ming Lau, Yi Ling Wu)
# SoftDev
# K16 -- No Trouble
# 2020-12-16

import sqlite3
import csv

db = sqlite3.connect("school.db")
c = db.cursor()

c.execute("CREATE TABLE IF NOT EXISTS students (name TEXT NOT NULL, age INTEGER NOT NULL, id INTEGER PRIMARY KEY)")
with open("students.csv", "r") as csv_students_file:
    students_reader = csv.DictReader(csv_students_file)
    for row in students_reader:
        c.execute("INSERT OR IGNORE INTO students VALUES ('" + row["name"] + "' ," + row["age"] + " ," + row["id"] + ")")

c.execute("CREATE TABLE IF NOT EXISTS courses (code TEXT NOT NULL, mark INTEGER, id INTEGER, _id INTEGER PRIMARY KEY)")
with open("courses.csv", "r") as csv_courses_file:
    courses_reader = csv.DictReader(csv_courses_file)
    i = 0
    for row in courses_reader:
        c.execute("INSERT OR IGNORE INTO courses VALUES ('" + row["code"] + "' ," + row["mark"] + " ," + row["id"] + " ," + str(i) + ")")
        i += 1

students_db = c.execute("SELECT * FROM courses")
for row in students_db:
    print(row)

print("-------------------------------")

courses_db = c.execute("SELECT * FROM courses")
for row in courses_db:
    print(row)

db.commit()
db.close()