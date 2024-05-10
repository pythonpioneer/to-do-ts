import React, { memo } from "react";
import { ToDo } from "../redux/features/interfaces";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../redux/services/todo.services";


// the componenet represent individual todo
const Item: React.FC<ToDo> = (props) => {

    // fetch all props values
    const { id, todo, completed } = props;
    const dispatch = useDispatch();

    // to call the delete todo api
    const handleDelete = () => {
        dispatch(deleteToDo(id) as any);
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
                        <i className="fa-solid fa-circle-check mt-1 ml-2" style={{ color: completed ? 'green' : 'orange' }}></i>
                    </div>

                    <p className="card-text">
                        {todo}
                    </p>
                    <i className="fa-solid fa-square-pen float-right"></i>

                    {/* if task is not completed then show this button */}
                    {!completed && <button type="button">
                        Mark as Complete
                    </button>}
                </div>
            </div>
        </>
    );
};

export default memo(Item);
