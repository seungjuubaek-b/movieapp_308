import { useReducer } from "react";
import "./App.css";

// 초기 상태 정의
const initialState = {
  todo: "",
  todoList: [
    { id: 2, text: "운동하기", completed: true },
    { id: 1, text: "산책하기", completed: false },
  ],
};

// reducer 함수 정의
function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return { ...state, todo: action.payload };

    case "ADD_TODO": {
      // case 블록을 {} 로 감싸서 경고 없애기
      if (state.todo === "") return state; // 빈 입력 방지
      const newTodo = {
        id: Date.now(),
        text: state.todo,
        completed: false,
      };
      return {
        ...state,
        todoList: [newTodo, ...state.todoList],
        todo: "", // 입력창 초기화
      };
    }

    case "DELETE_TODO": // 선택한 id 를 제외한 나머지 todolist 를 필터링
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };

    case "TOGGLE_TODO": // 완료상태 토글, payload 로 id 가 넘어옴
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    dispatch({
      type: "SET_TODO",
      payload: e.target.value,
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const onToggle = (id) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO" });
  };

  return (
    <>
      <h1>TodoList App</h1>

      <form action="#" onSubmit={onSubmit}>
        <input
          type="text"
          value={state.todo}
          onChange={onChange}
          placeholder="할 일을 입력하세요"
        />

        <input type="submit" value="추가" />
      </form>

      <ul>
        {state.todoList.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#aaa" : "#000",
                cursor: "pointer",
              }}
              onClick={() => onToggle(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;