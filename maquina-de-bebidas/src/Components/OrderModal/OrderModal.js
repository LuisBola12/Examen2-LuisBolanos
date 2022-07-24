import React from 'react';
import './OrderModal.scss';

export const OrderModal = ({closeModal}) => {
  return (
    <div className='modal-background' onClick={()=>{closeModal(false)}}>
        <div className='modal-container'>
            <button className='close-button' onClick={()=>{closeModal(false)}}>X</button>
            <div className='title-sector'>
                <h1>Ordene las bebidas que desee</h1>
            </div>
            <div className='body-sector'>
                <p>Pepsi,CocaCola,Fanta,Sprite</p>
            </div>
            <div className='footer-sector'>
                <button className='cancel-button' onClick={()=>{closeModal(false)}} >Cancelar</button>
                <button className='confirm-button'>Ordenar</button>
            </div>
        </div>
    </div>
  )
}
