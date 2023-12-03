import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ tasks, completeTask, editTask, saveTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          completeTask={completeTask}
          editTask={editTask}
          saveTask={saveTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList