;
import { memo, useCallback, useState } from "react"

export default function Assignment3(){
    const [count,setCount] = useState(0);

    
    const increment = useCallback(() => {
        setCount(count => count + 1);
    },[])

    const decrement = useCallback(() => {
        setCount(count => count - 1);
    },[])
    return(
        <>
            <h1>{count}</h1><br />
            <CounterButtons increment = {increment} decrement = {decrement}/>
        </>
    )
}

const CounterButtons = memo(({increment, decrement}) => (
    <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement </button>
    </div>
))