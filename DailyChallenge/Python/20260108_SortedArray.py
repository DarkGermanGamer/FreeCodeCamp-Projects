def is_sorted(arr):
    ascend = "Ascending"
    descend = "Descending"
    not_sorted = "Not sorted"

    direction = None

    prevNumber = arr[0]

    for number in arr[1:]:
        #If direction hasn't been determined (first loop), determine it
        if not direction:
            direction = ascend if prevNumber <= number else descend
        #If the current number doesn't follow the determined direction, set direction to "Not sorted" and terminate loop
        elif (
            (direction == ascend and prevNumber > number) 
            or (direction == descend and prevNumber < number)
        ):
            direction = not_sorted
            break

        prevNumber = number


    return direction