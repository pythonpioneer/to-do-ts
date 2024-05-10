// creating types to improve readablity
type ToDoId = number;
type UserId = number;

// creating an interfacet to structure the todo items
interface ToDo {
    id: ToDoId;
    todo: string;
    completed: boolean;
    userId: UserId;
}

// creating the interface to structure the todo state
interface ToDoState {
    todos: ToDo[];
    total: number;
    isLoading: boolean;
    hasError: boolean;
}


// now export all the available interfaces
export type { ToDo, ToDoState, ToDoId, UserId };