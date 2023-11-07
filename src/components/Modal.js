import React from 'react';

import './Modal.css';
import { useState } from 'react';

export default function Modal({ closeModal }) {
  return (
    <div className='backdrop' onClick={() => closeModal()}>
      <div className='modal'>
        <p>Order Complete</p>
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </div>
  );
}
