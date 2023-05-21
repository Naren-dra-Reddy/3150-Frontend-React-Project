import Button from "./Button";

const Movie=(props)=>{
    return( 
        <div className="movie-container">
        <div className="card" >
        <img src={props.src} className="card-img-top" style={{ height:"300px", objectFit:"fill"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p>Ratings: {props.rating}</p>
          <Button/>
        </div>
      </div>
      </div>
    )
}

export default Movie;