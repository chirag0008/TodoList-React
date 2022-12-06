import React, { useState } from 'react'
import Help from './Help';
import './stylee.css'
const List = () => {
    const[item,setItem]=useState("");
    const[val,setVal]=useState([]);
const update=(e)=>{
    setItem(e.target.value);
}
  const listOfItems=()=>{
    setVal((oldItems)=>{
        return [...oldItems,item]
    })
    setItem("");
  }
  const deleteItems=(id)=>{
    console.log("deleted");
    setVal((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!=id;
      })
    })
  }
    
  return (
    <>
    <div className='div1'>
        <div className='div2'>
            <br></br><br></br>
            <h1 className='hd1'>ToDo List</h1>
            <br></br><br></br>
            <input type="text" className='inp1' placeholder='Add a Item' onChange={update} value={item} ></input>
            <button className='btn' onClick={listOfItems}>+</button>
            <br></br><br></br>
            <ul className='listItemm'>
              
           {val.map((itemval,index)=>{
            return <Help vali={itemval} key={index} id={index} onSelect={deleteItems}/>
           })}
        
           </ul>
        </div>
    </div>
    </>
  )
}

export default List