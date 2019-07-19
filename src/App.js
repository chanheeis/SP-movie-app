import React,{Component} from 'react';
import Movie from './Movie';

class App extends Component{
  state={
  }

  componentDidMount(){
    this._getMovieList();
  }

  _renderMovieList = ()=>{
    return this.state.movieList.map((movie,index)=>{
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id}/>
    })
  }

  //영화 사이트로부터 API를 요청, 응답 메시지를 JSON으로 변환하는 메서드 정의
  _callAPI = ()=>{
    return( 
      fetch("https://yts.lt/api/v2/list_movies.json")
      .then(res=>res.json()).catch(err=>console.log(`${err}, Error Occured During Fetch!`))
      .then(data=>data.data.movies).catch(err=>console.log(`${err}, Error Occured During Second Stage!`))
    )
  }

  //_callAPI() 메서드로부터 전달된 JSON 데이터를 통해 App 컴포넌트의 state를 set하는 부분
  
  //ERR!!! MovieList 정확히 받고있음 -----
  _getMovieList = async ()=>{
    const movieList=await this._callAPI();
    this.setState({
      movieList
    });
    console.log(this.state);
  }
  
  render(){
    return(
      <div>
        {
          this.state.movieList ? this._renderMovieList() : "Loading..."
        }
      </div>
    )
  }
}

export default App;