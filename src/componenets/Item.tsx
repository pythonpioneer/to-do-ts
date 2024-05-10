import React, { memo, useState } from "react";
import { ToDo } from "../redux/features/interfaces";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../redux/services/todo.services";
import { markComplete } from "../redux/features/todoSlice";


// the componenet represent individual todo
const Item: React.FC<ToDo> = (props) => {

    // fetch all props values
    const { id, todo, completed } = props;
    const dispatch = useDispatch();

    // to enforce re-render to the component to change the complete status
    const [ isCompleted, setIsCompleted ] = useState(props.completed);

    // to call the delete todo api
    const handleDelete = () => {
        dispatch(deleteToDo(id) as any);
    }

    // to mark the complete and invert the status
    const handleComplete = () => {
        setIsCompleted(!isCompleted);
        dispatch(markComplete(id));
    }

    console.log("xxx")
    return (
        <>
            <div className="card m-1" style={{ width: "18rem" }}>
                <div className="card-body">

                    {/* delete icon */}
                    <i className="fa-solid fa-trash float-right" onClick={handleDelete}></i>

                    <div className="d-flex">
                        <h5 className="card-title">{todo?.split(' ')[0]}</h5>

                        {/* update icon */}
                        <i className="fa-solid fa-circle-check mt-1 ml-2" style={{ color: isCompleted ? 'green' : 'orange' }}></i>
                    </div>

                    <p className="card-text">
                        {todo}
                    </p>
                    <i className="fa-solid fa-square-pen float-right"></i>

                    {/* if task is not completed then show this button */}
                    {!isCompleted && <button type="button" onClick={handleComplete}>
                        Mark as Complete
                    </button>}
                </div>
            </div>
        </>
    );
};

export default memo(Item);
