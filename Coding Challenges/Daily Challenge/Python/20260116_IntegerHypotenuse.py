import math

def is_integer_hypotenuse(a, b):
    a_sqr = a*a
    b_sqr = b*b
    c = math.sqrt(a_sqr + b_sqr)

    return c == int(c)