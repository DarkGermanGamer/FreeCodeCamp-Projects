import math

def get_number_of_plants(field_size, unit, crop):
    unit_dict = {
        "acres": 4046.86,
        "hectares": 10000
    }
    crop_dict = {
        "corn": 1,
        "wheat": 0.1,
        "soybeans": 0.5,
        "tomatoes": 0.25,
        "lettuce": 0.2
    }
    
    size_in_meters = field_size * unit_dict[unit]
    max_crops = math.floor(size_in_meters / crop_dict[crop])

    return max_crops