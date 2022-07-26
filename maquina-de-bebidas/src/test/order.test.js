import { handleOrder } from "../Utils/handleOrder";

test(`Creates the order of the user`, () => {
  const drink = "Pepsi";
  const price = 600;
  const order = [];
  expect(handleOrder(drink, price, order)).toStrictEqual([
    { drink: "Pepsi", price: 600, quantity: 1 },
  ]);
});
test(`Adds a quantity to a drink when the drinks is already in the order`, () => {
  const drink = "Pepsi";
  const price = 600;
  const order = [{ drink: "Pepsi", price: 600, quantity: 1 }];
  expect(handleOrder(drink, price, order)).toStrictEqual([
    { drink: "Pepsi", price: 600, quantity: 2 },
  ]);
});
test(`Adds a new drink to an existing order`, () => {
  const drink = "Fanta";
  const price = 725;
  const order = [{ drink: "Pepsi", price: 600, quantity: 1 }];
  expect(handleOrder(drink, price, order)).toStrictEqual([
    { drink: "Pepsi", price: 600, quantity: 1 },
    { drink: "Fanta", price: 725, quantity: 1 },
  ]);
});
test(`Creates an order with three drinks`, () => {
  const drink = "Sprite";
  const price = 550;
  const order = [
    { drink: "Pepsi", price: 600, quantity: 1 },
    { drink: "Fanta", price: 725, quantity: 1 },
  ];
  expect(handleOrder(drink, price, order)).toStrictEqual([
    { drink: "Pepsi", price: 600, quantity: 1 },
    { drink: "Fanta", price: 725, quantity: 1 },
    { drink: "Sprite", price: 550, quantity: 1 },
  ]);
});
