import math

class Rectangle:
    def __init__(self, width: int, height: int) -> None:
        self.width = width
        self.height = height

    def __str__(self) -> str:
        return f'Rectangle(width={self.width}, height={self.height})'

    def set_width(self, width: int) -> None:
        self.width = width

    def set_height(self, height: int) -> None:
        self.height = height

    def get_area(self) -> int:
        return self.width * self.height

    def get_perimeter(self) -> int:
        return 2*(self.width + self.height)

    def get_diagonal(self) -> float:
        return math.sqrt(self.width ** 2 + self.height ** 2)

    def get_picture(self) -> str:
        picture = ''

        if self.width > 50 or self.height > 50:
            return 'Too big for picture.'

        for i in range(self.height):
            picture += f'{"*" * self.width}\n'

        return picture

    def get_amount_inside(self, shape) -> int:
        return math.floor(self.get_area() / shape.get_area())

class Square(Rectangle):
    def __init__(self, width: int) -> None:
        super().__init__(width, width)

    def __str__(self) -> str:
        return f'Square(side={self.width})'

    def set_width(self, width: int) -> None:
        self.width = width
        self.height = width
   
    def set_height(self, height: int) -> None:
        self.width = height
        self.height = height
    
    def set_side(self, side: int) -> None:
        self.width = side
        self.height = side