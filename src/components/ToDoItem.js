import React from "react";


function ToDoItem(props){
    
    const onClickModal = () => {
        props.setOpenModalQ(true);
    };

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
                             onClick={onClickModal}>
                                X
                        </div>
                    </div>
                </div>
            </li>
            );
}

export {ToDoItem}; 