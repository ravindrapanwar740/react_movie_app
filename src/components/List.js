import React from 'react'

const Home = (props) => {
    return (
        <>
          {
              props.movies.map((movie,index)=>(
                
                 <div className='image-container d-flex justify-content-start m-3'>
                 
                <div  className="homepage-bgimage">
              <img style={{marginTop:"120px"}} src={movie.Poster} alt="movie"></img>
             <h1 style={{color:"white",}}>Movie:{movie.Title}</h1>
              <h1 style={{color:"white"}}>Year:{movie.Year}</h1> 
              </div></div>
              ))
          }
        </>
    )
}

export default Home
