import React, { useContext, useState } from 'react'
import { GlobalContext } from './Context'
import './Home.css'

function Home() {
const[inputValue,setInputValue]=useState('');
const[inputText,setInputText]=useState('');
const {alert} =useContext(GlobalContext);

const handleInputChange=(e)=>{
    setInputValue(e.target.value);
}

const handleInputText=(e)=>{
    setInputText(e.target.value);
}

const showAlert=()=>{
    alert({
        type:"",
        title:(inputValue),
        text:(inputText)
    });
}

return(
    <div className='botton-container'>
        <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Give your alert title...'/><br/><br/>
        <input type='text' value={inputText} onChange={handleInputText} placeholder='Give your alert text...'/><br/><br/>
        <button className='button' onClick={showAlert}>Alert</button>
   </div>
)
  
}

export default Home