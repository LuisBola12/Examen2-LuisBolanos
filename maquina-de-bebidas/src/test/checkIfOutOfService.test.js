import { checkIfOutOfService } from '../Utils/checkIfOutOfService';
test( `Checks if the machine is out of service`, () => {
    const drinks = [{drink:"Coca Cola",quantity:5},{drink:"Pepsi",quantity:5},{drink:"Fanta",quantity:5}];
    const coins = [{coin:500,quantity:5},{coin:100,quantity:5},{coin:50,quantity:5}];
    expect(checkIfOutOfService(drinks,coins)).toBe(false);
});
test( `Machine is out of service cause no drinks`, () => {
    const drinks = [{drink:"Coca Cola",quantity:0},{drink:"Pepsi",quantity:0},{drink:"Fanta",quantity:0}];
    const coins = [{coin:500,quantity:5},{coin:100,quantity:5},{coin:50,quantity:5}];
    expect(checkIfOutOfService(drinks,coins)).toBe(true);
});
test( `Machine is out of service cause no coins`, () => {
    const drinks = [{drink:"Coca Cola",quantity:5},{drink:"Pepsi",quantity:5},{drink:"Fanta",quantity:5}];
    const coins = [{coin:500,quantity:0},{coin:100,quantity:0},{coin:50,quantity:0}];
    expect(checkIfOutOfService(drinks,coins)).toBe(true);
});
test( `Machine is out of service cause no coins and drinks`, () => {
    const drinks = [{drink:"Coca Cola",quantity:0},{drink:"Pepsi",quantity:0},{drink:"Fanta",quantity:0}];
    const coins = [{coin:500,quantity:0},{coin:100,quantity:0},{coin:50,quantity:0}];
    expect(checkIfOutOfService(drinks,coins)).toBe(true);
});
