class HashTable:
    """Creates a hash table containing key-value-pairs"""
    
    def __init__(self) -> None:
        self.collection = {}

    def hash(self, string: str) -> int:
        """Hashes a string by adding up the unicode values of its individual characters"""
        hash_sum = 0

        for char in string:
            hash_sum += ord(char)

        return hash_sum

    def add(self, key:str, value:str) -> None:
        """Adds a kvp to the hash table"""
        hash_key = self.hash(key)
        
        if hash_key in self.collection:
            self.collection[hash_key][key] = value
        else:
            self.collection[hash_key] = {key: value}

    def remove(self, key:str) -> None:
        """Removes a kvp from the hash table"""
        hash_key = self.hash(key)
    
        if hash_key in self.collection and len(self.collection[hash_key]):
            if key in self.collection[hash_key]:
                del self.collection[hash_key][key]
        elif hash_key in self.collection:
            del self.collection[hash_key]

    def lookup(self, key:str) -> str:
        """Returns the corresponding value of a key"""
        hash_key = self.hash(key)

        if hash_key in self.collection and key in self.collection[hash_key]:
            return self.collection[hash_key][key]
        else:
            return None