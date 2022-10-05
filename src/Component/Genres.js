import axios from "axios";
import { useEffect } from "react";
import {Chip} from "@mui/material";

const Genres = ({ type, selectedGenres, setSelectedGenres, genres, setGenres, setPage })=>
{


    function handleAddGenre(clickedGenre)
    {
        selectedGenres.push(clickedGenre)
        setGenres(genres.filter((tempGenre)=> tempGenre.id !== clickedGenre.id))
    }

    function removeSelectedGenre(clickedSelectedGenre)
    {

        setSelectedGenres(selectedGenres.filter((tempGenre)=> tempGenre.id !== clickedSelectedGenre.id))
        genres.push(clickedSelectedGenre)

    }


    const fetchGenres=async() =>
    {
        const gatheredData=  await axios.get( `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US` );
        setGenres(gatheredData.data.genres);
    };

    useEffect(()=> { fetchGenres(); },[]);

    return(
        <div style={{padding:"6px 0"}}>

            {
                selectedGenres.map((singleSelectedGenre)=>{
                    return(
                        <Chip style={{background: "gold", margin: 4}} label={singleSelectedGenre.name} key={singleSelectedGenre.id} clickable onDelete={()=>{removeSelectedGenre(singleSelectedGenre)}}/>
                    )
                })
            }

            {
                genres.map((singleGenre)=>{
                    return(
                        <Chip style={{background: "white", margin: 4}} label={singleGenre.name} clickable key={singleGenre.id} onClick={()=>{handleAddGenre(singleGenre)}} />
                    )
                })
            }

        </div>
    )
};

export default Genres;

