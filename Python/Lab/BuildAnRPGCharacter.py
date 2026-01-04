def create_character(char_name, strength, intelligence, charisma):
    full_dot = '●'
    empty_dot = '○'

    max_name_length = 10

    min_starting_stat = 1
    max_starting_stat = 4
    max_starting_points = 7
    max_stat = 10

    if not isinstance(char_name, str):
        return 'The character name should be a string'
    if not char_name:
        return 'The character should have a name'
    if len(char_name) > max_name_length:
        return 'The character name is too long'
    if " " in char_name:
        return 'The character name should not contain spaces'

    if not isinstance(strength, int) or not isinstance(intelligence, int) or not isinstance(charisma, int):
        return 'All stats should be integers'
    if not (strength >= min_starting_stat and intelligence >= min_starting_stat and charisma >= min_starting_stat):
        return f'All stats should be no less than {min_starting_stat}'
    if not (strength <= max_starting_stat and intelligence <= max_starting_stat and charisma <= max_starting_stat):
        return f'All stats should be no more than {max_starting_stat}'
    if (strength + intelligence + charisma) != max_starting_points:
        return f'The character should start with {max_starting_points} points'

    def build_stat_line(abrv, stat):
        return f'{abrv} {full_dot * stat}{empty_dot * (max_stat - stat)}'

    return f'{char_name}\n{build_stat_line("STR", strength)}\n{build_stat_line("INT", intelligence)}\n{build_stat_line("CHA", charisma)}'