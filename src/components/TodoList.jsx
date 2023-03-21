import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

// todoInfo {id: string required , text?: string}
export default function TodoList({ todoInfo, onEditTodo, onDeleteTodo}){
  
  // state 

  // components

  // affichage (render)
  return <li >
  {todoInfo.text}
  <button onClick={() => onDeleteTodo(todoInfo.id)}>
    <FontAwesomeIcon icon={faTrash} color="#ff0000" />
  </button>
  <button
    onClick={() =>
      onEditTodo(todoInfo.id, prompt("Edit todo:", todoInfo.text))
    }
  >
    <FontAwesomeIcon icon={faEdit} color="#00ff00" />
  </button>
</li>
}