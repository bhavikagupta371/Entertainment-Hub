import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import SimpleBottomNavigation from './Component/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';



function App() {
  return(
    <>
        <Header/>
        <div className='app'>
     <Routes>
         <Route path='/' element={<Trending/>} exact/>
         <Route path='/movies' element={<Movies/>}/>
         <Route path='/series' element={<Series/>}/>
         <Route path='/search' element={<Search/>}/>
      </Routes> 
 </div>
        <SimpleBottomNavigation/>
    </>
  );
}

export default App;
