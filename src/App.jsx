import React, { useState } from 'react';
import './App.css';
import NewSkillForm from './NewSkillForm/NewSkillForm'
import SkillList from './SkillList'

export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);


function addNewSkill(skillFromTheForm){
console.log(skillFromTheForm);
  setSkills([  skillFromTheForm,  ...skills])
}

  return (
    <>
      <h1>React Dev Skills</h1>
      
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm addNewSkill={addNewSkill} />
    </>
   
  );
}