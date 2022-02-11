import React from 'react';
import './highlights.css';

const Highlights = () => {
  ;

  return (
    <div>
      <ul className='highlights-container'>
        <li>
          <div className='center'>
            <img className='icon-sm' src="https://img.icons8.com/color/50/000000/free-shipping.png" alt="img" />
          </div>
          <p className='text-sm'>Envíos</p>
        </li>

        <li>
          <div className='center'>
            <img className='icon-sm' src="https://img.icons8.com/dusk/64/000000/loyalty-card.png" alt="img" />
          </div>
          <p className='text-sm'>Descuentos</p>
        </li>

        <li>
          <div className='center'>
            <img className='icon-sm' src="https://img.icons8.com/fluency/48/000000/event-accepted.png" alt="img" />
          </div>
          <p className='text-sm'>Eventos</p>
        </li>

        <li>
          <div className='center'>
            <img className='icon-sm' src="https://img.icons8.com/external-becris-flat-becris/64/000000/external-market-business-world-becris-flat-becris.png" alt="img" />
          </div>
          <p className='text-sm'>Tiendas</p>
        </li>
      </ul>
    </div>
  )
};


export default Highlights;