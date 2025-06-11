import axios from "axios";
import './App.css'
import { useEffect, useState } from "react";

function App() {
  const[todos,setTodos] = useState([])

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(response){
      setTodos(response.data.todos)
    });
  },[]);
    return (
    <>
      <h1>Hello World</h1>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

function Todo(title, description) {
  return
  <div>
    <h3>{title}</h3>
    <h4>{description}</h4>
  </div>
}

export default App
