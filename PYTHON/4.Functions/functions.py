# BULLD-IN FUNCTIONS
# =========================

# PRINT FUNCTION
#print("whatever")
#print("whatever", "and", "ever")

age = 12
#print("age is:", age)
#print("list\n", [1,2,3], sep=":")

# MAX, MIN ROUND
# MAX & MIN
l = [3,6,34,26]
# print("max valu is:", max(l))
# print("min valu is:", min(l))

# ROUND
num = 3.2455
#print("rounded number:", round(num,2))

# INPUT 
#input_val = input("please enter your birth year: ")
#calc_age = 2020 - int(input_val)
#print("Your age is: ", calc_age)

# CUSTOM
# =========================
def calc(x,y):
  #pass # you cannot have an empty function, so pass to have a valid syntax
  return x + y

#print(calc(2,2))

# Importing
import time
#print(dir(time))

local = time.localtime()
current_year = local.tm_year

#input_val = input("please enter your birth year: ")
#calc_age = current_year - int(input_val)
#print("Your age is: ", calc_age)

def calc_age():
  input_val = input("Birth year, please: ")
  return current_year - int(input_val)

print(calc_age())
