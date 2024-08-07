import { useState } from "react";

export function Task() {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Pirminis pavadinimas');

    function updateCount1() {
        setCount(count + 1);
    }

    function updateCount2() {
        setCount(count + 2);
    }

    function updateCount3() {
        setCount(count + 3);
    }

    function updateTitle() {
        setTitle('Atnaujinta pavadinimo reiksme!');
    }

    const style = {
        borderLeftColor: '#ff0000',
    };

    return (
        <article className="item" data-state="" style={style}>
            <div className="date">2024-07-17 14:29:11</div>
            <div className="state">Atlikta</div>
            <div className="text" onClick={updateTitle}>{title} ({count})</div>
            <form className="hidden">
                <input type="text" value="What shoould I doo?" />
                <button className="update" type="submit">Update</button>
                <button className="cancel" type="button">Cancel</button>
            </form>
            <div className="actions">
                <button className="done" onClick={updateCount1}>Done</button>
                <div className="divider"></div>
                <button className="edit" onClick={updateCount2}>Edit</button>
                <button className="delete" onClick={updateCount3}>Delete</button>
            </div>
        </article>
    );
}