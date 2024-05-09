import React from "react";
import Item from "./Item";
import todos from "../utils/todo.json";

// creating a container to manage every todos
const Container: React.FC = () => {
    // Chunk the todos into groups of three
    const chunkedTodos = [];
    for (let i = 0; i < todos.length; i += 3) {
        chunkedTodos.push(todos.slice(i, i + 3));
    }

    return (
        <>
            <div className="container mt-4">

                {chunkedTodos.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">

                        {row.map((task, index) => (
                            <div key={index} className="col">
                                <Item title={task.title} desc={task.desc} isCompleted={task.isCompleted} />
                            </div>
                        ))}

                    </div>
                ))}
                
            </div>
        </>
    );
}

export default Container;
