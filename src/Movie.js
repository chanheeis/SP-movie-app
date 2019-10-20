import React,{Component} from 'react';
import MoviePoster from './MoviePoster';

class Movie extends Component{
    _stringCut=(str)=>{
        const cutString=str.slice(0,29);
        return cutString+"...";
    }

    _genreCut=(genres)=>{
        const cutGenre=genres.slice(0,4);
        return cutGenre;    
    }

    render(){
        const title=this._stringCut(this.props.title);
        const genres=this._genreCut(this.props.genres);
        const {poster,rating}=this.props;
        return(
            <div className="movie">
                <div className="movie-columns">
                    <MoviePoster poster={poster}/>
                </div>
                <div className="movie-columns">
                    <h3>{title}</h3>
                    <div className="movie-genres">
                        {genres.map((genre,index)=>{
                            if(index!==genres.length-1){
                                return <MovieGenreWithRest genre={genre} key={index}/>
                            }else{
                                return <MovieGenre genre={genre} key={index}/>
                            }
                        })}
                    </div>
                    <p className="movie-rating">{rating}</p>
                </div>
            </div>
        )
    }
}

function MovieGenreWithRest({genre}){
    return(
        <span className="movie-genre">{genre}, </span>
    )
}

function MovieGenre({genre}){
    return(
        <span className="movie-genre">{genre}</span>
    )
}



export default Movie;