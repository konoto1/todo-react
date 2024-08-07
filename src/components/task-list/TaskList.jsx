import { Task } from "./Task";

export function TaskList() {
    const data = [1, 1, 1, 1, 1, 1];

    if (data.length === 0) {
        return (
            <div className="list empty">
                Empty
            </div>
        );
    }

    return (
        <div className="list">
            {data.map((item, index) => <Task key={index} />)}
        </div>
    );
}