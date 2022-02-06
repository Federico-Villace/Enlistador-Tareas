import React from 'react';
import ReactDOM from 'react-dom';



function ModalQ({children}){

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,    
        document.getElementById('modalq'),
    ); 
}

export {ModalQ}