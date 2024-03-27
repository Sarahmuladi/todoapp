import './index.css';
import {useState} from 'react';
/*import {FaBeer} from 'react-icons/fa';*/
import {VscTrash} from 'react-icons/vsc';

function App() {

const [task, setTask]  = useState([]);
const [searchValue, setSearchValue]  = (useState(""));

const addTask = () =>{
  setTask((t)=>[...t, searchValue]);
  setSearchValue(" ");
};

const deleteTask = (taskToDelete) =>{
setTask(task.filter((task) => task !== taskToDelete));
};

const clearTasks = () => {setTask([])};


return (
<>
<div className='container1'>

<div className='container2'>

<h3>Todo App</h3>

<div className='newTodo'>
<input  type="text" name="firstdiv" placeholder="Add your new todo" value={searchValue} 
onChange={(e) =>{setSearchValue(e.target.value)}}
style={{height:"35px", width:"240px", fontSize:"15px"}} />

<button onClick={addTask} type="button"className='plusIcon'> +  </button>
</div>

{task.map(
(item, index) => {
return (
<div className='task' style={{height:"35px", width:"240px", display: 'flex', justifyContent:"space-between"}}><p>{item}</p>
<button className='deleteIcon' onClick={()=>deleteTask(item)} type='button'>
<VscTrash color='white' size='25px' />
</button>
  </div>
);
}
)
}

<div className='task'><p>{"Buy a new gaming laptop"}</p></div>

<div className='task' style={{height:"35px", width:"240px", display: 'flex', justifyContent:"space-between"}}>
{<p>{"Complete a previous task"}</p>}
<button className='deleteIcon' onClick={()=>deleteTask(item)} type='button'>
<VscTrash color='white' size='25px' />
</button>
</div>


<div className='task'><p>{"Create video for youtube"}</p></div> 

<div className='task'><p>{"Create a new portfolio site"}</p></div>

<div className='lastDiv'>
<p>You have {task.length +4} pending tasks
<button type="button"  className='button' onClick={{clearTasks}}>Clear All</button>
</p>
</div>

</div>
</div>


</>
);
}

export default App
