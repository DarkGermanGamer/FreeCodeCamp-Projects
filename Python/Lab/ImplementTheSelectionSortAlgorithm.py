def selection_sort(array):
    for i, item in enumerate(array):
        remaining_array = array[i:];

        min_item = min(array[i:])
        min_index = array[i:].index(min_item) + i

        if min_item != item:
            array[min_index], array[i] = item, min_item

    return array
