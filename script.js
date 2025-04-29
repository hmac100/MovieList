
const key = "d649a899"

const searchBtn = document.querySelector(".search-btn")
const inputValue = document.getElementById("search")
const title = document.getElementById("title")
const plot = document.getElementById("plot")
const movieItem = document.querySelector(".movie-item")



searchBtn.addEventListener('click', findMovie)



const watermark = document.querySelector('.hidden')

function findMovie(e){ 
   const movieQuery = inputValue.value
  e.preventDefault()

watermark.style.display = "none"


fetch(`https://www.omdbapi.com/?apikey=${key}&t=${movieQuery}`)
.then(res => res.json())
.then(data => {

main.innerHTML += `

 <li class="movie-item item-border">
   
     <div class="poster"><img src="${data.Poster}" alt="Movie Item Poster"/></div>
  
          <div class="movie-info-container">
  
            <div class="movie-details">
                  <h2 id="title">${data.Title}
                      <span class="star"> ★ </span>
                      <span class="rating">${data.imdbRating}</span>
                  </h2> 
                
                    <div class="movie-description"> 
                        <div class="runtime">${data.Runtime}</div>
                        <div class="genre">${data.Genre}</div>

                      
                        <div class="watchlist"><span><img class="addMovie-btn" 
                        src="assets/addIcon@2X.png"/></span>Watchlist</div>
                       
                    </div>

                  <div class="plot">${data.Plot}</div>
            </div>
       </div>
     
  </li> 
`

const addMovieBtn = document.querySelector('.addMovie-btn').addEventListener('click',function(){
  console.log('click')
  localStorage.setItem('movieQuery', JSON.stringify(data))


  location.href = "watchlist.html"
//   console.log(localStorage.getItem('movieQuery'))
  
// const retrieveObj= localStorage.getItem('movieQuery')
// console.log('retrievedObject:', JSON.parse(retrieveObj))
})

  })
  



}

