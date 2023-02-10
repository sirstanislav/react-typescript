import { TodoConfig } from "../types/TodoConfig";

export interface TodoListConfig {
  items: TodoConfig[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}