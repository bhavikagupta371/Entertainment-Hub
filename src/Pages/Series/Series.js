import axios from "axios"
import SingleContent from "../../Component/SingleContent/SingleContent"
import CustomPagination from "../../Component/Pagination/CustomPagination"
import { useEffect, useState } from "react";
import Genres from "../../Component/Genres";
import useGenre from "../../hooks/useGenre";
const Series =()=> {

    const [page , setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const[selectedGenres,setSelectedGenres] = useState([]);
    const [genres, setGenres]= useState([]);
    const genreForUrl=useGenre(selectedGenres);

    const fetchSeries = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page} &with_genres=${genreForUrl}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
        // console.log(data);
      };

      useEffect(() => {
        window.scroll(0, 0);
        fetchSeries();
        // eslint-disable-next-line
      }, [ page, genreForUrl]);

    return(
        <div>
<span className="pageTitle">TV series</span>
<Genres
type="movie"
selectedGenres={selectedGenres}
setSelectedGenres={setSelectedGenres}
 genres={genres}
  setGenres={setGenres}
  setPage={setPage}
/>
<div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              keys={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages >1 &&
      <CustomPagination setPage={setPage}  numOfPages={numOfPages} />}
        </div>
    )
}

export default Series