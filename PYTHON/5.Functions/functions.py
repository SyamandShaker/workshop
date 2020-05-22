# BUILD-IN FUNCTIONS
# ================================================

# PRINT FUNCTION
# print("whatever")
# print("whatever", "and", "ever")

age = 12
# print("age is:", age)
# print("list", [1,2,3], sep=":", end="-------")


# MAX, MIN ROUND
# MAX & MIN
l = [3,6,78,12]
# print( "max value is:", max(l) )
# print( "min value is:", min(l) )

# ROUND
num = 3.2351
# print("rounded number:", round(num, 2) )


# INPUT
# input_val = input("Please enter your birth year: ")
# calc_age = 2020 - int(input_val)
# print("Your age is:", calc_age)



# CUSTOM FUNCTIONS
# ================================================
def calc(x, y = 0):
    # pass # you cannot have an empty function, so use pass to have a valid syntax
    return x + y

print( calc(2, 8) )


# Importing
import time

# print( dir(time) )

local = time.localtime()
# print(local)

current_year = local.tm_year;

def calc_age():
    input_birth_year = input("Birth year, please: ") 
    return current_year - int(input_birth_year)

# print(calc_age())


