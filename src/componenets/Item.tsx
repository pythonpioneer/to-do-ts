import React, { memo } from "react";


// props for task items
interface TaskItemProps {
    title: string;
    desc: string;
    isCompleted: boolean;
}

// the componenet represent individual todo
const Item: React.FC<TaskItemProps> = (props) => {

    // fetch all props values
    const { title="No Title", desc="No Desc", isCompleted=false } = props;

    return (
        <>
            <div className="card m-1" style={{ width: "18rem" }}>
                <div className="card-body">

                    <i className="fa-solid fa-trash float-right"></i>
                    <div className="d-flex">
                        <h5 className="card-title">{title}</h5>
                        <i className="fa-solid fa-circle-check mt-1 ml-2" style={{ color: isCompleted ? 'green' : 'orange' }}></i>
                    </div>

                    <p className="card-text">
                        {desc}
                    </p>
                    <i className="fa-solid fa-square-pen float-right"></i>

                    {/* if task is not completed then show this button */}
                    {!isCompleted && <button type="button">
                        Mark as Complete
                    </button>}
                </div>
            </div>
        </>
    );
};

export default memo(Item);
