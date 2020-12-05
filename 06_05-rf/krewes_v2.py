#Team Summer Jam --  Michelle Thaung,  Jonathan Lee, Saqif Abedin
#SoftDev
#K06 -- Learnination Through Amalgamation/aka making 05 better/Amalgamated code by adding comments, simplified code
#2020-09-30

import random

KREWES = { #Dictionary of teamnames; value of each entry is a list of names
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE',
                'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA',
                'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER',
            'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDY', 'SAQIF', 'CINDY', 'YI LING',
                 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

teamName = "" #Making the variable

while teamName not in KREWES: #keep it running until you get the response you want
    teamName = str(input("Choose a crew from orpheus, rex, or endymion: ")).lower() #Asks for a team, then makes it lowercase to eliminate potential errors

print(random.choice(KREWES[teamName])) #Prints teamname after escaping the while loop