import React from 'react';
import './OutOfService.scss';

export const OutOfService = () => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title-sector">
          <h1>Error</h1>
        </div>
        <div className="body-sector-out-of-service">
            <img className= "icono-error" src='https://pin-play-ci0137.s3.amazonaws.com/icono_error.png' alt='error-icon'></img>
            <h5>La maquina se encuentra fuera de servicio.</h5>
        </div>
        <div className="footer-sector">
        </div>
      </div>
    </div>
  )
}
