def golf_score(par, strokes):
    if strokes == 1:
        return "Hole in one!"
    elif strokes == par - 2:
        return "Eagle"
    elif strokes == par - 1:
        return "Birdie"
    elif strokes == par:
        return "Par"
    elif strokes == par + 1:
        return "Bogey"
    elif strokes == par + 2:
        return "Double bogey"

    return strokes