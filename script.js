function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
    this.size = size;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", size is " + this.size + " and the price is " + this.price + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver", "small");
var Lumia640 = new Phone ("Microsoft", 600, "black", "medium" );
var LG_K10 = new Phone ("LG", 2800, "red", "large");

iPhone6S.printInfo();
Lumia640.printInfo();
LG_K10.printInfo();
