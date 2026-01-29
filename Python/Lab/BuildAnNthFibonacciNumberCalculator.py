def fibonacci(n:int):
    sequence = [0,1]

    if n > 1:
        for i in range(2,n+1):
            sequence.append(sequence[i-2] + sequence[i-1])

    return sequence[n]