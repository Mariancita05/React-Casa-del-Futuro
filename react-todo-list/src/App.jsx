import { useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null)
  const [editedText, setEditedText] = useState('')

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
      //.trim elimina espacios iniciales, finales y repetidos del texto
      //Verifica que la nueva tarea no esté vacía (`newTask.trim() !== ''`)
      //Si la tarea no está vacía, agrega la nueva tarea al estado `tasks` utilizando el operador spread (`...`) para no mutar directamente el estado anterior.
      //Limpia el input de la nueva tarea (`setNewTask('')`) para prepararse para la próxima tarea.
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    // Verifica si la tarea ya está marcada como completa
    if (!updatedTasks[index].includes("✅")) {
      updatedTasks[index] = `✅ ${updatedTasks[index]}`;
      setTasks(updatedTasks);
      //Crea una copia del array de tareas (updatedTasks) para evitar mutar el estado directamente.
      //Agrega un indicador (✅✔️✔️) a la tarea correspondiente utilizando el índice pasado como argumento.
      //Actualiza el estado con las tareas modificadas.
    }
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
  };

  const saveTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
    setEditingTaskIndex(null);
  };

  const deleteTask = (index) => {
    const newListTasks = tasks.filter((task, id)=> index !== id)
    setTasks(newListTasks)
    /* const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks); */
    //.slice copia una parte de un arreglo y devuelve esa copia como un nuevo arreglo
    //Crea una copia del array de tareas (updatedTasks) para evitar mutar el estado directamente.
    //Utiliza el método `splice` para eliminar la tarea correspondiente según el índice pasado como argumento.
    //Actualiza el estado con las tareas modificadas.
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoList
        tasks={tasks}
        completeTask={completeTask}
        editTask={editTask}
        saveTask={saveTask}
        editingTaskIndex={editingTaskIndex}
        editedText={editedText}
        setEditedText={setEditedText}
        deleteTask={deleteTask}
      />
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Agregar tarea</button>
    </>
  );
}

export default App;
