import React from 'react';
import { HashRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';

import MainPage from "./Components/MainPage"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<MainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
