export default function Todo({todos}){
    return (
    <div>
        {todos.map(function(todo){
            return (
                <div>
                    <h2>Title: {todo.title}</h2>
                    <h3>Description {todo.description}</h3>
                    <button>{todo.complete == true?"Completed":"Mark as complete"}</button>
                </div>
            )
        })}
    </div>
    )
}