# MODULES
# ---------------------------------------

# IMPORT: Getting a module
# import math

# Create a module alias
# import math as m

# See all the methods inside math module
# print( dir(m) )

# mf = m.floor(5.45)
# print(mf)

# mc = m.ceil(5.45)
# print(mc)

# You can import ONLY the methods you need
from math import ceil, floor

# mf = floor(5.45)
# print(mf)

# mc = ceil(5.45)
# print(mc)


# IMPORT CUSTOM MODS and METHODS
from mod import printus

printus(3*3)