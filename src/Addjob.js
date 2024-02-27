import React,{useState} from 'react'

function btn_click(){
async function Senddatafromapi(){
    var url="https://reqres.in/api/users";
    var response =await fetch(url,{metod:"get"})
}
}
function Addjob(props) {
    let [Name,setName]=useState();
    let [Job,setJob]=useState();
    function Name_onChange(e){
        setName(e.target.value);
    }
    function Job_onChange(e){
        setJob(e.target.value);
    }
  return (

    <>
    <div>
      <label onChange={Name_onChange} value={Name}>Name </label>
    <input type="text" />
    </div>
    <div>
      <label onChange={Job_onChange} value={Job}>Job </label>
    <input type="text"/>
    </div>
    <div>
     
    <button onClick={btn_click}>Add</button>
    </div>

    </>
  )
}

export default Addjob
