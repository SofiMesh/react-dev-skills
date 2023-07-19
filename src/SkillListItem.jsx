import './SkillListItem.css'
export default function SkillListItem({ skill, index }) {
    return (
    <li className={"SkillListItem"}
    style={{
        backgroundColor: index % 2 ? "blue" : "yellow"
    }}>
        {skill.name} 
        {skill.level}
        
      
        </li>
    );
}