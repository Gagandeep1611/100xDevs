import { useContext } from "react";
import { CountContext } from "./components/context";

export default function UseContextDemo(){
    let n = useContext(CountContext)
    
    return (
        <>
            <h1>Value using context API: {n}</h1>
        </>
    )
}