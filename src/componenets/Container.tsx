import React, { useEffect } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllToDos } from "../redux/services/todo.services";
import { ToDoState } from "../redux/features/interfaces";


// creating a container to manage every todos
const Container: React.FC = () => {

    // to call the actions and to select states
    const dispatch = useDispatch();
    const { todos } = useSelector((state: { todo: ToDoState }) => state.todo);

    // Chunk the todos into groups of three
    const chunkedTodos = [];
    for (let i = 0; i < todos.length; i += 3) {
        chunkedTodos.push(todos.slice(i, i + 3));
    }

    // to fetch all todos
    useEffect(() => {
        dispatch(fetchAllToDos() as any);
    }, [dispatch]);

    return (
        <>
            <div className="container mt-4">

                {chunkedTodos.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">

                        {row.map((task, index) => (
                            <div key={index} className="col">
                                <Item title={task.todo?.split(' ')[0]} desc={task.todo} isCompleted={task.completed} />
                            </div>
                        ))}

                    </div>
                ))}
                
            </div>
        </>
    );
}

export default Container;
