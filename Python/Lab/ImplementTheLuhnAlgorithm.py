def verify_card_number(card_nr:str) -> str:
    without_cd = [
        int(i)
        for i in card_nr
        if i != '-' and i != ' '
    ]
    without_cd.reverse()

    result = 0

    for i, number in enumerate(without_cd):
        if i % 2 == 1:
            number *= 2

            if number > 9:
                number -= 9

        result += number

    if (result) % 10 == 0:
        return 'VALID!'
    else:
        return 'INVALID!'