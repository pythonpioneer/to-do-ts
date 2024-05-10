import React, { memo } from "react";
import { ToDo } from "../redux/features/interfaces";


// the componenet represent individual todo
const Item: React.FC<ToDo> = (props) => {

    // fetch all props values
    const { todo, completed } = props;

    return (
        <>
            <div className="card m-1" style={{ width: "18rem" }}>
                <div className="card-body">

                    <i className="fa-solid fa-trash float-right"></i>
                    <div className="d-flex">
                        <h5 className="card-title">{todo?.split(' ')[0]}</h5>
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
