import React from 'react';
import LandPage from './landing_page/LandPage'; // Adjust import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from  './Pages/Login';
import { Logout } from './Pages/Logout';
import { UserDashboard } from './user-pages/UserDashboard';
import NutritionTracker from './user-pages/NutritionTracker';
import ExerciseTracking from './user-pages/ExerciseTracking';
import MentalHealth from './user-pages/MentalHealth';
import Meditation from './user-pages/mental_health/Meditation';
import Exercise from './exercise/Exercise';
// import Uploadexercises from './exercise/UploadExercises';
// import MeditationSubPages from './Meditation-Pages/MeditationSubPages';
// import GratitudeMeditation from './Meditation-Pages/GratitudeMeditation';
import VisualMeditation from './Meditation-Pages/VisualMeditation';
import Easier_to_start from './Meditation-Pages/Easier_to_start';
import Focus_and_Clarity from './Meditation-Pages/Focus_and_Clarity';
import Improved_Emotional_Wellbeing from './Meditation-Pages/Improved_Emotional_Wellbeing';
import Increased_Self_Awareness from './Meditation-Pages/Increased_Self_Awareness';
import Expert_Guidance from './Meditation-Pages/Expert_Guidance';
import Body_scan_meditation from './Meditation-Pages/Body_scan_meditation';
import Gratitude_meditation from './Meditation-Pages/Gratitude_meditation';



const LandPageWrapper = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandPage/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/user' element = {<UserDashboard/>} />
            <Route path='/user/nutrients' element = {<NutritionTracker/>} />
            <Route path='/user/exercise-tracking' element = {<ExerciseTracking/>} />
            <Route path='/user/mental-health' element = {<MentalHealth/>} />
            <Route path='/user/mental-health/meditation' element = {<Meditation/>} />
            <Route path='/user/exercises' element = {<Exercise/>} />
            {/* <Route path='/user/exercises-form' element = {<Uploadexercises/>} /> */}
            {/* <Route path='/user/mental-health/meditation/gratitude-meditation' element = {<GratitudeMeditation/>} /> */}
            <Route path='/user/mental-health/meditation/visual-meditation' element = {<VisualMeditation/>} />
            <Route path='/src/Meditation-Pages/Easier_to_start' element = {<Easier_to_start/>} />
            <Route path='/src/Meditation-Pages/Focus_and_Clarity' element = {<Focus_and_Clarity/>} />
            <Route path='/src/Meditation-Pages/Improved_Emotional_Wellbeing' element = {<Improved_Emotional_Wellbeing/>} />
            <Route path='/src/Meditation-Pages/Increased_Self_Awareness' element = {<Increased_Self_Awareness/>} />
            <Route path='/src/Meditation-Pages/Expert_Guidance' element = {<Expert_Guidance/>} />
            <Route path='/src/Meditation-Pages/Body_scan_meditation' element = {<Body_scan_meditation/>} />
            <Route path='/src/Meditation-Pages/Gratitude_meditation' element = {<Gratitude_meditation/>} />

          </Routes>
      </BrowserRouter>
        
    </>
  ); 
}





export default LandPageWrapper;

