import React from "react";

function CreateToDoButton(props) {
    
    const onClickButton = () =>{
        props.setOpenModal(true);
    };

    
    return (
        <div className="d-flex flex-row justify-content-end mt-3 mb-3">
            <button className="btn rounded backgroundButton" onClick={onClickButton}>Crear Tarea</button>
        </div>
    );
}

export { CreateToDoButton }; 