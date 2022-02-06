import React from "react";
import { TodoContext } from "../TodoContext";
import '../components/css/Modal.css';

function TodoForm(props){
    
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const Change = (event) => {
        setNewTodoValue(event.target.value); 
    }
    
    const onCancel = () =>{
        setOpenModal(false);
    };
    const Submit = (event) =>{
        event.preventDefault(); //evita que recargue la pagina cuando el formulario se envie. O comportamiento por defecto
        addTodo(newTodoValue);
        setOpenModal(false)
    };

    return(
        <form
            className="p-2" 
            onSubmit={Submit}
        >
            <label className="ModalLabel h4 p-1 mt-2 mb-2 d-flex justify-content-center">Ingrese la tarea deseada </label>
            <div className="mt-2 d-flex justify-content-center">
                <textarea 
                    as='textarea' 
                    rows={3}
                    className="form-control ModalTextArea mt-3 mb-4 shadow rounded fw-light lh-sm"
                    value={newTodoValue}
                    onChange={Change} 
                    placeholder="Tarea ejemplo"/>
            </div>
            <div className="mt-2 mb-2 d-flex justify-content-end">
                <button
                    className="btn rounded backgroundButton p-2 me-2"
                    type='button'
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    className="btn rounded backgroundButton p-2"
                    type="submit" 
                    onClick={Submit}   
                >Aceptar</button>
            </div>
        </form>
    );
}

export {TodoForm};