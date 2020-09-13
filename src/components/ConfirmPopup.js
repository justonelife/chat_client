import React from 'react';
import '../css/ConfirmPopup.css';

const ConfirmPopup = (props) => {
    return (
        <div className='confirm-popup'>
            <button className='confirm-popup__btn confirm-popup__btn--no'
                    onClick={props.noClick}>cancel</button>
            <button className='confirm-popup__btn confirm-popup__btn--yes'
                    onClick={props.yesClick}>save</button>
        </div>
    )
}

export default ConfirmPopup;