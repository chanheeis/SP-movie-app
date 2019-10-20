# ./src/App.js

### js:5
currentPage를 1로 초기화, 버튼 클릭에 따라 해당 state가 변경됨

### js:9
컴포넌트가 마운트 된 이후 _getMovieList()함수를 호출

### js:13
movieList는 배열 데이터로, 한 페이지 당 20개의 요소가 담긴 배열이 응답으로 전달되며, map 함수를 통해 이를 props로 받는 컴포넌트 출력

### js:24
yts API를 호출하는 fetch메서드 정의로, 템플릿 문자열을 활용하여 두 개의 쿼리스트링을 전달하였고, page 인자를 state의 currentState로, sort_by 인자를 rating으로 설정함

### js:37
_callAPI()메서드의 응답을 기다리기 위해 async-await 문법을 활용하였고, 응답은 영화의 정보를 담은 배열 형태로 전달되며, 이를 movieList라는 이름으로 state에 저장

### js:42
페이지 버튼 클릭 시 수행되는 메서드로, _pageDown() 메서드의 경우 1페이지 이하로 변경되지 않도록 별도의 조건문을 정의하였음

### js:64
state에 movieList가 존재하면, 즉 API호출에 대한 응답이 완료되었으면 _renderMovieList함수를 실행





