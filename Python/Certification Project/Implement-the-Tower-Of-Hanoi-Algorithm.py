def hanoi_solver(amount:int) -> None:
    tower = TowerOfHanoi(amount)
    
    def move(num_disks, src = 0, temp = 1, dest = 2):
        if num_disks == 1:
            tower.move_disk(src, dest)          
        else:
            move(num_disks - 1, src, dest, temp)
            tower.move_disk(src, dest)           
            move(num_disks - 1, temp, src, dest)

    move(amount)
    return tower.get_path()

class TowerOfHanoi:
    def __init__(self, amount:int) -> None:
        self.__amount = amount
        self.reset()

    def __str__(self) -> str:
        return ' '.join(str(rod) for rod in self.__rods)

    def reset(self) -> None:
        self.__rods = [Rod(self.__amount), Rod(0), Rod(0)]
        self.__path = str(self)

    def get_path(self) -> str:
        return self.__path

    def move_disk(self, source:int, target:int) -> None:
        source_rod = self.__rods[source]
        target_rod = self.__rods[target]

        if source_rod.get_size() == 0:
            print("Can't remove disk from empty rod")

        if target_rod.get_size() != 0 and target_rod.get_last() < source_rod.get_last():
            print("Can't stack bigger disk on smaller.")

        target_rod.push(source_rod.pop())
        self.__path += f'\n{str(self)}'

class Rod:
    def __init__(self, amount:int) -> None:
        self.__disks = [i for i in range(amount,0,-1)]

    def __str__(self) -> str:
        result = ', '.join([str(i) for i in self.__disks])

        return f'[{result}]'

    def get_last(self) -> int:
        if self.get_size() == 0:
            return 0
        else:
            return self.__disks[len(self.__disks)-1]

    def get_size(self) -> int:
        return len(self.__disks)

    def pop(self) -> int:
        if(self.get_size() > 0):
            return self.__disks.pop()
        else:
            print("Can't remove disk from empty rod")

    def push(self, n:int) -> None:
        if(
            self.get_size() == 0
            or n < self.get_last()
        ):
            self.__disks.append(n)
        else:
            print(f"Can't stack bigger disk {n} on smaller {self.get_last()}")