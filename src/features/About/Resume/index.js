
const Resume = ({icon, year, title, name}) => {
    return (
<div className="resume__item">
    <div className="resume__icon">{icon}</div>
    <span className="resume__date">{year}</span>
    <h3 className="resume__subtitle">{title}</h3>
    <p className="resume__name">{name}</p>
</div>
    )
}

export default Resume;