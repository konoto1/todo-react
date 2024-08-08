import { useState } from "react";

export function Task(params) {
    const { text } = params.data;
    const [taskVisibility, setTaskVisibility] = useState(true);
    const [taskDone, setTaskDone] = useState(false);
    const [editForm, setEditForm] = useState(false);
    const [taskText, setTaskText] = useState(text);
    const [inputText, setInputText] = useState(text);
    const style = {
        borderLeftColor: '#ff0000',
    };

    function handleUpdate(e) {
        e.preventDefault();

        const cleanText = inputText.trim();

        if (cleanText !== '') {
            setTaskText(cleanText);
            setInputText(cleanText);
            setEditForm(prev => false);
        }
    }

    if (taskVisibility === false) {
        return;
    }

    return (
        <article className="item" data-state={taskDone ? 'done' : ''} style={style}>
            <div className="date">2024-07-17 14:29:11</div>
            <div className="state">Atlikta</div>
            <div className="text">{taskText}</div>
            <form onSubmit={handleUpdate} className={editForm ? '' : 'hidden'}>
                <input onChange={e => setInputText(e.target.value)} type="text" value={inputText} />
                <div className="btnList">
                    <button onClick={() => setInputText(taskText)} className="clear" type="reset">Reset</button>
                    <button onClick={() => setInputText('')} className="clear" type="reset">Clear</button>
                    <button className="update" type="submit">Update</button>
                    <button onClick={() => setEditForm(prev => false)} className="cancel" type="button">Cancel</button>
                </div>
            </form>
            <div className="actions">
                {!taskDone && <>
                    <button onClick={() => setTaskDone(true)} className="done">Done</button>
                    <div className="divider"></div>
                    <button className="edit" onClick={() => setEditForm(prev => true)}>Edit</button>
                </>}
                <button onClick={() => setTaskVisibility(prev => false)} className="delete">Delete</button>
            </div>
        </article>
    );
}