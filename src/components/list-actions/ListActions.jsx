export function ListActions(props) {
    const {sortingAlgo, updateSorting} = props;
    return (
        <div className="list-actions">
            <div className="title">Rikiavimas:</div>
            <button onClick={() => updateSorting('timeAsc')} className={sortingAlgo === 'timeAsc' ? 'active' : ''}>Laikas 0-9</button>
            <button onClick={() => updateSorting('timeDsc')} className={sortingAlgo === 'timeDsc' ? 'active' : ''}>Laikas 9-0</button>
            <button onClick={() => updateSorting('colorAsc')} className={sortingAlgo === 'colorAsc' ? 'active' : ''}>Spalva A-Z</button>
            <button onClick={() => updateSorting('colorDsc')} className={sortingAlgo === 'colorDsc' ? 'active' : ''}>Spalva Z-A</button>
            <button onClick={() => updateSorting('textAsc')} className={sortingAlgo === 'textAsc' ? 'active' : ''}>Pavadinimas A-Z</button>
            <button onClick={() => updateSorting('textDsc')} className={sortingAlgo === 'textDsc' ? 'active' : ''}>Pavadinimas Z-A</button>
        </div>
    );
}