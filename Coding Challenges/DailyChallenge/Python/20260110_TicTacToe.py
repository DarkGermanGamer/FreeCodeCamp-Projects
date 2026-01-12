def tic_tac_toe(board):
    for index, row in enumerate(board):
        row = board[index]
        col = [board[0][index],board[1][index],board[2][index]]

        if all(item == row[0] for item in row):
            return f'{row[0]} wins'

        
        if all(item == col[0] for item in col):
            return f'{col[0]} wins'

    diag1 = [board[0][0], board[1][1], board[2][2]]
    diag2 = [board[0][2], board[1][1], board[2][0]]
    if (
        all(item == board[1][1] for item in diag1)
        or all(item == board[1][1] for item in diag2)
    ):
        return f'{board[1][1]} wins';
    
    return 'Draw'