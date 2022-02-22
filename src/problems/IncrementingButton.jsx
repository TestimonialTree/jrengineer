import { useState } from 'react';

// 1. implement handleClick to increment the count by 1 on each click

export default function IncrementingButton() {

    const [count, setCount] = useState(0)

    const handleClick = function () {
        // TODO: implmement this
    }

    return (
        <div>
            <button type="button" onClick={handleClick}>
                Count: {count}
            </button>
        </div>
    )
}