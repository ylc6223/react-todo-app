// 获取所有todos
import {useState, useEffect} from 'react'

export default function useTodos() {
    const [todos, setTodos] = useState([])
    // 添加todo

    const addTodo = (todo) => setTodos([...todos, todo]);
    const delTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    // 获取远程 todos
    const fetchTodos = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        const rawTodos = await response.json();
        const newTodos = rawTodos.map((todo) => ({
            id: todo.id,
            content: todo.title,
            completed: todo.completed,
        }));
        setTodos(newTodos)
    };
    useEffect(() => {
        fetchTodos();
    }, [])
    return {
        todos,
        addTodo,
        delTodo
    }
}