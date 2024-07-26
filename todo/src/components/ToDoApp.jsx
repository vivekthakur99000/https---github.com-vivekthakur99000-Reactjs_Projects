import React, { useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

function ToDoApp() {
  const [isChecked, setIsChecked] = useState(false)
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);


  function handleCheckBoxClick(index){
    setTodos(
      todos.map((todo, idx) => {
      if(idx === index){
        return {...todo, isCompleted :!todo.isCompleted}
      }
      return todo
      }
    )
  )
  };

  function handleAddToDo(){
    const newTask = inputRef.current.value
    if(newTask !== ""){
      setTodos([...todos, {task: newTask, isCompleted: false}])
      inputRef.current.value = ""
    }
  }

  console.log(todos);



  function editTodo(index) {

    const newTask = prompt("Enter new Task")
    if(newTask !== null && newTask !== ""){
      setTodos(
        todos.map((todo, idx) => {
          if(idx === index){
          return {...todos, task: newTask}
          }
          return todo;
        }
      )
    );
    }

  }
  function deleteTodo(index) {
    setTodos(todos.filter((todo, idx)=> idx !== index))
  }

  return (
    <div className=" w-full h-screen bg-gray-600 flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-gray-300 rounded-md shadow">
        <h2 className="  text-center mt-3 font-mono text-blue-500 text-3xl font-semibold ">
          Vivek Todo App
        </h2>
        <div className=" m-5 flex items-center justify-center gap-2">
          <input
            type="text"
            name=""
            id=""
            className="h-10 w-[70%] rounded-3xl border-blck-500 pl-10 text-xl border-2 border-blue-500"
            placeholder=" Enter the Task..."
            ref={inputRef}
          />
          <button onClick={handleAddToDo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded-3xl focus: border-blue-700">
            Add
          </button>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center gap-2 mt-5">
            {
              todos.map((todo, index)=> {
               return (
                  <div className=" flex items-center justify-around gap-20">
              <input type="checkbox" className=" h-4 w-4" 
              checked={todos.isCompleted}
              onChange={() => handleCheckBoxClick(index)}
              />
              <p className= {`text-xl text-black-400 font-sans font-semibold ${isChecked ? "line-through " : ""}`}>
                {todo.task}
              </p>
              <div className=" flex gap-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded-3xl"
                onClick={()=> editTodo(index)}
                >
                  <CiEdit className="text-2xl" />
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded-3xl"
                onClick={() => deleteTodo(index)}
                >
                  <MdDelete className="text-2xl" />
                </button>
              </div>
            </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoApp;
