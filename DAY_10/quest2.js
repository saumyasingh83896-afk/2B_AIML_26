class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited: " , amount);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrew: " , amount);
        } else {
            console.log("Insufficient funds.");
        }
    }

    displaysBalance() {
        console.log("Account Number: " , this.accountNumber);
        console.log("Account Holder: " , this.accountHolder);
        console.log("Balance: " , this.balance);
        console.log("-----------------------------");
    }

    static bankInfo() {
        console.log("Welcome to PNB Bank");
        console.log("We offer various banking services.");
        console.log("-----------------------------");
    }

}

    let account1 = new BankAccount(101, "Saumya", 5000);
    let account2 = new BankAccount(102, "Shivi", 3000);
     
    account1.deposit(2000);
    account1.withdraw(1000);
    account1.displaysBalance();

    BankAccount.bankInfo();
