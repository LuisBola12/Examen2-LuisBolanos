import  {estimateAmountOfCoin,estimateChange,verifyCanPayWithThoseCoins} from '../Utils/pay';

test( 'Estimates the amount of coins to be paid by a type of coin, and when it cannot use more that coin.', () => {
    const coin =  100;
    const money = 450;
    expect(estimateAmountOfCoin(coin,money)).toStrictEqual([50,4]);
});

test( 'Estimates the change to return and wich coins the system has to return', () => {
    const money = 450;
    expect(estimateChange(money)).toStrictEqual([{"coin":100,"quantity":4},{"coin":50,"quantity":1}]);
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
