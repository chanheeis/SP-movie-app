import React,{Component} from 'react';
import Movie from './Movie';

const movieList=[
  {
    title:"A",
    poster:"http://pngimg.com/uploads/apple_logo/apple_logo_PNG19670.png"
  },
  {
    title:"B",
    poster:"http://pngimg.com/uploads/apple_logo/apple_logo_PNG19670.png"
  },
  {
    title:"C",
    poster:"http://pngimg.com/uploads/apple_logo/apple_logo_PNG19670.png"
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
