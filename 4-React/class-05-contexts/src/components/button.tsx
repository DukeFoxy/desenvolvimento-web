import { useContext } from "react";
import { IncrementContext } from "../contexts/incrementContext";


export function Button() {
    const{ incrementCount } = useContext(IncrementContext);
    return(
        <>
        <button onClick={incrementCount}>increment</button>
        </>
    )
}