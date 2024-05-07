// const user1 = {
//     firstname:"Maven",
//     lastname:"Banerjee",
//     age:22,

//     getYear : function(age){
//    return new Date().getFullYear() - user.age;
//     }

// }
// //

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

// // let a = new BankAccount("Arijit", 12321334324 , 3433);
// // a.Deposit(1000);

// class user {
//     constructor(firstname , lastname ,age){
//         this._firstname = firstname;
//         this._lastname = lastname;
//         this._age = age;
//     }
    
// }

// ===============================

const accounts = []
const accountForm = document.querySelector("#accountform");
const accountName = document.querySelector("#accountName");
const accountNumber = document.querySelector("#accountNumber");
const createAccountBtn = document.querySelector("#createAccount");
const depositForm = document.querySelector("#depositForm");
const depositAmount = document.querySelector("#depositAmount");





accountForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    let account = new BankAccount(accountName.value , +accountNumber.value);
    accounts.push(account);
    console.log(accounts);
} )


depositForm.addEventListener("submit",(e)=>{
    e.preventDefault();
let account = accounts.find((account) => account.accountNumber === +accountNumber.value);
account.Deposit(depositAmount.value);
})