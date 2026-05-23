function ActorCard(props)
{
    return (
        <div className="actor">
            <p>{props.name}</p>
            <p>Роль: {props.role}</p>
            <p>Фильм: {props.movie}</p>
            <p>Опыт: {props.experience}</p>
            <p>Умения: {Array.isArray(props.skills) ? props.skills.join(', ') : props.skills}</p>
            <p>В любимых {props.isLead ? <div className="square__true"></div> : <div className="square__false"></div>}</p>
        </div>
    )
}

export default ActorCard