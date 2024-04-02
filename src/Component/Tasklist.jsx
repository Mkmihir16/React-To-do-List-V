// this component display the to-do-list
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeList,changeStatus } from '../Slice/AllList';
import "./Tasklist.css";
import dltimg from "../assets/delete.svg";
import happy from "../assets/happy-face.png";
import "./Responsive/Tasklistrespo.css" //responsive css file
function Tasklist() {
  const items = useSelector((state) => state.listitem);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("Incomplete");

  function deletelist(id) {
    dispatch(removeList(id));
  }

  function changestate(id) {
    const newStatus = items.statuses[id] === "Incomplete" ? "Completed" : "Incomplete";
    dispatch(changeStatus({ id, status: newStatus}));

  }

  return (
    <div className="tasklist-main">
      <div className="tasklist-header-table">
        {items.list.length === 0 ? (
          <div className='none-list'>
          <h1>No To-Do Yet... </h1>
          <img src={happy} alt="" />
          </div>
          
        ) : (
          <table>
            <thead>
             
                <th>Title</th>
                <th>Description</th>
                <th>Delete</th>
                <th>Status</th>
             
            </thead>
            
              {items.list.map((elem, id) => (
                <tr key={id}>
                  <td>{elem.title}</td>
                  <td>{elem.desc}</td>
                  <td><img className='dltimg' onClick={() => deletelist(id)} src={dltimg} alt="delete" /></td>
                  <td><button className={items.statuses[id] === "Completed" ? "greenbtn" : "normalbt"} onClick={() => changestate(id)}>{items.statuses[id] || status}</button></td>
                </tr>
              ))}
            
          </table>
        )}
      </div>
    </div>
  );
}

export default Tasklist;
