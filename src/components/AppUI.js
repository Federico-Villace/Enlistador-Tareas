import React from "react";
import { TodoContext } from "../TodoContext";
import { ToDoItem } from "../components/ToDoItem";
import { ToDoCounter } from "../components/ToDoCounter";
import { CreateToDoButton } from "../components/CreateToDoButton";
import { ToDoSearch } from "../components/ToDoSearch";
import { ToDoList } from "../components/ToDoList";
import { Modal } from "../Modal";
import { TodoForm } from "../Modal/TodoForm";
import { ModalQ } from "../ModalQ";
import { ModalQForm } from "../ModalQ/ModalQForm";
import '../components/css/App.css';

function AppUI(){

  const {
    error, 
    loading,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal,
    openModalQ,
    setOpenModalQ,
  } = React.useContext(TodoContext);
  
    return(
    <div className="mt-5">
      <React.Fragment>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="background card border col-5 shadow-lg rounded">
              <ToDoCounter/> 
              <ToDoSearch/> 
                  <ToDoList>
                    {error && <p>Ha ocurrido un error</p>}
                    {loading && <p>Cargando...</p>}
                    {(!loading && !searchedToDos.length) && <label 
                                                              className="h4 fw-light">Crea tu primea Tarea!</label>}
                    {searchedToDos.map(arg => (
                      <ToDoItem 
                        key={arg.text} 
                        text={arg.text}
                        completed = {arg.completed}
                        onComplete = {() => completeToDo(arg.text)}
                        onClick = {openModalQ}
                        />
                    ))}
                    
                  </ToDoList>  
                
                      {!!openModalQ && (
                        <ModalQ>
                          <div className="container">
                            <div className="row d-flex justify-content-center">
                              <div className="background card border col-4 shadow-lg rounded">
                                <ModalQForm
                                   {...searchedToDos.map(arg => (
                                    <ToDoItem 
                                      key={arg.text} 
                                      text={arg.text}
                                      completed = {arg.completed}
                                      onDelete = {() => deleteToDo(arg.text)}
                                      />
                                  ))}
                                   
                                />
                            </div>
                          </div>  
                        </div> 
                        </ModalQ>
                      )}
                {!!openModal && (
                  <Modal>
                    <div className="container">
                      <div className="row d-flex justify-content-center">
                        <div className="background card border col-4 shadow-lg rounded">
                          <TodoForm/>
                        </div>
                      </div>  
                    </div> 
                  </Modal>
                )}
              
              <CreateToDoButton

                setOpenModal={setOpenModal}
              />
            </div>
          </div>
        </div>
          
      </React.Fragment>
    </div>
    ); 
}

export {AppUI}; 