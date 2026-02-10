def get_bingo_letter(n):
    bingo_table = {
        "B": [1,15],
        "I": [16,30],
        "N": [31,45],
        "G": [46,60],
        "O": [61,75]
    }

    for letter in bingo_table:
        if n >= bingo_table[letter][0] and n <= bingo_table[letter][1]:
            return letter