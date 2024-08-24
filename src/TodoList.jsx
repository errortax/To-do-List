import React,{useState} from "react";

function TodoList(){
  const [tasks, setTasks] = useState(["Practice React", "Learn Python"]);
  const [newTask, setNewTask] = useState();

  function addTask(){
   if(newTask.trim() !== ""){
    setTasks(t=> [...t,newTask]);
    setNewTask("");
   }
  }

  function handleNewInputChange(){
    setNewTask(event.target.value);
  }

  function handleTaskRemove(index){
    setTasks(tasks.filter((_, i)=> i !== index));
  }

  function moveUp(index){
   if(index > 0){
    const updatedTask = [...tasks];
    const temp = updatedTask[index];
    updatedTask[index] = updatedTask[index - 1];
    updatedTask[index - 1] = temp;
    setTasks(updatedTask);
   }
  }

  function moveDown(index){
    if(index < tasks.length - 1){
     const updatedTask = [...tasks];
     const temp = updatedTask[index];
     updatedTask[index] = updatedTask[index + 1];
     updatedTask[index + 1] = temp;
     setTasks(updatedTask);
    }
  }

  return(<div className="to-do-div">
    <h1>To-Do-List</h1>
    <div className="to-do-inside">
       <div>
       <input
        type = "text"
        value={newTask}
        onChange={handleNewInputChange}
        placeholder="Enter a task...." >
        </input>
        <button className="add-btn" onClick={addTask}>Add Task</button>
       </div>
        <ol>
            {tasks.map((tasks, index)=>
            <li key={index}>
               <div className="lists">
               {tasks}
              <button className="move-btn" onClick={()=> moveUp(index)}>Move Up</button>
            <button className="move-btn" onClick={()=> moveDown(index)}>Move Down</button>
            <button className="remove-btn" onClick={()=> handleTaskRemove(index)}>Remove</button>
               </div>
                </li>
               
            )}
           
        </ol>
    </div>
  </div>);
  
}

export default TodoList;
