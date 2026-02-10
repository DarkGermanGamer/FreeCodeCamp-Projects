def knight_moves(position):
    possible_moves = [[-2,1],[-2,-1],[-1,2],[-1,-2],[1,2],[1,-2],[2,1],[2,-1]]
    columns = "ABCDEFGH"
    old_coords = [
        columns.index(position[:1]),
        int(position[1:]) - 1
    ]
    possible_pos = []

    for move in possible_moves:
        new_pos = [old_coords[0] + move[0], old_coords[1] + move[1]]

        if new_pos[0] >= 0 and new_pos[0] < 8 and new_pos[1] >= 0 and new_pos[1] < 8:
            possible_pos.append(columns[new_pos[0]] + str(new_pos[1] + 1))


    return len(possible_pos)