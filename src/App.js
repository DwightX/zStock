import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Explore from "./pages/Explore"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Forgotpassword from "./pages/Forgotpassword"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Explore/>} />
      <Route path='/offers' element={<Offers/>} />
      <Route path='/profile' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile/>} />
      </Route>
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/sign-up' element={<Signup/>} />
      <Route path='/forgot-password' element={<Forgotpassword/>} />
      </Routes>
      <Navbar />
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
