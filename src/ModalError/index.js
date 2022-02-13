import React from 'react';
import {TodoContext} from '../TodoContext';

function ModalQForm(){

    const {
        setOpenModalError,
    } = useContext(TodoContext);
    
    const onCancel = () =>{
        setOpenModalError(false);
    }
    
    return(
        <p></p>
    )
}

export {ModalQForm}