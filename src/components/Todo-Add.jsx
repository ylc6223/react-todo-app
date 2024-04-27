import {useState} from "react";
import '../assets/css/todo-add.css'

//事件派发
function useEmitAddTodo(tid) {
    const [todoContent, setTodoContent] = useState("");

    const emitAddTodo = (callback) => {
        // 添加的待办事项
        const todo = {
            // id: tid,
            id: ++tid,
            content: todoContent,
            completed: false,
        };
        callback(todo)
        setTodoContent("")
    };

    return {
        todoContent,
        setTodoContent,
        emitAddTodo,
    };
}

export default function TodoAdd({tid, onAddTodo}) {
    const {todoContent, setTodoContent, emitAddTodo} = useEmitAddTodo(tid)

    function keyUpEnter(e) {
        if (e.key === 'Enter') {
            return emitAddTodo(onAddTodo)
        }
    }

    return (
        <div className="input-add">
            <input type="text" value={todoContent} onChange={(e) => setTodoContent(e.target.value)}
                   onKeyUp={keyUpEnter}/>
            <button>
                <i className="plus" onClick={() => emitAddTodo(onAddTodo)}></i>
            </button>
        </div>
    )
}