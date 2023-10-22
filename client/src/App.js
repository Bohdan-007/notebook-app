// import { BrowserRouter as Router, Routes, Route, Outlet, NavLink, useParams } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import About from './pages/About/About';
import Notes from './pages/Notes/Notes';
import ToDo from './pages/ToDo/ToDo';
import NotFound from './pages/NotFound/NotFound';

import './App.scss';


const App = () => {

  return (
    <div className="App">
      <Router> 

        <Nav />

        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </Router>
    </div>
  );
};


export default App;