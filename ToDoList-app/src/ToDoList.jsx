import React, {useState} from "react"

function ToDoList(){

    const[tasks, setTasks]=useState(["wake up","Eat Breakfast"]);
    const [newTask, setNewTask]=useState("");

    function handelInputChange(e){
        setNewTask(e.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");

        }
        
    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=>i!==index); 
        setTasks(updatedTasks);

    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks [index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
         if(index < tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks [index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks);
        }

    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text"placeholder="Enter The Task For Today..." value={newTask} onChange={handelInputChange}/>
                <button className="add-button"onClick={addTask}>ADD</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                                        <li key={index} onClick={()=>updatedTasks(index)}>
                                            <span className="text">
                                            {task}
                                            </span>
                                            <button className="delete-button" onClick={()=>deleteTask(index)}>DELETE</button>
                                            <button className="move-button" onClick={()=>moveTaskUp(index)}>UP</button>
                                            <button className="move-button" onClick={()=>moveTaskDown(index)}>Down</button>

                                        </li>)}
            </ol>
        </div>
    );


}

export default ToDoList