import {React,useState} from "react";
import "./PayModal.scss";
import Swal from 'sweetalert2';

export const PayModal = ({ closeModal, order, setOrder, cost, setCost }) => {
  let [moneyInserted,setMoneyInserted] = useState(0);
  let monedas = [1000,500,100,50,25];
  const sumMoneyInserted = (money) =>{
    if(cost<moneyInserted){
        Swal.fire({
            icon: 'warning',
            title: 'Revisa el monto!',
            text: 'Ya tienes suficiente dinero para pagar.',
        })
    }else{
        setMoneyInserted(moneyInserted+money);
    }
  }
  const handlePayment = () => {
    
  }
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button
          className="close-button"
          onClick={() => {
            closeModal(false);
            setMoneyInserted(0);
          }}
        >
          X
        </button>
        <div className="title-sector">
          <h1>Pague su Orden</h1>
        </div>
        <div className="body-sector">
          <div className="body-controls">
            <div className="body-order-to-pay">
              <label className="label-title">Orden</label>
              <div className="body-pay-order">
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
          </div>
          <div className="body-cost">
            <label className="label-title">Ingrese su Dinero</label>
            <div className="body-insert-money">
                <div className="body-coins">
                    <div className="order-coins">
                        {monedas.map((element) => (
                            <button key={element} className="money-button" onClick={()=>{
                                sumMoneyInserted(element)
                            }}>{`Inserte ₡${element}`}</button>
                        ))}
                    </div>
                </div>
                <div className="order-total">
                  <div className="total-div">Total:</div>
                  <div className="total-cost">{`₡${moneyInserted}`}</div>
                </div>
            </div>
          </div>
        </div>
        <div className="footer-sector">
                {moneyInserted < cost ? "" : <button className="confirm-button" onClick={() => {}}>
                    Pagar
                </button>}
        </div>
      </div>
    </div>
  );
};
