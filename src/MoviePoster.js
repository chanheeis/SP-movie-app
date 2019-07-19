import React,{Component} from 'react';

class MoviePoster extends Component{
    render(){
        return(
            <div>
                <img src={this.props.poster} width="300px" height="300px"/>
            </div>
        )
    }
}

export default MoviePoster;