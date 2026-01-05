def tire_status(pressures_psi, range_bar):
    bar = 14.5038

    statusLow = "Low"
    statusGood = "Good"
    statusHigh = "High"

    tireStatus = []

    for index, tirePressure in enumerate(pressures_psi):
        minPressure, maxPressure = range_bar

        minPressure *= bar
        maxPressure *= bar

        if tirePressure < minPressure:
            tireStatus.append(statusLow)
        elif tirePressure > maxPressure:
            tireStatus.append(statusHigh)
        else:
            tireStatus.append(statusGood)

    return tireStatus