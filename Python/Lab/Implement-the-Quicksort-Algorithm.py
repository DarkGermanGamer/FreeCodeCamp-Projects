def quick_sort(array):
    if len(array) <= 1:
        return array

    new_array = []
    pivot = array[0]

    less_than_pivot = [i for i in array if i < pivot]
    equal_pivot = [i for i in array if i == pivot]
    greater_than_pivot = [i for i in array if i > pivot]

    if not less_than_pivot and not greater_than_pivot:
        return equal_pivot
    else:
        new_array += quick_sort(less_than_pivot)
        new_array += quick_sort(equal_pivot)
        new_array += quick_sort(greater_than_pivot)

        return new_array