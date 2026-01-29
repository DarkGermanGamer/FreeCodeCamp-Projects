def scale_image(size, scale):
    width, height = size.split('x')

    width = int(width) * scale
    height = int(height) * scale
    
    return f'{width:.0f}x{height:.0f}'