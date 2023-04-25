//Creating object "customer"
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}
console.table(customer);

//Updating customer infomation
customer["email"] = "Jake3Smith1992@gmail.com";
customer.phone = "3195551234";
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawbrry", "matcha"];

console.log(Object.values(customer));

//Deleting some customer info
delete customer["zipCode"];
delete customer["favoriteStore"];
//Adding toppings, future flavors, purchase cost
customer["toppings"] = ['chocolate sprinkles', 'wafer straws', 'gummy bears'];
customer["futureFlavors"] = "mango";
customer["todayPurchaseCost"] = 5.32;

//To see the newest update of table.
console.table(customer);

//Finalize the keys in an array.
console.log(Object.keys(customer));
