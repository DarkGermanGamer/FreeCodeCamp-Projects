def nth_fibonacci(n):
    fibonacci = [0,1]

    for i in range(2,n):
        fibonacci.append(fibonacci[i-2] + fibonacci[i-1])

    return fibonacci[n-1]