import React from "react";
import "./OrderModal.scss";
import { handleOrder } from "./../../Utils/handleOrder";

export const OrderModal = ({ closeModal,order,setOrder,cost,setCost}) => {
  const modifyOrder = (drinkName,price) =>{
    const newOrder = handleOrder(drinkName,price,order);
    setOrder(newOrder);
    calculateTotalCost();
  }
  const calculateTotalCost = () => {
    let newCost = 0;
    order.forEach(element => {
        newCost+= element.price * element.quantity;
    });
    setCost(newCost);
  }
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button
          className="close-button"
          onClick={() => {
            closeModal(false);
          }}
        >
          X
        </button>
        <div className="title-sector">
          <h1>Ordene su Bebida</h1>
        </div>
        <div className="body-sector">
          <div className="body-drinks">
            <h5>Bebidas</h5>
            <div className="modal-values">
              <div className="modal-quantity">
                <div>x10</div>
                <div>x8</div>
                <div>x10</div>
                <div>x15</div>
              </div>
              <div className="modal-drinks">
                <div className="modal-drinks-price">
                  <div>₡500</div>
                  <div>₡600</div>
                  <div>₡550</div>
                  <div>₡725</div>
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
                  <div key={element.drink}>{`x${element.quantity}`}</div>
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
              setOrder([]);
            }}
          >
            Cancelar
          </button>
          <button className="confirm-button" onClick={()=>{
            closeModal(false);
          }}>Ordenar</button>
        </div>
      </div>
    </div>
  );
};