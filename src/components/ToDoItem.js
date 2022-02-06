import React from "react";
import {TodoContext} from '../TodoContext';


function ToDoItem(props){
    
    const {
        setOpenModalQ 
    } = React.useContext(TodoContext);
    
    const onClick = () => {
        setOpenModalQ(true);
    }

        return (
            <li className="backgroundLi p-1 mt-3 mb-3 shadow-sm rounded">
                <div className="container ">
                    <div className="row d-flex align-items-center">
                        <div className="col-8 mt-3">
                            <p className={`${props.completed}`}>
                                {props.text}
                            </p>
                        </div>
                        <div className="col-2">
                            <span 
                                className={`check-icon ${props.completed && 'checked-icon'}`}
                                onClick={props.onComplete}
                            >
 
                                    ✓
                            </span>
                        </div>
                        <div className="col-2 Icon Icon-delete"
                             onClick={onClick}>
                                X
                        </div>
                    </div>
                </div>
            </li>
            );
    }

export {ToDoItem}; 