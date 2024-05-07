
function Retail(itemname , itemId , price){

   this.itemname = itemname;
   this.itemId = itemId;
   this.price = price;

   this.DisplayItem = function (){
      console.log(`The Name of the item is ${this.itemname} `);
      console.log(`The Id of the respective item is ${this.itemId} `);
      console.log(`The price of the item is ${this.price} `);
   }


}

// Add a new prototype under the Retail function where add new property to showQuantity

Retail.prototype.Quantity = function(qty){
    this.qty = qty;
    console.log(`The Quantity of the item is ${this.qty} `);
}


let a = new Retail("Dal" , "ASWEDW9923" , 1000);
a.DisplayItem();
a.Quantity(1);
