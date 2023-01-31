import MovieList from "./components/MovieList";
import {useCallback, useEffect, useState} from "react";
import AddMovie from "./components/AddMovie";
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://react-movies-swapi-api-default-rtdb.firebaseio.com/movies.json', {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            const loadedMovies = [];

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate
                });
            }

            setMovies(loadedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    async function addMovieHandler(movie) {
        try {
            const response = await fetch('https://react-movies-swapi-api-default-rtdb.firebaseio.com/movies.json', {
                method: 'POST',
                body: JSON.stringify(movie),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            setError(error.message);
        };

    }

    let content = <p>Found no movies</p>;
    if (movies.length > 0) {
        content = <MovieList movies={movies}/>
    }
    if (error) {
        content = <p>error</p>
    }
    if (isLoading) {
        content = <p>Loading</p>
    }
    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </>
    );
}

export default App;
