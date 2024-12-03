import React, { useEffect, useState } from 'react'
import './Body.css'
function Body() {
    const [task,setTask]=useState('')
    const [tasks,setTasks]=useState([])
    useEffect(()=>{
        if(localStorage.getItem("localTasks")){
            const storedList=JSON.parse(localStorage.getItem("localTasks"))
            setTasks(storedList)
        }
    }, [])
    const addtask = (e)=>{
        if(task){
            const newtask={id:new Date().getTime().toString(),title:task}
            setTasks([...tasks,newtask])
            localStorage.setItem("localTasks",JSON.stringify([...tasks,newtask]))
            setTask('')
            console.log(tasks);
            
        }
    }

    const handleCheckboxChange = (taskToToggle) => {
        const updatedTasks = tasks.map((t) =>
            t.id === taskToToggle.id ? { ...t, completed: !t.completed } : t
        );
        setTasks(updatedTasks);
        localStorage.setItem('localTasks', JSON.stringify(updatedTasks));
    };
    const handleDelete = (taskToDelete) => {
        const deleted = tasks.filter((t) => t.id !== taskToDelete.id); // Use 'tasks' array
        setTasks(deleted); // Update the state with the filtered array
        localStorage.setItem("localTasks", JSON.stringify(deleted)); // Save to localStorage
    };
    
  return (
    <div className='container pb-5 rounded shadow-lg mt-3' >
       <div>
            <div>
                <h1 id='headd' style={{textAlign:'center'}}>To-DO LIST</h1>
            </div>
            <div className='addlist'>
                <div class="InputContainer">
                <input onChange={(e)=>setTask(e.target.value)} placeholder="add task" id="input" class="input" name="text" type="text"
                value={task}/>
            </div>
        <button class="cssbuttons-io-button" onClick={addtask}>
        <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
        </svg>
        <span>Add</span>
        </button>

        </div>
        </div>
        <div id='bodys'>
       <h1><h1>you have</h1></h1>
      <div style={{color:'black'}}>
            {
                !tasks.length?"no  tasks"
                :tasks.length===1?"1 task"
                :tasks.length>1?`${tasks.length} tasks`
                :null
            }
      </div>
        </div>
        <table class="table table-dark table-hover mt-5 mb-5">
        <thead>
            <tr>
            <th scope="col">Task</th>
            <th scope="col">check box</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
        {
            tasks.map((task)=>(
                <React.Fragment key={task.id}>
                <tr>
                <td className='texts'>
                <h5 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                </h5>
                </td>
                <td>
                
                <div className="checkbox-wrapper-31">
                <input type="checkbox"  checked={task.completed}
                                    onChange={() => handleCheckboxChange(task)} />
                <svg viewBox="0 0 35.6 35.6">
                    <circle className="background" cx="17.8" cy="17.8" r="17.8" />
                    <circle className="stroke" cx="17.8" cy="17.8" r="14.37" />
                    <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87" />
                </svg>
                </div>


                </td>
                <td>
                <button class="button" onClick={()=>handleDelete(task)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 69 14"
                    class="svgIcon bin-top"
                >
                    <g clip-path="url(#clip0_35_24)">
                    <path
                        fill="black"
                        d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                    ></path>
                    </g>
                    <defs>
                    <clipPath id="clip0_35_24">
                        <rect fill="white" height="14" width="69"></rect>
                    </clipPath>
                    </defs>
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 69 57"
                    class="svgIcon bin-bottom"
                >
                    <g clip-path="url(#clip0_35_22)">
                    <path
                        fill="black"
                        d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                    ></path>
                    </g>
                    <defs>
                    <clipPath id="clip0_35_22">
                        <rect fill="white" height="57" width="69"></rect>
                    </clipPath>
                    </defs>
                </svg>
                </button>

                </td>
                </tr>  
                </React.Fragment>
            ))
        }
        </tbody>
        </table>
    </div>
  )
}

export default Body
