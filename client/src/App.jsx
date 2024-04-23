import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './pages/Login';
import SigninPage from './pages/Signup';
import Appointment from './pages/Appointment';
import HomePage from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign' element={<SigninPage/>}/>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
