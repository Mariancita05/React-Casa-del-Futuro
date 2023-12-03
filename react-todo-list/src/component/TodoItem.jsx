import React, { useState } from 'react';

function TodoItem({ task, index, completeTask, deleteTask, saveTask }) {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task);
  

  const handleCompleteTask = () => {
    completeTask(index);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    saveTask(index, editedText);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={handleInputChange} />
          <button onClick={handleSaveClick}>Guardar</button>
        </>
      ) : (
        <>
          <p>{task}</p>
          <button onClick={handleCompleteTask}>Completar</button>
          <button onClick={handleEditClick}>Editar</button>
          <button onClick={() => deleteTask(index)}>Eliminar</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;