
import './App.css' 
import axios from 'axios'

import {Routes, Route} from 'react-router-dom'  // ✅ Correct

import Signup from './Signup'   // ✅ Correct
import VerifyOtp from './VerifyOtp'


function App() {
  

  return (
    <>   

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/verify-otp/:userId" element={<VerifyOtp />} />
      </Routes>


                  








    </>
  )
}

export default App
