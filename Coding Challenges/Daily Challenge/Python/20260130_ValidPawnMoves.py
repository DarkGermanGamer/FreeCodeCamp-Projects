def find_pawn_moves(position):    
    columns = "ABCDEFGH"
    old_coords = [
        columns.index(position[:1]),
        int(position[1:]) - 1
    ]
    possible_moves = [[0,1],[0,2]] if old_coords[1] == 1 else [[0,1]]
    possible_pos = []

    for move in possible_moves:
        new_pos = [old_coords[0] + move[0], old_coords[1] + move[1]]

        if new_pos[0] >= 0 and new_pos[0] < 8 and new_pos[1] >= 0 and new_pos[1] < 8:
            possible_pos.append(columns[new_pos[0]] + str(new_pos[1] + 1))


    return possible_pos