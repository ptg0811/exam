import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todoLists, setTodoLists] = useState([
    {
      // 순서를 지정하기 위해 id값을 지정하였음
      id: 0,
      title: "react를 배워봅시다.",
    },
    {
      id: 1,
      title: "useState를 배워봅시다.",
    },
    {
      id: 2,
      title: "자바스크립트를 배워봅시다.",
    },
  ]);

  const [title, setTitle] = useState("");

  const onSubmitHandler = () => {
    const newTodoLists = {
      id: todoLists.length + 1,
      title: title,
    };
    setTodoLists([...todoLists, newTodoLists]);
  };

  console.log(todoLists);

  return (
    <div>
      <div className="add-form">
        <div className="input-style">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <button onClick={onSubmitHandler}>추가하기</button>
        </div>
      </div>
      <div className="title-style">
        <h1>Todo List</h1>
      </div>
      <div className="app-style">
        {todoLists.map((todoList) => {
          return <List todoList={todoList} key={todoList.id}></List>;
        })}
      </div>
    </div>
  );
};

function List(props) {
  return (
    <div>
      <div className="square-style">
        <h2>{props.todoList.title}</h2>
      </div>
    </div>
  );
}

export default App;
