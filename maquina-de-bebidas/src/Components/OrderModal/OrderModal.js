import React from "react";
import "./OrderModal.scss";
import { handleOrder } from "./../../Utils/handleOrder";
import Swal from 'sweetalert2';
import {drinks} from "../../Data/drinks";
import { resetDrinksQuantity } from './../../Utils/resetDrinksQuantity';
import {FiMinusCircle} from 'react-icons/fi'
import { removeElementFromOrder } from './../../Utils/removeElementFromOrder';

export const OrderModal = ({ closeModal,order,setOrder,cost,setCost,setOpenPayModal}) => {
  const minusDrinksCopy = (drinkName) =>{
    drinks.forEach(element => {
      if (Object.values(element).includes(drinkName)) {
        element.quantity++;
      }
    });
  }
  const sumDrinksCopy = (drinkName) =>{
    drinks.forEach(element => {
      if (Object.values(element).includes(drinkName)) {
        element.quantity--;
      }
    });
  }
  const modifyOrder = (drinkName,price) =>{
    let obj = drinks.find(drink => drink.name === drinkName);
    if(obj.quantity === 0){
      Swal.fire({
        icon: 'warning',
        title: 'Bebida fuera de servicio...',
        text: `Se acabo la cantidad de bebidas de ${drinkName} en la maquina. `,
      })
    }else{
      const newOrder = handleOrder(drinkName,price,order);
      setOrder(newOrder);
      calculateTotalCost();
      sumDrinksCopy(drinkName);
    }
  }
  const calculateTotalCost = () => {
    let newCost = 0;
    order.forEach(element => {
        newCost+= element.price * element.quantity;
    });
    setCost(newCost);
  }
  const handlePayment = () => {
    if(order.length !== 0){
      closeModal(false);
      setOpenPayModal(true);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'No puedes pagar nada...',
        text: 'Ingresa una orden primero antes de pagar!',
      })
    }
  }
  const removeDrink = (drink) => {
    const newOrder = removeElementFromOrder(order,drink);
    setOrder(newOrder);
    calculateTotalCost();
    minusDrinksCopy(drink);
  }
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title-sector">
          <h1>Ordene su Bebida</h1>
        </div>
        <div className="body-sector">
          <div className="body-drinks">
            <h5>Bebidas</h5>
            <div className="modal-values">
              <div className="modal-quantity">
              {drinks.map((element) => (
                  <div key={element.name}>{`x${element.quantity}`}</div>
                ))}
              </div>
              <div className="modal-drinks">
                <div className="modal-drinks-price">
                {drinks.map((element) => (
                  <div key={element.name}>{`₡${element.price}`}</div>
                ))}
                </div>
                <div className="modal-drinks-name">
                  <div>
                    <button
                      className="drink-button"
                      onClick={() =>
                        modifyOrder("CocaCola", 500)
                      }
                    >
                      CocaCola
                    </button>
                  </div>
                  <div>
                    <button
                      className="drink-button"
                      onClick={() => modifyOrder("Pepsi", 600)}
                    >
                      Pepsi
                    </button>
                  </div>
                  <div>
                    <button
                      className="drink-button"
                      onClick={() => modifyOrder("Fanta", 550)}
                    >
                      Fanta
                    </button>
                  </div>
                  <div>
                    <button
                      className="drink-button"
                      onClick={() =>
                        modifyOrder("Sprite", 725)
                      }
                    >
                      Sprite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-order">
            <h5>Orden</h5>
            <div className="order-values">
              <div className="order-quantity">
                {order.map((element) => (
                  <div className= "button-number"key={element.drink}>
                    <button className="minus-drink-button" onClick={() => {removeDrink(element.drink)}}><FiMinusCircle/></button>
                    {`x${element.quantity}`}
                    </div>
                ))}
              </div>
              <div className="order-drinks">
                {order.map((element) => (
                  <div key={element.drink}>{`${element.drink}`}</div>
                ))}
              </div>
            </div>
            <div className="order-total">
              <div className="total-div">Total:</div>
              <div className="total-cost">{`₡${cost}`}</div>
            </div>
          </div>
        </div>
        <div className="footer-sector">
          <button
            className="cancel-button"
            onClick={() => {
              closeModal(false);
              setCost(0);
              resetDrinksQuantity(order,drinks);
              setOrder([]);
            }}
          >
            Cancelar
          </button>
          <button className="confirm-button" onClick={()=>{
            handlePayment();
          }}>Pagar</button>
        </div>
      </div>
    </div>
  );
};