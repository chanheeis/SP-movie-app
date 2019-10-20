## ./src/App.js:5
currentPage를 1로 초기화, 버튼 클릭에 따라 해당 state가 변경됨

## ./src/App.js:9
컴포넌트가 마운트 된 이후 _getMovieList()함수를 호출

## ./src/App.js:24
yts API를 호출하는 fetch메서드 정의로, 템플릿 문자열을 활용하여 두 개의 쿼리스트링을 전달
page 인자를 state의 currentState로, sort_by 인자를 rating으로 설정함

## './src/App.js:37'
_callAPI()메서드의 응답을 기다리기 위해 async-await 문법을 활용
응답은 영화의 정보를 담은 배열 형태로 전달되며, 이를 movieList라는 이름으로 state에 저장

## ./src/App.js:42
페이지 버튼 클릭 시 수행되는 메서드로, 
_pageDown() 메서드의 경우 1페이지 이하로 변경되지 않도록 별도의 조건문을 정의하였음





