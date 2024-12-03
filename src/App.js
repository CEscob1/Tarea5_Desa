import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from './HomeScreen.jsx';
import BirdsScreen from './BirdsScreen.jsx';

function App(){
  return (
    <Router>
      <Routes>
        <Route path= '/' element={<HomeScreen/>}/>
        <Route path='/birds' element={<BirdsScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;