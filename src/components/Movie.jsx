import Button from "./Button";

const Movie=(props)=>{
    return( 
    
    <div className="mov relative max-w-xs overflow-hidden bg-cover bg-no-repeat" >
     <img src={props.src}  className="max-w-xs transition duration-300 ease-in-out hover:scale-110 rounded-xl"/>
     <div className="mov-det tracking-tight">
     <h4>
         {props.title}<br/>
         {props.rating}
     </h4>
     <Button/>
     </div>
   
    </div>
    
    
);
}

export default Movie;