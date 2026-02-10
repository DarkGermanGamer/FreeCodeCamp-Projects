def flatten(arr):
    new_array = []

    for item in arr:
        if isinstance(item, list):
            new_array.extend(flatten(item))
        else:
            new_array.append(item)

    return new_array