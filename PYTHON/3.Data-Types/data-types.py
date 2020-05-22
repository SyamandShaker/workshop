# NUMBERS
# =========================

# Integers
num_int = 5
#print(type(num_int))

# Floats
num_float = 5.35
#print(type(num_float))

# Type conversion
# str_int = int("3.25") !!!!!!!!!!clear
#print(type(str_int))

str_float = float("3.25")
#print(type(str_float))

int_str = str(3)
#print(type(int_str))

# STRINGS
# =========================
str_one_line = "Marcel is the new kid in town"

str_multi_lines = ''' 
Hola
Ha   y


hololo
'''
#print(str_multi_lines)


# STRINGS NETHODS
# =========================
s = "Python"
ss = "i have two cats YEAH!"
#print(len(s))

#print(s.capitalize())
#print(s.upper())
#print(ss.lower())
#print(ss.title())

# eplace parts of the string
#print(ss.replace("cats", "dogs"))

# Split a string
#print(ss.split())
#print(ss.split(1, "s"))

concat = str(3) + "3"
#print (concat)

name = "Marcel"
age = 27

pharse = name + " is " + str(age) + " years old"

# The coolest way to concatenate
pharse = f"{name} is {age} years old"

pharse = "{} is {} years old. {}?".format(name, age, age)
#print(pharse)

# BOOLEANS & NULLS
# =========================
boolean_true = True
boolean_false = False
boolean_null = None



# COLLECTIONS (python arrays)
# =========================
liste = [1,2,3,4,5]

#print(liste[2])


# DICTIONARY (mutable)
dictionary = {
  "first_name": "Marcel",
  "last_name": "Duchamp",
  "age": 37
}
dictionary["first_name"] = "Bob"
#print(dictionary["first_name"])
#print(dictionary["first_name "])


# TUPLES (immutable)
tuples = ("january", "feruary", "mars")
#rrprint(tuples[1])


# SET 
set1 = {"apple", "car", 56}
set2 = {8,9,3,3,56,23,6,23}

#print(set2)