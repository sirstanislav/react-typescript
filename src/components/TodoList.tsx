import { TodoItem } from "./TodoItem";
import { TodoListConfig } from "../types/TodoListConfig";

const TodoList: React.FC<TodoListConfig> = (props) => {
  const { items, toggleTodo, removeTodo } = props;
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </div>
  );
};

export { TodoList };
