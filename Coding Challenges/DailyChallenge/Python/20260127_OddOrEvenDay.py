import datetime

def odd_or_even_day(timestamp):
    date = datetime.datetime.utcfromtimestamp(timestamp/1000)
    day = int(date.strftime('%d'))

    if day % 2 == 0:
        return "even"
    else:
        return "odd"