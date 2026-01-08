def add_setting(settings, kvp):
    key, value = [i.lower() for i in kvp]
    
    if key in settings.keys():
        message = f"Setting '{key}' already exists! Cannot add a new setting with this name."
    else:
        settings[key] = value
        message = f"Setting '{key}' added with value '{value}' successfully!"

    return message

def update_setting(settings, kvp):
    key, value = [i.lower() for i in kvp]
    
    if key in settings.keys():
        settings[key] = value
        message = f"Setting '{key}' updated to '{value}' successfully!"
    else:
        message = f"Setting '{key}' does not exist! Cannot update a non-existing setting."

    return message

def delete_setting(settings, key):
    key = key.lower()
    
    if key in settings.keys():
        settings.pop(key)
        message = f"Setting '{key}' deleted successfully!"
    else:
        message = "Setting not found!"

    return message

def view_settings(settings):
    message = ''

    if not settings:
        message = 'No settings available.'
    else:
        message = 'Current User Settings:\n'

        for key, value in settings.items():
            message += f'{key.title()}: {value}\n'
    
    return message

test_settings = {'testkey': 'testvalue', 'theme': 'light'}

print(add_setting(test_settings, ('volume', 'high')))
print(delete_setting(test_settings, 'theme'))
