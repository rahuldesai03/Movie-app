
import MovieCard from "./Moviecard";

function MovieList (props) {
         const {movies, onIncStars, onDecStars, onClickFav, onClickAddtocart} = props;
   
        return (
            
            <>
            {movies.map((movie) =><MovieCard movies = {movie}
                                             onIncStars = {onIncStars}
                                             onDecStars= {onDecStars} 
                                             onClickFav= {onClickFav}
                                             onClickAddtocart = {onClickAddtocart}           
                                              key = {movie.id}/>
            )}
            </>
          
        )
    }


export default MovieList;