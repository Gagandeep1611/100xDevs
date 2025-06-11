import { useState } from "react";

let counter = 4;
function App() {
  const [todos, setTodos] = useState([
  {
    id: 1,
    title: "first task",
    description: "Here goes the description for the first task"
  },
  {
    id: 2,
    title: "Second task",
    description: "Here goes the description for the Second task"
  },
  {
    id: 3,
    title: "third task",
    description: "Here goes the description for the third task"
  }
])
function addTodo(){
  setTodos([...todos,{
    id: counter++,
    title: Math.random(),
    description: Math.random()
  }])
}

  return (
    <>
    <button onClick={addTodo}>Add a todo</button>
      <RenderTodo todos={todos}></RenderTodo>
    </>
  )
}


function RenderTodo({todos}){
  return (
    <>
      {todos.map((todos) => (
          <Todo key={todos.id} title = {todos.title} description={todos.description}/>
      ))}
    </>
  )

}



function Todo({title, description}){
  return (
  <div>
    <h3>{title}</h3>
    <h5>{description}</h5> 
  </div>
  )
}
export default App
