import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief enters people's dreams.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      rating: 8.8,
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Astronauts travel through space to save humanity.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6Mly7nbO.jpg",
      rating: 8.7,
    },
    {
      id: 3,
      title: "The Dark Knight",
      description: "Batman faces the Joker in Gotham City.",
      posterURL:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 9,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [minRating, setMinRating] = useState(0);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    document.title = "My Movie App";
  }, []);

  function addMovie(e) {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      title: title,
      description: description,
      posterURL: posterURL,
      rating: Number(rating),
    };

    setMovies([...movies, newMovie]);

    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(5);
  }

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= minRating
    );
  });

  return (
    <div className="app">
      <h1>🎬 My Movie App</h1>

      <form className="movie-form" onSubmit={addMovie}>
        <h2>Add a Movie</h2>

        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Movie description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="url"
          placeholder="Poster image URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          required
        />

        <label>Rating (0–10)</label>
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />

        <button type="submit">Add Movie</button>
      </form>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        minRating={minRating}
        setMinRating={setMinRating}
      />

      <MovieList movies={filteredMovies} />

      {filteredMovies.length === 0 && (
        <p>No movies found. Try changing your filters.</p>
      )}
    </div>
  );
}

export default App;
