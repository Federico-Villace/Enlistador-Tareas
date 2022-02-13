import React from "react";
import { useTodos } from "./components/useTodos";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoCounter } from "./components/ToDoCounter";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { ToDoSearch } from "./components/ToDoSearch";
import { TodoHeader } from "./components/TodoHeader";
import { ToDoList } from "./components/ToDoList";
import { Modal } from "./Modal";
import { TodoForm } from "./Modal/TodoForm";
import { ModalQ } from "./ModalQ";
import { ModalQForm } from "./ModalQ/ModalQForm";
import "./components/css/App.css";

/*const defaultToDos = [
  {text: 'Jugar axie',  completed: false},
  {text: 'Programar', completed: false},
  {text: 'Entrenar', completed: false},
  {text: 'Avanzar con el modelado, completed: false'},
  {text: 'Ordenar la pieza'}
]*/

function App() {
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
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    addTodo,
    onClickX,
  } = useTodos();

  return (
    <div className="mt-5">
      <React.Fragment>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="background card border col-5 shadow-lg rounded">
              <TodoHeader>
                <ToDoCounter
                  totalToDos={totalToDos}
                  completedToDos={completedToDos}
                />
                <ToDoSearch
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              </TodoHeader>

              <ToDoList>
                {error && <p>Ha ocurrido un error</p>}
                {loading && <p>Cargando...</p>}
                {!loading && !searchedToDos.length && (
                  <label className="h4 fw-light">Crea tu primea Tarea!</label>
                )}
                {searchedToDos.map((arg) => (
                  <ToDoItem
                    key={arg.text}
                    text={arg.text}
                    completed={arg.completed}
                    onComplete={() => completeToDo(arg.text)}
                    onClick={onClickX}
                    setOpenModalQ={setOpenModalQ}
                  />
                ))}
              </ToDoList>

              {!!openModalQ && (
                <ModalQ>
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      <div className="background card border col-4 shadow-lg rounded">
                        <ModalQForm
                          setOpenModalQ={setOpenModalQ}
                          deleteToDo={deleteToDo}
                          {...searchedToDos.map((arg) => (
                            <ToDoItem
                              key={arg.text}
                              text={arg.text}
                              completed={arg.completed}
                              onDelete={() => deleteToDo(arg.text)}
                              setOpenModalQ={setOpenModalQ}
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
                        <TodoForm
                          addTodo={addTodo}
                          setOpenModal={setOpenModal}
                        />
                      </div>
                    </div>
                  </div>
                </Modal>
              )}

              <CreateToDoButton setOpenModal={setOpenModal} />
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
