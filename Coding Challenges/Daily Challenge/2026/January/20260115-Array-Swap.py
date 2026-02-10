def array_swap(arr):
    new_arr = arr

    new_arr.append(arr[0])
    new_arr.pop(0)

    return new_arr