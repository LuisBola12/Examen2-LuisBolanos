export const handleOrder = (drinkName, price,order) => {
    const orderCopy = order;
    if (orderCopy.length === 0) {
      const newItem = { drink: drinkName, price: price, quantity: 1 };
      orderCopy.push(newItem);
    } else {
      let whasEqual = false;
      orderCopy.forEach((element) => {
        if (Object.values(element).includes(drinkName)) {
          element.quantity++;
          whasEqual = true;
        }
      });
      if (!whasEqual) {
        const newItem = { drink: drinkName, price: price, quantity: 1 };
        orderCopy.push(newItem);
      }
    }
    return orderCopy;
  };
