import SkillListItem from "./SkillListItem/SkillListItem";

export default function SkillList({ skills }) {

//   const skillsJsx skills.map((s, idx))(s => <SkillListItem skill={s} key={s} />);

  return (

    <ul>
        {skills.map((s, idx) => (
            <SkillListItem skill={s} key={idx} />
        ))} 
    </ul>
  );

}