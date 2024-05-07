function Shapes(shapeType , radius) {

    this.shapeType = shapeType;
    this.radius = radius;

}

Shapes.prototype.showDetails = function(){
    console.log(`The shape structure is ${this.shapeType} `);
    console.log(`The radius is ${this.radius} `);

}

Shapes.prototype.area = function(radius){
  const area = Math.PI*2*radius;
  console.log(`The area is ${area} `);
}


function changeShape(shapeType,radius){
    Shapes.call(this,shapeType,radius);
}

changeShape.prototype = Object.create(Shapes.prototype); // 


let a = new Shapes("circle",5);
a.showDetails();
a.area(5);

let b = new changeShape("reactangle", 10);
b.showDetails();
b.area(10);

// using class
class BankAccount {
    constructor(accountName , accountNumber , accountBalance){
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }

        showAccountDetails(){
            console.log(`The account name is ${this.accountName} `);
            console.log(`The Account Number is ${this.accountNumber} `);
            console.log(`The Account Balance is ${this.accountBalance}`);
        }

        Deposit(amount){
        if(!amount){
            console.log("Amount deposit is failed");
        }
        else{
          this.accountBalance += amount;
         this.showAccountDetails();
        }
        }

        withdraw(amount){
             if(amount === 0 || !amount){
                console.log("Widraw from the bank is not possible");
             }
             
            else if(amount > 0){
                this.accountBalance -= amount;
                this.showAccountDetails()
            }
        }

}
class currentAccount extends BankAccount {

    constructor(accountName,accountNumber,accountBalance){
        super(accountName,accountNumber,accountBalance);
    }

}



let c = new BankAccount("Maven", "e23e2373237", 10000);
c.showAccountDetails()
c.Deposit(1000);
c.withdraw(3432);

let d = new currentAccount("maven2", "213143142133255" , 4755555);
d.showAccountDetails();
d.Deposit(7884);
d.withdraw(4522);