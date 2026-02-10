import math

def get_average_grade(scores):
    total_score = 0
    score_table = {
        "A+": [97, 100],
        "A" : [93,  96],
        "A-": [90,  92],
        "B+": [87,  89],
        "B" : [83,  86],
        "B-": [80,  82],
        "C+": [77,  79],
        "C" : [73,  76],
        "C-": [70,  72],
        "D+": [67,  69],
        "D" : [63,  66],
        "D-": [60,  62],
        "F" : [0 ,  59]
    }

    for score in scores:
        total_score += score

    avg_score = math.floor(total_score / len(scores))

    for key, value in score_table.items():
        if(avg_score >= value[0] and avg_score <= value[1]):
            return key