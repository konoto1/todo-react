import { Task } from "./Task";

export function TaskList(params) {
    const {removeTask, data} = params;
    if (params.data.length === 0) {
        return (
            <div className="list empty">
                Empty
            </div>
        );
    }

    return (
        <div className="list">
            {data.map((item, index) => <Task key={index} data={item} removeTask={removeTask} />)}
        </div>
    );
}