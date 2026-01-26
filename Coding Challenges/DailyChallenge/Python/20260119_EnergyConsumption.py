def compare_energy(calories_burned, watt_hours_used):
    joules_per_calorie = 4184
    joules_per_wh = 3600

    workout_energy = calories_burned * joules_per_calorie
    device_energy = watt_hours_used * joules_per_wh

    if workout_energy > device_energy:
        return "Workout"
    elif workout_energy < device_energy:
        return "Devices"
    else:
        return "Equal"