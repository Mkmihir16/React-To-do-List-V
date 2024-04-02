// this component taking input and added  to do-list
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addList,removeList } from '../Slice/AllList';
import  "./TaskInput.css"
import "./Responsive/TaskInputrespo.css" //responsive css file
export default function TaskInput() {
  const dispatch=useDispatch()
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [list, setList] = useState(JSON.parse(localStorage.getItem("list11"))||[]);
  function handletitleval(e) {
    setTitle(e.target.value);
  }
  function handledescriptionval(e) {
    setDesc(e.target.value);
  }
  function handleSubmit() {

    dispatch(addList({ title, desc })) // Dispatching addList action with task title and description
    setDesc('')
    setTitle('')
    }
  

    localStorage.setItem("list11",JSON.stringify(list));
    useEffect(() => {
    console.log(list)
  }, [list]);

  return (
    <>
    {/* taking input of tile and description of the to-do-list  */}
      <div className='Taskinput-main'>
        <input
          type="text"
          onChange={handletitleval}
          value={title}
          name="inptitle"
          placeholder="Title"
        />
        <input className='inputdesc'
          type="text"
          onChange={handledescriptionval}
          value={desc}
          name="inputdes"
          placeholder="Description"
        />
        <button className='Taskinput-btn' onClick={()=>handleSubmit()}>Add</button>
      </div>
    </>
  );
}

