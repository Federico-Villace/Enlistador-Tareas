import React from 'react'; 

function ModalErrorForm({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,    
        document.getElementById('modalerror'),
    );
}

export {ModalErrorForm}