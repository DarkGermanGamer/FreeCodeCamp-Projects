import math

class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def __str__(self):
        line_length = 30
        
        #Center category name between asterisks
        asterisks_per_side = (line_length - len(self.name)) / 2
        receipt = ('*' * math.floor(asterisks_per_side)) 
        receipt += self.name 
        receipt += ('*' * math.ceil(asterisks_per_side))

        #Construct lines for each transaction
        for transaction in self.ledger:
            abbr_description = transaction['description'][0:23]
            amount_string = f'{transaction["amount"]:.2f}'
            filler_spaces = " " * (line_length - (len(abbr_description) + len(amount_string)))

            receipt += f'\n{abbr_description}{filler_spaces}{amount_string}'

        #Add line for total balance
        receipt += f'\nTotal: {self.get_balance():.2f}'

        return receipt

    #Adds a transaction with a positive amount to the ledger
    def deposit(self, amount, description = ''):
        self.ledger.append({
            'amount': amount,
            'description': description
        })

    #Adds a transaction with a negative amount to the ledger if the balanc is high enough
    def withdraw(self, amount, description = ''):
        if(self.check_funds(amount)):
            self.ledger.append({
                'amount': -amount,
                'description': description
            })

            return True
        else:
            return False

    #Calculates and returns the current balance
    def get_balance(self):
        total_amount = 0

        for transaction in self.ledger:
            total_amount += transaction['amount']

        return total_amount

    #Transfers the specified amount to the receiving category if the balance is high enough
    def transfer(self, amount, receiver):
        if(self.check_funds(amount)):
            self.withdraw(amount, f'Transfer to {receiver.name}')
            receiver.deposit(amount, f'Transfer from {self.name}')

            return True
        else:
            return False

    #Checks if amount exceeds the current balance
    def check_funds(self, amount):
        return amount <= self.get_balance()

#Constructs and returns a chart displaying spendings per category
def create_spend_chart(categories):
    chart = 'Percentage spent by category'
    spent_by_cat = {}
    total_spent = 0

    #Calculate spendings for each category and the total amount spent
    for cat in categories:
        spent = 0;

        for transaction in cat.ledger:
            if transaction['amount'] < 0:
                spent += transaction['amount']
        spent = round(spent, 2)

        spent_by_cat[cat.name] = spent
        total_spent += spent        

    #Construct the chart
    for i in range(100,-1, -10):
        line = ' '*(3 - len(str(i))) + str(i) + '|'
        
        for category in spent_by_cat:
            percentage = (spent_by_cat[category] / total_spent) * 100
            line += " o " if percentage >= i else "   "

        chart += f'\n{line} '

    chart += f'\n    {("---"*(len(categories)))}-'

    #Add lines for the vertical category names
    max_cat_name = max([len(cat.name) for cat in categories])
    for i in range(max_cat_name):
        line = '    '
        for cat in categories:
            line += f' {cat.name[i]} ' if len(cat.name) > i else '   '
            
        chart += f'\n{line} '

    return chart
