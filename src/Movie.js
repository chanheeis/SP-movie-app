import React,{Component} from 'react';
import MoviePoster from './MoviePoster';

class Movie extends Component {
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <MoviePoster poster={this.props.poster}/>
            </div>
        )
    }
}

export default Movie;