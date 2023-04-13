import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signUp/signUp';
import SignIn from './pages/signIn/SignIn'

function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              {/* <Route path="/home" element={<div><Home /></div>} /> */}
              
              {/* signUp  */}
              <Route path="/signup" element={<SignUp />} />

              {/* signIn  */}
              <Route path="/signin" element={<SignIn />} />


              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
