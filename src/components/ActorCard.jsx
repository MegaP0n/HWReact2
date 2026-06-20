function ActorCard(props)
{
    return (
        <div className="actor">
            <p>{props.name}</p>
            {props.isOscarWinner == true && <span className="badge-oscar">🏆 Оскар</span>}
            <p>Роль: {props.role}</p>
            <p>Фильм: {props.movie}</p>
            <p>Опыт: {props.experience}</p>
            <p>Умения: {Array.isArray(props.skills) ? props.skills.join(', ') : props.skills}</p>
            <p>{props.isLead == true ? 'В любимых' : 'Не в любимых'}</p>
        </div>
    )
}

export default ActorCard