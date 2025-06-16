import axios from "axios";
import './App.css'
import {useEffect, useMemo, useState, useRef } from "react";


function App() {
}


//**************************************************************************************************************************** */
// //This is for useRef demo.
//   const [incomeTax, setIncomeTax] = useState(20000);
//   const divRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {divRef.current.innerHTML = 10},5000)
//   }, [])
//   return (
//     <div>
//       Hi there, your income tax returns are <div ref = {divRef}>{incomeTax}</div>
//     </div>
//   )
// }

//**************************************************************************************************************************** */
//   //This is for useMemo basic. 
//     const [count, setCount] = useState(0);
//     const [inputValue, setInputValue] = useState(0);

//     function increaseCounter(){
//       setCount(count +1);
//     }
//     function handleInputChange(e) {
//       if(e.target.value < 10000){
//         setInputValue(parseInt(e.target.value) || 0);
//       }
    
//   }
//     let sum = useMemo(() => {
      
//       let total = 0;

//       for(let i = 1; i <= inputValue; i++){
//         total = total + i;
//       }
//       return total;
//     },[inputValue])

//   return (
//     <>
//     <input type="number" onChange={handleInputChange} placeholder="Enter a number < 10000"/>
//     <h3>Sum is {sum}</h3>
//     <button onClick={increaseCounter}>Counter: {count}</button>
//     </>
//   )
// }
//***************************************************************************************************************************** */
////Significance of [] in useeffect...
//   const [currentId, setCurrentId] = useState(1);

//   // need the value here.
//   function handleClick(e) {
//     setCurrentId(e.target.textContent);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>1</button>
//       <button onClick={handleClick}>2</button>
//       <button onClick={handleClick}>3</button>
//       <button onClick={handleClick}>4</button>
//       <Todo id={currentId}/>
//     </div>
//   )
// }


// function Todo({id}){
//   const [todos, setTodos] = useState({});

//   useEffect(()=>{
//     axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
//     .then(function(response){
//       setTodos(response.data[0]);
//     });
//   },[id]);
//   return(
//     <>
//       <h1 style={{border: "black solid 10px"}}>Required todo is: </h1>
//       <h2>Id: {todos.id}</h2>
//       <h2>Title: {todos.title}</h2>
//       <h4>Completed: {todos.completed?"true":"false"}</h4>
//     </>
//   )
// }

//***************************************************************************************************************************** */
////using useEffect basic.
//   const[todos,setTodos] = useState([])

//   useEffect(()=>{
//     axios.get("http://localhost:3000/todos")
//     .then(function(response){
//       setTodos(response.data.todos)
//     });
//   },[]);
//     return (
//     <>
//       <h1>Hello World</h1>
//       {todos.map(todo => <Todo key={todo._id} title={todo.title} description={todo.description}/>)}
//     </>
//   )
// }



// function Todo({title, description}) {
//   return(
//   <div>
//     <h3>{title}</h3>
//     <h4>{description}</h4>
//   </div>
//   )
// }

export default App
