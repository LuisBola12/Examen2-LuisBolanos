import { drinks } from "../Data/drinks"
import { coins } from "../Data/coins"
export const checkIfOutOfService = () => {
    let amountOfDrinks = 0;
    let amountOfCoins = 0;
    drinks.forEach(element => {
        amountOfDrinks += element.quantity;
    });
    coins.forEach(element => {
        amountOfCoins += element.quantity;
    });
    if(amountOfCoins === 0 || amountOfDrinks === 0){
        return true;
    }else{
        return false;
    }
}
