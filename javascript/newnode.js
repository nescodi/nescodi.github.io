const amount = 10000
const checkValue = ()=>{
    if (amount <= 1000){
        let message = "amount is too small"
        return message
    }else{
        let message = "yeah we good"
        return message
    }
    }
    console.log(checkValue())