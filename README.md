# ./src/App.js

### line:5
currentPage를 1로 초기화, 버튼 클릭에 따라 해당 state가 변경됨

### line:9
컴포넌트가 마운트 된 이후 _getMovieList()함수를 호출

### line:13
movieList는 배열 데이터로, 한 페이지 당 20개의 요소가 담긴 배열이 응답으로 전달되며, map 함수를 통해 이를 props로 받는 컴포넌트 출력

### line:24
yts API를 호출하는 fetch메서드 정의로, 템플릿 문자열을 활용하여 두 개의 쿼리스트링을 전달하였고, page 인자를 state의 currentState로, sort_by 인자를 rating으로 설정함

### line:37
_callAPI()메서드의 응답을 기다리기 위해 async-await 문법을 활용하였고, 응답은 영화의 정보를 담은 배열 형태로 전달되며, 이를 movieList라는 이름으로 state에 저장

### line:42
페이지 버튼 클릭 시 수행되는 메서드로, _pageDown() 메서드의 경우 1페이지 이하로 변경되지 않도록 별도의 조건문을 정의하였음

### line:64
state에 movieList가 존재하면, 즉 API호출에 대한 응답이 완료되었으면 _renderMovieList함수를 실행

# ./src/Movie.js

### line:5
영화 제목이 긴 경우, CSS Style을 넘어가기 때문에 30자 제한을 두고, 길이가 넘어가는 제목에 대해 나머지 문자열을 "..."으로 대체함

### line:10
영화 장르가 많은 경우, CSS Style을 넘어가기 때문에 4개의 제한을 두고, 길이가 넘어가는 장르에 대해 표시하지 않음

### line:28
장르 배열 중 마지막인 경우를 제외하고 장르 이름 뒤에 ", &nbsp"를 추가함

# ./src/index.css

### line:3
구글의 웹폰트 'Roboto Condensed'를 활용, 폰트의 가독성을 높임

