class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getDiscountedPrice(discount) {
        return this.price - this.price * discount / 100;
    }

    display() {
        console.log(this.id, this.name, this.price);
    }

    static compareProducts(p1, p2) {
        console.log(p1.price > p2.price ? p1.name : p2.name);
    }
}

class E extends Product {
    constructor(id, name, price, warranty) {
        super(id, name, price);
        this.warranty = warranty;
    }

    display() {
        super.display();
        console.log("Warranty:", this.warranty);
    }
}

let p1 = new Product(1, "Shoes", 2000);
let p2 = new E(2, "Laptop", 60000, "2 years");

p1.display();
console.log("Discounted:", p1.getDiscountedPrice(10));
p2.display();
Product.compareProducts(p1, p2);