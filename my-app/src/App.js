import './App.css';
import Navbar from './components/Navbar';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Home from './routes/Home';

import { BrowserRouter, Route, Routes} from "react-router-dom";


const App=()=> {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Home /></>}/>
        {/* <Route index element={<><Home  /></>} /> */}
        <Route path="/home" element={<><Home  /></>} />
        <Route path="/signin" element={<SignIn   />} />
        <Route path="/signup" element={<SignUp />} />
        
      
    </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
