import React from "react";
import {TodoContext} from '../TodoContext'
import {ToDoItem} from '../components/ToDoItem'

function ModalQForm(){

    const {
        setOpenModalQ,
        deleteToDo,
    } = React.useContext(TodoContext);


    const onCancel = () => {
        setOpenModalQ(false);
    }


    return (
        
        <form>
            <div className="p-2 mt-2">
                <label className="h6 mt-2 mb-2 d-flex justify-content-center">¿Estas seguro que deseas borrar la tarea?</label>
            </div>
            <div className="p-2 mt-2 mb-2 d-flex justify-content-center">
                <button
                    className="btn rounded backgroundButton p-2 me-4"
                    type='button'
                    onClick={onCancel}
                    >
                    Cancelar
                </button>
                <button
                    className="btn rounded backgroundButton backgroundButton p-2 me-4"
                    type='button'
                    onClick={deleteToDo}
                    >
                    Aceptar
                </button>
            </div>
        </form>
    );  
}

export {ModalQForm};