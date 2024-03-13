import { useContext } from "react"
import { IncrementContext } from "../contexts/incrementContext";

export function Card() {
   const{ count } = useContext(IncrementContext);
    console.log(count);
    
    return(
        <>
        <h1>Card {count}</h1>
        </>
    )
}