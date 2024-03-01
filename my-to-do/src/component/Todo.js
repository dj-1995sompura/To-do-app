import './todo.css';
import {useState} from 'react';

function Todo() {
    let [input, setInput] = useState("");
    let arr=[];
    const handleActivity = (e) =>{
        setInput(e.target.value);
        // console.log(input);
    };

    const handleSubmitActivity = () =>{
        
        let task = input;

        arr.push(task);
        console.log(...task,arr);
        // console.log(task);


    }
  return (
    <div className="container">
        <h1 className='title'>to do list</h1>
        <div className='addTask'>
            <input type='text' id="inputData" value={input} onChange={handleActivity}/>
            <button className='addButton' onClick={handleSubmitActivity}>Add Task</button>
        </div>
        <div className='outputArea'>
            <ul className='activityList'>

            </ul>
        </div>
        <button className='clearData'>Clear Data</button>
    </div>
  )
}

export default Todo