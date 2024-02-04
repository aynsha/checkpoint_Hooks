
import React from "react";
import Card from 'react-bootstrap/Card';
import './styles/style.css'
function MovieCard ({movie}) {

  //Création du card des films
   return(
    <Card className="card" >
            <Card.Img variant="top" src={movie.posteUrl}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    <p>Description:  {movie.description}</p>
                    <p>Notes:  {movie.note}/5</p>
                </Card.Text>
            </Card.Body>
        </Card> 
   );
}
export default MovieCard;