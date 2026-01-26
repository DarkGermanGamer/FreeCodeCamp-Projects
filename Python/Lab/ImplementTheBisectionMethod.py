def square_root_bisection(n:float, tolerance:float = 0.01, max_iterations:int = 10) -> float:
    if n < 0:
        raise ValueError('Square root of negative number is not defined in real numbers')
    elif n == 0 or n == 1:
        print(f'The square root of {n} is {n}')
        return n
    else:
        low = 0
        high = max(1,n)

        for i in range(max_iterations):
            mid = (low + high) / 2
            
            if (high - low) <= tolerance:
                print(f'The square root of {n} is approximately {mid}')
                return mid
            elif mid ** 2 < n:
                low = mid
            else:
                high = mid
        
        print(f'Failed to converge within {max_iterations} iterations')
        return None