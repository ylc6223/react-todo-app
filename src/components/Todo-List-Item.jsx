import {clsx} from "clsx";

export default function TodoListItem({todoItem, onChangeState, onDelTodo}) {
    return (
        <div className={clsx('todo-item', todoItem.completed && 'done')}>
            <label>
                <input
                    type="checkbox"
                    defaultChecked={todoItem.completed}
                    onClick={onChangeState}
                />
                {todoItem.content}
                <span className="check-button"></span>
            </label>
            <button className="del-button" onClick={() => onDelTodo(todoItem.id)}>
                <span>删除</span>
            </button>
        </div>
    )
}