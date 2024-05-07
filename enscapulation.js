class Item{
    #price = 0
    constructor(name , price,qty){
        this.name = name;
        this.#price = price;
        this._qty = qty;
    }

 totalAmount(price,qty) {

    console.log(`The total amount is ${this.#price * this._qty}`);
    this.#average(price,qty);
 }
 
 setBalance(price){
    if(isNaN(price)){
        throw new Error("Price is not a valid input");
    }
    this.#price = price;
}

getBalance(){
    return this.#price;
}

#average(price,qty){
    console.log(`The average will be ${this.#price * this._qty / this._qty} `);
}

}

let a = new Item("adwew", 94534 , 4);
a.totalAmount(7993,4);
a.setBalance(122);
a.getBalance();
