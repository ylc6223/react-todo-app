import TodoListItem from "./Todo-List-Item.jsx";
import '../assets/css/todo-list.css'

export default function TodoList({todos, onDeleteTodo}) {
    return <div className="todo-list">
        {
            todos.map((todo) => {
                return <TodoListItem key={todo.id} todoItem={todo}
                                     onChangeState={(e) => todo.completed = e.target.checked}
                                     onDelTodo={onDeleteTodo}
                />
            })
        }
    </div>
}