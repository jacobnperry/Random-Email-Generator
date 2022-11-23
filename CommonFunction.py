
import csv
import json
import string 
import random

data = {}
emails = []
header = ["email"]
def choice():
    # create a dictionary

    print("make choice")
    functionChoice = input("Number: ")
    print("Outside choice")
    while int(functionChoice) != 0:
        if int(functionChoice) == 1:
            print("Choice 1")
            generator("jacob.perry", 10)
            functionChoice = 0
        elif int(functionChoice) == 2:
            print("Choice 2")
            functionChoice = 0
    
        
 
# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
     

     
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        i = 0
        # Convert each row into a dictionary
        # and add it to data
        for rows in csvReader:
            data[i] = rows
            i += 1
           
 
    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))

# open the file in the write mode




def generator(root, volume):
    i = 0
    newRoot = root + "+"
    print(newRoot + " ", volume)
    emails.append(newRoot + "@drip.com")
    i = i + 1
    print(emails)



def csvWriter(filename,header, emails):
    with open(filename, 'w', encoding='UTF8', newline='') as f:
    # create the csv writer
        writer = csv.writer(f)

    # write a row to the csv file
        writer.writerow(header)
        writer.writerows(emails)

choice()
