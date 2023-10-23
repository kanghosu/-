// API 키
const apiKey = 'b622c6c5343734b3c7bd7a877a7468cf';
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=`;

// DOM 요소 가져오기
const searchForm = document.querySelector('.search-form');
const movieList = document.querySelector('.movie-list');

// 영화 카드 생성 및 화면에 추가
function displayMovies(movies) {
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

        const details = document.createElement('div');
        details.classList.add('movie-details');

        const title = document.createElement('h2');
        title.classList.add('movie-title');
        title.textContent = movie.title;

        const overview = document.createElement('p');
        overview.classList.add('movie-overview');
        overview.textContent = movie.overview;

        const rating = document.createElement('p');
        rating.classList.add('movie-rating');
        rating.textContent = `평점: ${movie.vote_average}`;

        card.appendChild(img);
        details.appendChild(title);
        details.appendChild(overview);
        details.appendChild(rating);
        card.appendChild(details);

        // 카드를 클릭했을 때 영화 ID를 알림 창으로 표시
        card.addEventListener('click', () => {
            alert(`영화 ID: ${movie.id}`);
        });

        movieList.appendChild(card);
    });
}

// 검색 양식 제출 이벤트 리스너 등록
searchForm.addEventListener('submit', searchMovies);
