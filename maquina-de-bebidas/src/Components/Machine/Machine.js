import { React, useState, useEffect } from "react";
import { OrderModal } from "../OrderModal/OrderModal";
import "./Machine.scss";
import { PayModal } from "./../PayModal/PayModal";
import Swal from "sweetalert2";
import { drinks } from "../../Data/drinks";
import { resetDrinksQuantity } from "./../../Utils/resetDrinksQuantity";
import { checkIfOutOfService } from "../../Utils/checkIfOutOfService";
import { OutOfService } from "./../OutOfServiceModal/OutOfService";
import { coins } from './../../Data/coins';

export const Machine = () => {
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [openPayModal, setOpenPayModal] = useState(false);
  let [order, setOrder] = useState([]);
  let [cost, setCost] = useState(0);
  const [paidHasBeenMade, setPayHasBeenMade] = useState(false);
  const [outOfService, setOutOfService] = useState(false);
  const handlePayment = () => {
    if (order.length !== 0) {
      setOpenPayModal(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "No puedes pagar nada...",
        text: "Ingresa una orden primero antes de pagar!",
      });
    }
  };
  useEffect(() => {
    const result = checkIfOutOfService(drinks,coins);
    if (result) {
      setOutOfService(true);
    }
    setPayHasBeenMade(false);
  }, [paidHasBeenMade]);
  return (
    <>
      {outOfService && <OutOfService />}
      {openOrderModal && (
        <OrderModal
          closeModal={setOpenOrderModal}
          order={order}
          setOrder={setOrder}
          cost={cost}
          setCost={setCost}
          setOpenPayModal={setOpenPayModal}
        />
      )}
      {openPayModal && (
        <PayModal
          closeModal={setOpenPayModal}
          order={order}
          setOrder={setOrder}
          cost={cost}
          setCost={setCost}
          setPayHasBeenMade={setPayHasBeenMade}
        />
      )}

      <div className="machine-parent">
        <div className="machine-body">
          <div className="machine-top">Maquina de Bebidas</div>
          <div className="machine-drinks_control">
            <div className="machine-drinks">
              <div className="drink-grid">
                <div className="coca-cola">
                  <img
                    className="drink-image"
                    src="https://pin-play-ci0137.s3.amazonaws.com/Coca_logo.png"
                    alt="coca"
                  ></img>
                  <div>{drinks[0].quantity}</div>
                </div>
                <div className="pepsi">
                  <img
                    className="drink-image"
                    src="https://pin-play-ci0137.s3.amazonaws.com/Pepsi_logo.png"
                    alt="pepsi"
                  ></img>
                  <div>{drinks[1].quantity}</div>
                </div>
                <div className="fanta">
                  <img
                    className="drink-image"
                    src="https://pin-play-ci0137.s3.amazonaws.com/Fanta_logo.png"
                    alt="fanta"
                  ></img>
                  <div>{drinks[2].quantity}</div>
                </div>
                <div className="sprite">
                  <img
                    className="drink-image"
                    src="https://pin-play-ci0137.s3.amazonaws.com/Sprite_logo.png"
                    alt="sprite"
                  ></img>
                  <div>{drinks[3].quantity}</div>
                </div>
              </div>
            </div>
            <div className="machine-control">
              <div className="machine-order">
                <button
                  className="order-button"
                  onClick={() => {
                    setOpenOrderModal(true);
                  }}
                >
                  Ordenar
                </button>
                <button
                  className="order-button"
                  onClick={() => {
                    setCost(0);
                    resetDrinksQuantity(order, drinks);
                    setOrder([]);
                  }}
                >
                  Cancelar Orden
                </button>
              </div>
              <div className="machine-pay">
                <button
                  className="pay-button"
                  onClick={() => {
                    handlePayment();
                  }}
                >
                  Pagar
                </button>
              </div>
            </div>
          </div>
          <div className="machine-retire"></div>
        </div>
      </div>
    </>
  );
};
