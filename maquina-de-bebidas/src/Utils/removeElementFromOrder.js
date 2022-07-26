export const removeElementFromOrder = (order, drink) => {
  const orderCopy = order;
  let indexOfElement = 0;
  orderCopy.forEach((element) => {
    if (Object.values(element).includes(drink)) {
      if (element.quantity !== 1) {
        element.quantity--;
      }else{
        orderCopy.splice(indexOfElement,1);
      }
    } else {
      indexOfElement++;
    }
  });
  return orderCopy;
};
