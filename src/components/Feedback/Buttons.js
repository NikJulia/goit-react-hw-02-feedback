import React from "react";

const Buttons = ({ id, onIncrease }) => (
    <>
        <li key={id} className='Feedback__buttons-item'>
            <button type="button" className='Feedback__button' onClick={onIncrease}>{id}</button>
        </li>
    </>
);

export default Buttons;