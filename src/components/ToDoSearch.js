import React from "react";
import { TodoContext } from "../TodoContext";

function ToDoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
    const onSearchValue = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return (
        <div className="container">
            <div className="mt-4 m-2 d-flex justify-content-center">  
                <input 
                    className="Search-icon col-10 p-2 mb-2 mt-2" 
                    placeholder='Buscar'
                    value={searchValue}
                    onChange = {onSearchValue}
                    />   
            </div>
        </div>  
    ); 
}; 

export { ToDoSearch }; 