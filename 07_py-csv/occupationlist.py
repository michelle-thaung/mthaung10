#Team Summer Jam -- Michelle Thaung, Jonathan Lee, Saqif Abedin
#SoftDev
#K07 -- Stl/O: Divine your Destiny (or, figure out chance)
#2020-09-30

# First off, we had to open the CSV file. "with" seemed like the most elegant way to do it (not having to worry about opening/closing, so we went *with* that.)
# The csv library was used so we could go through the file easily, skipping the first line (the header, which would introduce issues with str/float), and putting the rest in a dictionary with correct key-value pairs.
# Then, we removed the last line since it was for the total percentages, and its big number would mess the data up.
# Using random.choices, each key was weigted by its value. Then we had to use [0] since it returns a list.
# Finally, we added the percent chance for the resulting key (looked better honestly)

import csv #could also do it with loops but that would be really long. Might also do it later?
import random

occupationsdict = {} #dictionary created!

with open('occupations.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter =',') #reading the csv file
    next(csv_reader) #skip first line, 
    for row in csv_reader: #for each row
        occupationsdict[row[0]] = float(row[1]) #putting the stuff in the dict (name key, percent value). Throws an error without the float() part- defaults to str?

del occupationsdict['Total'] #useless last line

result = random.choices(list(occupationsdict.keys()), weights = occupationsdict.values(), k = 1) #using the values as the weights for probability, and the last line's total percent as the total weight!

#whoops, random.choices() returns a list. Gotta get the 0th index of a 1 item list.
print(result[0] + " (Chance: " + str(occupationsdict.get(result[0])) + "%)") #Also shows the percent chance! Nice!