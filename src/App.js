import React,{Component} from 'react';
import Movie from './Movie';

const movieList=[
  {
    title:"해리포터",
    poster:"https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5xq2/image/w2gbbJ7lwG0quKMZtTihufPuvno.jpg"
  },
  {
    title:"스타워즈",
    poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
  },
  {
    title:"반지의 제왕",
    poster:"http://www.newsinside.kr/news/photo/201812/514402_365603_597.jpg"
  }
];

function App() {
  return (
    <div className="App">
      {
        movieList.map((movie,index)=>{
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })
      }
    </div>
  );
}

export default App;
