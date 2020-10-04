import React from 'react';
import '../css/ConfirmPopup.css';

const ConfirmPopup = (props) => {
    return (
        <div className='confirm-popup'>
            <button className='rect-btn confirm-popup__btn rect-btn--no'
                    onClick={props.noClick}>cancel</button>
            <button className='rect-btn confirm-popup__btn rect-btn--yes'
                    onClick={props.yesClick}>save</button>
        </div>
    )
}

export default ConfirmPopup;