// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {    // Step 1
    for (var dish of dishData) {    // Step 2
        var finalPrice;             // Step 3
        if (taxBoolean == true) {           // Step 4
           finalPrice = dish.price * tax;
        } else if (taxBoolean == false) {     //Step 5
            finalPrice = dish.price;
        } else {                            // Step 6
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        // Step 7:
        console.log("Dish: " + dish.name + " Price: $" + finalPrice);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {  // Step 8
    getPrices(taxBoolean);                  // Step 9
    var errMsg = 'The second argument must be a number between 0 and 30';
    try {                                   // Step 10
        if (typeof(guests) == 'number') {
            if (guests > 0 && guests < 30) {
                // Step 11:
                var discount = 0;
                if (guests < 5) {
                    discount = 5;
                } else {
                    discount = 10;
                }
                console.log('Discount is: $' + discount);
            } else {
                // Step 12 (a)
                console.log(errMsg);
            }
        } else {
            // Step 12 (b)
            console.log(errMsg);
        }
    } catch (err) {
        console.log(errMsg);
    }

}

// Call getDiscount()
getDiscount(true, 2);

// If don't pass any arguement, it will tell "need boolean" and "must be between 0-30"

// Call getDiscount()
// getDiscount(true,2);
// getDiscount(false,2);
// getDiscount(true,5);
// getDiscount(false,6);
// getDiscount(true,40);
 getDiscount(true,-1);
 getDiscount(3,2);
 getDiscount(true,40);