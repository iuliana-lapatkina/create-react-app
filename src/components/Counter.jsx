import { useState } from 'react';

function Counter(props) {
    let [start, setStart] = useState(props.start)


    function plus() {
        setStart(start + 1)
    }

    function minus() {
        setStart(start - 1)
    }

    return (
        <div>
            <div>{start}</div>
            <button onClick={minus}>Минус 1</button>
            <button onClick={plus}>Плюс 1</button>
        </div>
    );
}

export default Counter