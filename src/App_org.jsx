import { useState } from 'react'

import './App.css'

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTodolist(prevArray => [todo, ...prevArray]);
  };
  console.log(todolist);
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="할 일을 입력하세요." value={todo} onChange={onChange}/>
        <input type="submit" value="입력" />
      </form>
      <ul>
      {todolist.map((todo) => (<li>todo</li>))}
      </ul>
    </>
  )
}

export default App
