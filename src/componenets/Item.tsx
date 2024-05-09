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
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {desc}
                    </p>
                    <button type="button">
                        {isCompleted ? "Delete" : "Mark as Complete"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default memo(Item);
