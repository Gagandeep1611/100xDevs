
import './App.css'

function App() {

  return (
    <>
      <Todo title="Go to gym" description='Go to gym description'/>
    </>
  )
} 

interface todoInterface{
  title: string,
  description: string
}

function Todo(todo: todoInterface){
  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  )
}

export default App
