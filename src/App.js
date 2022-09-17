import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav/MainNav';
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Container } from '@mui/system';
import Trending from './Pages/Trending/Trending';
import Search from './Pages/Search/Search';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import MovieDetail from './Pages/MovieDetail/MovieDetail';

function App() {
  return (
    <BrowserRouter>
    
    <Header />
    <SimpleBottomNavigation />
    <div className='app'>
      <Container>
      <Routes>
      <Route path="/" element={<Trending />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="movie/:id" element={<MovieDetail />}/>
      <Route path="/series" element={<Series />}/>
      <Route path="/search" element={<Search />}/>
      </Routes>
      </Container>
    </div>
    
    
    
    </BrowserRouter>
      
    
  );
}

export default App;
