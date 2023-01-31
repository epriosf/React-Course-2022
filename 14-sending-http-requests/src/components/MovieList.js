import classes from "./MovieList.module.css";
import Movie from "./Movie";

const MovieList = (props) => {
    return (
        <ul className={classes['movie-list']}>
            {props.movies.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    openingText={movie.openingText}
                />
            ))}
        </ul>
    );
};
export default MovieList;