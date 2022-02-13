import React from 'react'; 

function ToDoCounter({totalToDos, completedToDos}){
    
    return(
        <div className='p-2 mt-4 d-flex justify-content-center shadow rounded backgroundCounter'>
             <h2 className='mt-1 mb-2 fw-light fs-3'>Completaste {completedToDos} de las {totalToDos} tareas</h2>
        </div>
       
    );
}

export {ToDoCounter}; 