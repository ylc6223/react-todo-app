import {useState, useEffect} from "react";
// 筛选符合过滤条件数据
export default function useFilteredTodos(todos) {
    // 过滤handler
    const filterHandler = (filter) => {
        switch (filter) {
            case "done":
                return todos.filter((todo) => todo.completed);
            case "todo":
                return todos.filter((todo) => !todo.completed);
            default:
                return todos;
        }
    }
    // 过滤条件
    const [filter, setFilter] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState(filterHandler(filter))
    // 过滤 todo
    useEffect(() => {
        setFilteredTodos(filterHandler(filter))
    }, [filter, todos])
    return {filter, setFilter, filteredTodos}
}