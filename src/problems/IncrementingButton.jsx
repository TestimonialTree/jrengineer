import { useState } from 'react';

// 1. implement handleClick to increment the count by 1 on each click
// 2. add a button to reset the count back to zero

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