import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import axios from 'axios';
import { img_500,unavailable, unavailableLandscape} from '../../config/config';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./ContenModel.css";
import Gallery from "../Carousel/Carousel"
const style = {
  position: 'absolute',
  height:"80%",
  top:"10%",
  left:"5%",
right:"5%",
bottom:"5%",
  width: "90%",
  bgcolor: "#1a237e",
  border: "1px solid #282c34",
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({children, media_type,id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const[content, setContent] = React.useState();
const[video, setVideo] = React.useState();

  const fetchData = async() => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
    
  };

  const fetchVideo = async() => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setVideo(data.results[0]?.key);
    console.log(data);
  }
  React.useEffect(()=> {
fetchData();
fetchVideo();
  },[])

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        {content && (
          <Box sx={style}>
            <div className='contentModel'>
            <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className='ContentModel_about'>
<span className='ContentModel_title'>
{content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
</span>

{content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}
                  <span className="ContentModal__description">
                    {content.overview}
                  </span>
<div>
<Gallery media_type={media_type} id={id}/>
</div>
<div className='button'>
<Button style={{width:"100%"}}
             variant="contained"
                    startIcon={<YouTubeIcon/>}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                  </div>
                </div>
            </div>
          </Box>
        )}
        </Fade>
      </Modal>
    </>
  );
}
