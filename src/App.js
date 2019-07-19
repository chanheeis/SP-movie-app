import React,{Component} from 'react';
import Movie from './Movie';

class App extends Component {
  state={
  }

  componentDidMount(){
    this._getMovieListData();
  };

  _renderMovieList = ()=>{
    const movieList=this.state.movieList.map((movie,index)=>{
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={index}/>
    })

    return movieList;
  };

  _getMovieListData = async ()=>{
    const movieList= await this._callApi();
    console.log(movieList);
    this.setState({
      movieList
    }) 
  }

  _callApi = ()=>{
    return fetch('https://yts.lt/api/v2/list_movies.json').then(res=>res.json()).catch(err=>console.log(err))
    .then(json=>json.data.movies).catch(err=>console.log(err))
  }

  render(){
    return (
    <div className="App">
      {
        this.state.movieList?this._renderMovieList():'Loading...'
      }
    </div>
  );
  }
}
export default App;
