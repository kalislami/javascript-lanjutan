class Activity {
    constructor (amount) {
        this.amount = amount
    }
    
    setAmount(amount) {
        const isValid = amount > 0
        
        if (isValid) {
            this.amount = amount
        }
        
        return isValid
    }
    
    getAmount () {
        return this.amount
    }
}

class Payment extends Activity {
    constructor(amount, receiver) {
        super(amount);
        this.member = receiver
    }
    
    setReceiver(receiver) {
        this.member = receiver
    }
    
    getReceiver() {
        return this.member
    }
}

class Refund extends Activity {
    constructor(amount, sender) {
        super(amount);
        this.member = sender
    }
    
    setSender(sender) {
        this.member = sender
    }
    
    getSender() {
        return this.member
    }
}


const paymentObj = new Payment(20000, 'kamal');
console.log(`Payment object created with amount ${paymentObj.getAmount()} and receiver ${paymentObj.getReceiver()}\n`);
if(paymentObj.setAmount(0)) {;
    console.log(`Amount updated to 30000\n`);
}
else {
    console.log(`Amount not updated\n`);
}