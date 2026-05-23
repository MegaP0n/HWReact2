function MovieCard(props)
{
    return (
        <div className="movie">
            <h3>{props.title}</h3>
            <p>Год выпуска: {props.year}</p>
            <p>Страна: {props.country}</p>
            <p>Жанр: {props.genre}</p>
            <p>Длительность: {props.duration}</p>
            <p>Оценка: {props.rating}</p>
            <p>Описание: {props.description}</p>
            <p>В любимых {props.isFavorite ? <div className="square__true"></div> : <div className="square__false"></div>}</p>
        </div>
    )
}

export default MovieCard