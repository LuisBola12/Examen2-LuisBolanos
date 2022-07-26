import  {estimateAmountOfCoin,estimateChange,verifyCanPayWithThoseCoins} from '../Utils/pay';

test( 'Estimates the amount of coins to be paid by a type of coin, and when it cannot use more that coin.', () => {
    const coin =  100;
    const money = 450;
    expect(estimateAmountOfCoin(coin,money)).toStrictEqual([50,4]);
});
test( 'Estimates the amount of coins to be paid with 25 an 100 of money.', () => {
    const coin =  25;
    const money = 100;
    expect(estimateAmountOfCoin(coin,money)).toStrictEqual([0,4]);
});
test( 'Estimates the amount of coins to be paid with 50 an 100 of money.', () => {
    const coin =  50;
    const money = 100;
    expect(estimateAmountOfCoin(coin,money)).toStrictEqual([0,2]);
});
test( 'Estimates the change to return and wich coins the system has to return', () => {
    const money = 450;
    expect(estimateChange(money)).toStrictEqual([{"coin":100,"quantity":4},{"coin":50,"quantity":1}]);
});
test( 'Estimates the change of 275', () => {
    const money = 275;
    expect(estimateChange(money)).toStrictEqual([{"coin":100,"quantity":2},{"coin":50,"quantity":1},{"coin":25,"quantity":1}]);
});
test( 'Estimates the change to return and wich coins the system has to return when money is 1000', () => {
    const money = 1000;
    expect(estimateChange(money)).toStrictEqual([{"coin":500,"quantity":2}]);
});
test( 'Based on the amount of coins of the machine, verifys if the machine can pay with that type of coin', () => {
    const coin = 500;
    const amount = 5;
    expect(verifyCanPayWithThoseCoins(coin,amount)).toStrictEqual(true);
});
test( `Based on the amount of coins of the machine, verifys if the machine can pay with that type of coin, 
if the amount of coins needed exceed the amount that the machine has it returns false`, () => {
    const coin = 500;
    const amount = 25;
    expect(verifyCanPayWithThoseCoins(coin,amount)).toStrictEqual(false);
});
test( `Based on the amount of coins of the machine, verifys if the machine can pay with that type of coin, 
if the amount of coins needed exceed the amount that the machine has it returns false, in this case wonna exceed 100 quantity`, () => {
    const coin = 100;
    const amount = 25;
    expect(verifyCanPayWithThoseCoins(coin,amount)).toStrictEqual(false);
});
