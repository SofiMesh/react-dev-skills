import './NewSkillForm.css';
import React, { useState } from 'react';

export default function NewSkillForm({addNewSkill}) {
const [newSkill, setNewSkill] = useState({
  name:"",
  level: "3"
});



const [errorMessage ,setErrorMessage] = useState('')

function handleChange(e) {
  const value = e.target.value;
  setNewSkill({ ...newSkill, [e.target.name]: value});
}
function formatSkillObj(skill){
  return {
    ...skill, name: skill.name[0].toUpperCase() + skill.name.slice(1).toLowerCase()  }
}

function handleSubmit(e) {
  e.preventDefault();

  if(newSkill.name === "" || newSkill.level === ""){
    return setErrorMessage("Please fill out the form")
  }




    console.log(newSkill)
  addNewSkill(newSkill);
  
  setErrorMessage("");
  setNewSkill({
    name: "",
    level: "3"
  })
}
    return (
       <>
      <span>{errorMessage ? errorMessage : ''}</span>

      <form onSubmit={handleSubmit} >
        <label>Skill</label>
        <input
        // value={newSkill}
         type="text" 
         name="name"
         placeholder="Add Skill"
         onChange={handleChange}
         />
        <label>Level</label>
        <select 
        value={newSkill.level}
        type="number" 
        name="level"
        onChange={handleChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          </select>
        <button type="submit">ADD SKILL</button>
        </form>
       </>
    );
}