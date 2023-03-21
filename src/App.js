import React, { useState } from "react";
import styled from "styled-components";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// this comp ....
function App() {
  // comments its reason  ...

  const [todoList, setTodoList] = useState([]);

  //

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, newText) => {
    const edit_todo = todoList.findIndex((e) => e.id === id);
    if (edit_todo >= 0) {
      todoList[edit_todo].text = newText;
      setTodoList([...todoList]);
    }
  };

  return (
    <Container>
      <div>
        <h2>
          <strong>ToDo List</strong>
        </h2>
        <TodoInput setTodoList={setTodoList} todoList={todoList} />

        <div>
          <ol>
            <h2>Daily Task</h2>
            {todoList.map((todo, index) => {
              return (
                <TodoList
                  key={index}
                  todoInfo={todo}
                  onEditTodo={handleEdit}
                  onDeleteTodo={handleDelete}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </Container>
  );
}

export default App;
