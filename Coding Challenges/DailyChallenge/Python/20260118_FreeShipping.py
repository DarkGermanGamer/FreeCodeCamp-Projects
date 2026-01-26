def gets_free_shipping(cart, minimum):
    catalogue = {
        "shirt": 34.25,
        "jeans": 48.50,
        "shoes": 75.00,
        "hat": 19.95,
        "socks": 15.00,
        "jacket": 109.95
    }
    total_price = 0

    for item in cart:
        total_price += catalogue[item]
        
        if total_price > minimum:
            return True
    else:
        return False