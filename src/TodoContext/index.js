import React from 'react'; 
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
   
    const {
        item : toDos,
        saveItem : saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState(''); 
      const [openModal, setOpenModal] = React.useState(false);
      const [openModalQ, setOpenModalQ] = React.useState(false);
      
      const completedToDos = toDos.filter(todo => !!todo.completed).length;
      const totalToDos = toDos.length; 
      
      let searchedToDos = []; 
    
      if (!searchValue >= 1){
        searchedToDos = toDos;
      }else{
        searchedToDos = toDos.filter(todo => {
          const todoText = todo.text.toLocaleLowerCase();
          const searchText = searchValue.toLocaleLowerCase();
          return todoText.includes(searchText); 
        });
      }
    
      const completeToDo = (text) => {
        const index = toDos.findIndex(todo => todo.text === text);
        const newToDos = [...toDos]; 
        newToDos[index].completed = true; 
        saveTodos(newToDos);
      }
    
      const deleteToDo = (text) => {   
        const index = toDos.findIndex(todo => todo.text === text); 
        const newTodos = [...toDos]; 
        newTodos.splice(index, 1);
        saveTodos(newTodos);
        setOpenModalQ(false);
      }

      const addTodo = (text) => {
        const newTodos = [...toDos]
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      }
    return(
        
        <TodoContext.Provider value={{
            loading, 
            error,
            totalToDos, 
            completedToDos ,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            addTodo,
            openModal,
            setOpenModal,
            openModalQ,
            setOpenModalQ,
        }}>
            {props.children}
        </TodoContext.Provider>

    ); 
}

export {TodoContext, TodoProvider};