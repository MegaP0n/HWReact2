function MovieCard(props)
{
    const title = props.title;
    const year = props.year;
    const rating = props.rating;
    const isNew = props.year >= 2024;
    return (
        <div className={`movie ${rating >= 7 ? 'card-high-rating' : rating < 5 ? 'card-low-rating' : 'card-mid-rating'}`}>
            <h3>{title}</h3>
            {isNew && <span className="new-badge">🔥 Новинка</span>}
            <p>Год выпуска: {year}</p>
            <p>Страна: {props.country}</p>
            <p>Жанр: {props.genre}</p>
            <p>Длительность: {props.duration}</p>
            <p>Оценка: {rating}</p>
            <p>Описание: {props.description}</p>    
            <p>В любимых: {props.isFavorite == true ? 'да' : 'нет'}</p>
        </div>
    )
}

export default MovieCard