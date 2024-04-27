import {clsx} from "clsx";
import '../assets/css/todo-filter.css'

const filters = [
    {label: "全部", value: "all"},
    {label: "已完成", value: "done"},
    {label: "未完成", value: "todo"},
];
export default function TodoFilter({selected, onChangeFilter}) {
    return (
        <div className="filters">
            {
                filters.map((filter) => {
                    return <span key={filter.value}
                                 onClick={() => onChangeFilter(filter.value)}
                                 className={clsx("filter", selected === filter.value && 'active')}>{filter.label}</span>
                })
            }
        </div>
    )
}