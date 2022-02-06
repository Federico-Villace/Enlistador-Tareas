import React from "react";
import {TodoProvider} from './TodoContext'
import { AppUI } from "./components/AppUI";



/*const defaultToDos = [
  {text: 'Jugar axie',  completed: false},
  {text: 'Programar', completed: false},
  {text: 'Entrenar', completed: false},
  {text: 'Avanzar con el modelado, completed: false'},
  {text: 'Ordenar la pieza'}
]*/




function App() {  

  return (
    
      <TodoProvider>
        <AppUI/>
      </TodoProvider>
    
  );
}

export default App;
