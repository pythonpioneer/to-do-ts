// creating an interfacet to structure the todo items
interface ToDo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

// creating the interface to structure the todo state
interface ToDoState {
    todos: ToDo[];
    total: number;
    isLoading: boolean;
    hasError: boolean;
}


// now export all the available interfaces
export type { ToDo, ToDoState };