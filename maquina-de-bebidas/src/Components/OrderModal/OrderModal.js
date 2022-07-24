import { React, useState } from "react";
import "./OrderModal.scss";
import { handleOrder } from "./../../Utils/handleOrder";

export const OrderModal = ({ closeModal }) => {
  const [order, setOrder] = useState([]);
  const calculateTotalCost = () => {

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
                        handleOrder("CocaCola", 500, order, setOrder)
                      }
                    >
                      CocaCola
                    </button>
                  </div>
                  <div>
                    <button
                      className="drink-button"
                      onClick={() => handleOrder("Pepsi", 600, order, setOrder)}
                    >
                      Pepsi
                    </button>
                  </div>
                  <div>
                    <button
                      className="drink-button"
                      onClick={() => handleOrder("Fanta", 550, order, setOrder)}
                    >
                      Fanta
                    </button>
                  </div>
                  <div>
                    <button
                      className="drink-button"
                      onClick={() =>
                        handleOrder("Sprite", 725, order, setOrder)
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
                  <div>{`x${element.quantity}`}</div>
                ))}
              </div>
              <div className="order-drinks">
                {order.map((element) => (
                  <div>{`x${element.name}`}</div>
                ))}
              </div>
            </div>
            <div className="order-total">
              <div className="total-div">Total:</div>
              <div className="total-cost">{ order.length !==0 ? `₡${calculateTotalCost}`: '' }</div>
            </div>
          </div>
        </div>
        <div className="footer-sector">
          <button
            className="cancel-button"
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancelar
          </button>
          <button className="confirm-button">Ordenar</button>
        </div>
      </div>
    </div>
  );
};