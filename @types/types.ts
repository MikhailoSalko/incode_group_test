export type Status = "pending" | "progress" | "done";
export type Todo = { id: string; todoName: string; desc: string; status: Status };
export type UpdateTodoStatus = Pick<Todo, "id" | "status">;
export type UpdateTodo = Pick<Todo, "id" | "todoName" | "desc">;
export type DeleteTodo = Pick<Todo, "id">;
