def dfs_n_queens(n):
    solutions = []
    tempSol = []

    if n < 1:
        return solutions

    def is_valid(row, column):
        if not tempSol:
            return True

        #Check columns
        if column in tempSol:
            return False

        #Check diagonals
        for i,j in enumerate(tempSol):
            if row + column == i + j:
                return False
            if (n - row + column) == (n - i + j):
                return False
        
        return True

    
    def placeQueen(row):
        nonlocal solutions
        if row < n:
            for col in range(n):
                if is_valid(row, col):
                    tempSol.append(col)
                    placeQueen(row+1)
                    tempSol.pop()
        else:
            solutions.append(tempSol.copy())

    placeQueen(0)
    return solutions