// libraries
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

// CSS
import './App.css';

// Views
import Top from './views/Top';
import SignUp from './views/SignUp';

// Components
import MainHeader from './components/MainHeader';

// Main Page
function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route exact path='/' element={<Top />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
