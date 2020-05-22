# NUMBERS
# ========================================

# Integers
num_int = 5
# print( type(num_int) )

# Floats
num_float = 5.35
# print( type(num_float) )

# Type conversion
str_int = int("5")
# print(type(str_int))

str_float = float("3.25")
# print(type(str_float))

int_str = str(3)
# print(type(int_str))



# STRINGS
# ========================================
# One line strings
str_one_line = "Marcel is the new kid in town"

# Multi lines string
str_multi_lines = '''
One
T     wo


Three
'''
# print(str_multi_lines)


# STRINGS METHODS
# --------------------------------
s = "python"
ss = "i have two cats YEAH!"

# Length of the string
# print( len(s) )

# print( s.capitalize() )
# print( s.upper() )
# print( ss.lower() )
# print( ss.title() )

# Replace parts of the string
# print( ss.replace("cats", "dogs") )

# Split a string
# print( ss.split() )
# print( ss.split('a') )
# print( ss.split('a', 1) )


# CONCATENATION
# --------------------------------
# In Python you can concatenate only strings
concat = str(3) + "3"
# print(concat)

name = "Marcel"
age = 27

phrase = name + " is " + str(age) + " years old"

# The coolest way to concatenate
phrase = f"{name} is {age} years old"

phrase = "{} is {} years old. {}?".format(name, age, age)
# print(phrase)




# BOOLEANS & NULLS
# ========================================
b_true  = True
b_false = False
b_null  = None



# COLLECTIONS (python arrays)
# ========================================

# LISTS (mutable)
l = [1,2,3,4]
# print( l[2] )


# DICTIONARIES (mutable)
d = {
  "first_name": "Marcel",
  "last_name": "Duchamp",
  "age": 27
}
d["first_name"] = "Bob"
# print(d["first_name"])


# TUPLES (immutable)
t = ("january", "february", "mars")
# print(t[1])


# SET
s1 = {"apple", "", "car", 56}
s2 = {1,8,9,2,48,48,0,99,1}

# print(s2)