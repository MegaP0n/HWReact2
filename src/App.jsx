import './App.css'
import CardSection from './components/CardSection'
import ActorCard from './components/ActorCard'
import MovieCard from './components/MovieCard'
import { movies } from './data/cards'
import { actors } from './data/cards'

function App() {
  return (
    <div className="app">
      <h1 className="main-title">🎬 Кинотека</h1>
      
      <CardSection 
        title="Фильмы" 
        subtitle="Лучшие фильмы всех времен">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id}
            title={movie.title}
            year={movie.year}
            country={movie.country}
            genre={movie.genre}
            duration={movie.duration}
            rating={movie.rating}
            description={movie.description}
            isFavorite={movie.isFavorite}
          />
        ))}
      </CardSection>

      <CardSection 
        title="Актеры" 
        subtitle="Талантливые исполнители">
        {actors.map((actor, index) => (
          <ActorCard key={actor.id}
            name={actor.name}
            role={actor.role}
            movie={actor.movie}
            experience={actor.experience}
            skills={actor.skills}
            isLead={actor.isLead}
            isOscarWinner={actor.isOscarWinner}
          />
        ))}
      </CardSection>
    </div>
  )
}

export default App
