import { TodoConfig } from "./TodoConfig";

export interface TodoItemConfig extends TodoConfig {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}
