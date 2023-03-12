export class Product {
    _id?: Number;
    name: string;
    category: string;
    ubication : string;
    price : Number;

    constructor(name: string, category: string, ubication: string, price: Number) {
        this.name = name;
        this.category = category;
        this.ubication = ubication;
        this.price = price;
    }

}