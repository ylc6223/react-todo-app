import TodoAdd from "./Todo-Add.jsx";
import TodoFilter from "./Todo-Filter.jsx";
import TodoList from "./Todo-List.jsx";
import useTodos from "../hooks/useTodos.js";
import useFilteredTodos from "../hooks/useFilteredTodos.js";
import '../assets/css/todo-app.css'

export default function TodoApp() {
    const {todos, addTodo, delTodo} = useTodos();//获取todos及添加todo项方法
    const {filter, setFilter, filteredTodos} = useFilteredTodos(todos);//获取过滤器及过滤后的todos
    // console.log(filter,filteredTodos,'@@@@@@@')
    return (
        <main>
            <div className="container">
                <h1>欢迎使用 Easy 待办事项！</h1>
                <TodoAdd tid={todos.length} onAddTodo={addTodo}></TodoAdd>
                <TodoFilter selected={filter} onChangeFilter={(filter) => setFilter(filter)}></TodoFilter>
                <TodoList todos={filteredTodos} onDeleteTodo={delTodo}></TodoList>
            </div>
        </main>
    )
}