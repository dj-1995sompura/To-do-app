import './todo.css';
import {useState} from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css'

function Todo() {
    let [input, setInput] = useState("");
    let [arr, setArr] = useState(
        []
    );
    let [secondValue, setSecondValue] = useState(arr);
    const handleActivity = (e) =>{
        e.stopPropagation();
        setInput(e.target.value);
        // console.log(input);
    };

    const handleSubmitActivity = () =>{

        // get task and add in array to crete a list
        let task = input;
        if(task.length > 0){
            setArr([...arr, task]);
        }

        // reset value
        setInput("");
    }

    const handleClear=()=>{
        // empty arr
        setArr([]);
    }
    const handleEdit =(e) =>{
        // edit the existing activity
        e.stopPropagation();
        // setSecondValue(e.target.value)
        // setInput( e.target.value);
        // setArr(())
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
                {arr.map((item,index)=>{
                 return(   
                    <li key={index}>
                        <span>{index + 1}</span>
                        <span>{item}</span>
                        <span>
                            <input type='text' value={secondValue} onChange={handleEdit}/>
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </span>
                        <p>
                        <span className='edit'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                        <span className='remove'><i class="fa fa-trash" aria-hidden="true"></i></span>
                        </p>
                    </li>
                 )
            })}
            </ul>
        </div>
        <button className='clearData' onClick={handleClear}>Clear Data</button>
    </div>
  )
}

export default Todo