import { coins } from './../Data/coins';

export const pay = (toPay,moneyInserted,totalMoneyInserted) => {
    if(toPay === totalMoneyInserted){
        supplyCoins(moneyInserted);
        return true;
    }else{
        const value = totalMoneyInserted - toPay;
        supplyCoins(moneyInserted);
        const change = estimateChange(value);
        return change;
    }
}
export const getStringOfChange = (change) =>{
    let string = "";
    change.forEach(element => {
        string+= `<div>${element.quantity} monedas de ${element.coin} </div>`;
    });
    return string;
}
const supplyCoins = (coinsInserted) =>{
    coinsInserted.forEach(element => {
        if(element.quantity !== 0 && element.coin !== 1000){
            let coinToSupply = coins.find(coin=>coin.coin === element.coin);
            coinToSupply.quantity += element.quantity;
        }
    });
}
export const estimateAmountOfCoin = (coin,amount) => {
    let coinQuantity = 0;
    let coinToPayWith = coins.find(element=>element.coin === coin);
    let maxAmount = coinToPayWith.quantity;
    while(amount >= coin && maxAmount > 0){
        coinQuantity+=1;
        amount-=coin;
        maxAmount--;
    }
    return [amount,coinQuantity];
}
export const verifyCanPayWithThoseCoins = (coinsToPay,coinsNumber) => {
    let coinToPayWith = coins.find(element=>element.coin === coinsToPay);
    if(coinToPayWith.quantity >= coinsNumber){
        coinToPayWith.quantity -= coinsNumber;
        return true;
    }else{
        return false;
    }
}
export const estimateChange = (monto) => {
    let index = 0;
    let change = [];
    while(monto > 0 && index < coins.length){
        const coinsAmount = estimateAmountOfCoin(coins[index].coin,monto);
        if(coinsAmount[1] !== 0){
            const canPay = verifyCanPayWithThoseCoins(coins[index].coin,coinsAmount[1]);
            if(canPay){
                change.push({coin:coins[index].coin,quantity:coinsAmount[1]});
                monto = coinsAmount[0];
            }
        }
        index++;
    }
    if(monto===0){
        return change; 
    }else{
        return false;
    }
}