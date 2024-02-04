
import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import MovieList from "./MovieList";
import AddMovies from "./AddMovies";
import Filtre from "./Filtre";


function App(){
  //Création et initialisstion du state pour le tableau des films
  const [movies, setMovies]=useState([
    {
      id: 1,
     title: "La Reine des neiges",
      posteUrl: "assets/img/La_reine_des_Neiges.webp",
      description: "Ceci c'est une description de film Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem repellat facere perferendis! Repudiandae, vel consequuntur ducimus natus impedit enim.",
      note: 5
      
},
    {
      id: 2,
     title: "La famille Madrigal",
      posteUrl: "assets/img/encanto_affiche.jpg",
      description: "Ceci c'est une description de film Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem repellat facere perferendis! Repudiandae, vel consequuntur ducimus natus impedit enim.",
      note: 5
},
    {
      id: 3,
     title: "Asha et la bonne étoile",
      posteUrl: "assets/img/Wish.webp",
      description: "Ceci c'est une description de film Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem repellat facere perferendis! Repudiandae, vel consequuntur ducimus natus impedit enim.",
      note: 5
},
    {
      id: 4,
     title: "Wonka",
      posteUrl: "assets/img/Wonka.webp",
      description: "Ceci c'est une description de film Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem repellat facere perferendis! Repudiandae, vel consequuntur ducimus natus impedit enim.",
      note: 4
}
  ]);
  const [filteredMovies, setFilteredMovies]= useState([]);

  //Comportement
  //fonction qui prend en paramétre un nouvel objet newMovie et met à jour le state movies gràce à son setter pour ajouter un nouveau film au tableau des films
  const addMovies=(newMovie)=>{
    setMovies([...movies, {id: movies.length+1,  ...newMovie}]);
  };

  const handleFilterChange=({title, note})=>{
    const filtreMovies= movies.filter((film) => 
    film.title.toLowerCase().includes(title.toLowerCase()) 
    && 
    film.note.toString().includes(note.toString())
    );
    setFilteredMovies(filtreMovies);
  };
  //Affichage
  return(
    <div>
      <h2>Filtrer les films</h2>
      <Filtre onFilterChange={handleFilterChange} />
      <h1>Liste des Films</h1>
       <MovieList movies={filteredMovies.length ? filteredMovies : movies} /> {/* Composant MoviesList qui prend movies comme props, utiliser pour accéder à la liste des films dans ses propriétés (props) et de les utiliser à l'intérieur du composant. */}
      <h2>Ajouter un film</h2>
       <AddMovies onAddMovies= {addMovies} /> {/*Ajout de la fonction onAddMovies  qui est une props appelé pour la soumission des données du formulaire */}
    </div>
  );
}
export default App;