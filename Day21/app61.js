/*61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
Explain & TIP: Enums are like special lists in your code that help you categorize things.They make your code cleaner and easier to understand.*/
//making a list(enum)
var vehicle_type;
(function (vehicle_type) {
    vehicle_type[vehicle_type["Car"] = 0] = "Car";
    vehicle_type[vehicle_type["Truck"] = 1] = "Truck";
    vehicle_type[vehicle_type["Bike"] = 2] = "Bike";
})(vehicle_type || (vehicle_type = {}));
//Showing one of vehicle from list
console.log("nmbr:", vehicle_type.Car);
//we are just checking what number the car category hold in list
