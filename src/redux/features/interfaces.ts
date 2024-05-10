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

// creating the primary state structure which holds only todo and total
interface PrimaryToDoState {
    todos: ToDo[];
    total: number;
}

// creating the interface to structure the todo state
interface ToDoState extends PrimaryToDoState {
    isLoading: boolean;
    hasError: boolean;
}


// now export all the available interfaces
export type { ToDo, PrimaryToDoState, ToDoState, ToDoId, UserId };