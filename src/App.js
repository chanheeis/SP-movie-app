import React,{Component} from 'react';
import Movie from './Movie';
import './App.css';
class App extends Component{
  state={
    currentPage:1
  };

  componentDidMount(){
    this._getMovieList();
  }

  _renderMovieList = ()=>{
    return this.state.movieList.map((movie,index)=>{
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        genres={movie.genres}
        rating={movie.rating}
        key={index}/>
    })
  }

  _callAPI = ()=>{
    return( 
      fetch(`https://yts.lt/api/v2/list_movies.json?page=${this.state.currentPage}&sort_by=rating`)
      .then(res=>res.json()).catch(err=>this._printError(err))
      .then(data=>data.data.movies).catch(err=>this._printError(err))
    )
  }

  _printError=(str)=>{
    console.log("===ErrorOccured===\n");
    console.log(str);
  }
    
  _getMovieList = async ()=>{
    const movieList=await this._callAPI();
    this.setState({movieList});
  };

  _pageDown=async()=>{
    const {currentPage}=this.state;
    if(currentPage===1||currentPage<1){
        alert("첫 번째 페이지입니다.");
        return;
    }
    await this.setState({currentPage:currentPage-1});
    const movieList=await this._callAPI();
    this.setState({movieList});
  }

  _pageUp=async()=>{
    const {currentPage}=this.state;
    await this.setState({currentPage:currentPage+1});
    const movieList=await this._callAPI();
    this.setState({movieList});
  }

  render(){
    return(
      <div id="app">
        <h1 id="app-title">Movie App</h1>
        {
          this.state.movieList ? 
          this._renderMovieList():""
        }
        <div id="button-wrapper">
          <button id="previous-button" onClick={this._pageDown}></button>
          <button id="next-button" onClick={this._pageUp}></button>
        </div>
      </div>
    )
  }
}

export default App;