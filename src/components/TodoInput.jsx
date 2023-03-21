import { useState } from "react";
import styled from "styled-components";

export default function TodoInput ({setTodoList,todoList}){

  // state

  const [input, setInput] = useState("");


  // comportement
  const Button = styled.button`
  display: inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;

const Text = styled.input`
  border: 2px solid #000;
`;

const handleNewTodo = (text, callBack) => {
  const _newTodo = { id: Date.now(), text };
  // comments
  setTodoList([...todoList, _newTodo]);

  // init input
  if (callBack) callBack(_newTodo);
};

  // affichage (render)

  return <div>
    <input value={input} onChange={(e) => setInput(e.target.value)} />
  <Button onClick={() => handleNewTodo(input, () => setInput(""))}>
    Add
  </Button></div>
}