import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([]);

  
  return (
    <>
       <CreateTodo></CreateTodo>
       <Todo todos={todos}></Todo>
    </>
  )
}

export default App
