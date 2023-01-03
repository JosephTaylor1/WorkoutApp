import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import AddAWorkout from './pages/AddAWorkout';
import WorkoutHistory from './pages/WorkoutHistory';

function App() {
  return (
    <Router forceRefresh={true} >
      <Navbar />
      <Routes>
        <Route path='/' exact component={<Home/>} />
        <Route path='/addAWorkout' element={<AddAWorkout/>} />
        <Route path='/workoutHistory' element={<WorkoutHistory/>} />
      </Routes>
    </Router>
  );
};

export default App;