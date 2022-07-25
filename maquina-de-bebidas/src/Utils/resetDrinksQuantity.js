export const resetDrinksQuantity = (order,drinks) => {
    if(order.length !== 0){
      order.forEach(element => {
        let obj = drinks.find(drink => drink.name === element.drink);
        if(obj){
          obj.quantity += element.quantity;
        }
      });
    }
  }