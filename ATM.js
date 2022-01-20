var input = require("prompt-sync")();
console.log("WelCome to SBI Atm !!!")
console.log("swipe or card her !!!")

var balance=50000
const password=1234

var pin=Number(input("enter your pin---"))
if (pin === 1234){
    console.log("curuct pin!!!! \n1) ENGLISH\n2) हिंदी\n3) मराठी")
    const language = Number(input("enter the your choise!!!"))
    if (language == 1){
        console.log("1) Balance Enquiry\n2) Withdrow\n3) Deposit\n4) exit\n")
        const user1 = Number(input("enter the your choise !!!"))
        if (user1 == 1){
            console.log("your acaunt available balance is",balance,"!!!")
        }
        else if (user1 == 2){
            let withdrow = Number(input("how much money do you want to withdraw:-")) 
            if (balance >= withdrow){
                var m = balance-withdrow
                console.log("You Withdrew",withdrow,"Rupees From Your Account\nyour withrow successfull\nyour available balance is",m,"!!!")
            }
            else{
                console.log("aapne jo balance dala hai utna aapke acaunt me paryapt nhi hai!!!")
                console.log("available balance",balance,"hai")
            }
        }
        else if (user1 == 3){
           const diposit = Number(input("how much balance do you want to put:-"))
           let n = balance+diposit
           console.log("your cash diposit successfull!!\nyour acaunt balance is",n,"!!!")
        }
        else{
            console.log("aap atm se bahar gye ho!!!")
        }
    }
}
else{
    console.log('Wrong pin !!!')
    console.log('please enter the curect pin !!')
}
