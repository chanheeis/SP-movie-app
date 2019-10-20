import React,{Component} from 'react';

class MoviePoster extends Component{
    render(){
        return(
            <div className="movie-poster">
                {
                    this.props.poster?
                    <img src={this.props.poster}/>:
                    "Loading..."
                }
            </div>
        )
    }
}

export default MoviePoster;