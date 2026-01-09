import math

def is_circular_prime(n):
    numbers = [int(i) for i in str(n)]

    for i in numbers:
        number = int(''.join([str(i) for i in numbers]))

        if not is_prime(number):
            return False

        rotate_array(numbers)
    else:
        return True


def rotate_array(list):
    list.append(list[0])
    list.pop(0)

    return list

def is_prime(n):
    sqr_root = math.sqrt(n)
    
    for i in range(2, math.floor(sqr_root)):
        if n % i == 0:
            return False
    else:
        return True