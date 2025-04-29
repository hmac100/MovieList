  
  const key = "d649a899"

const searchBtn = document.querySelector(".search-btn")
const inputValue = document.getElementById("search")
const title = document.getElementById("title")
const plot = document.getElementById("plot")
const movieItem = document.querySelector(".movie-item")

 
  console.log(localStorage.getItem('movieQuery'))
  

const retrieveObj= localStorage.getItem('movieQuery')
console.log('retrievedObject:', JSON.parse(retrieveObj))
console.log(retrieveObj.Title)


watchlistMovieItem = document.getElementById('main').innerHTML=  `
    <div class="movie-details">
                  <h2 id="title">${retrieveObj.Title}
                      <span class="star"> ★ </span>
                      <span class="rating">${retrieveObj.imdbRating}</span>
                  </h2> 
                          <div class="movie-description"> 
                        <div class="runtime">${retrieveObj.Runtime}</div>
                        <div class="genre">${retrieveObj.Genre}</div>

                      
                        <div class="watchlist"><span><img class="addMovie-btn" 
                        src=""></span>Remove</div>
                       
                    </div>

                  <div class="plot">${retrieveObj.Plot}</div>
            </div>

`
