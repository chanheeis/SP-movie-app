import React,{Component} from 'react'; 
import MoviePoster from './MoviePoster';
import PropTypes from 'prop-types';

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

Movie.propTypes={
    title:PropTypes.string,
    poster:PropTypes.string
};

export default Movie;