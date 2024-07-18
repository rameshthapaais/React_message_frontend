import { Route, Routes } from 'react-router';
import './App.css';
import Nabbar from './Components/Navbar';
import ChatRoom from './Components/ChatRoom';
import Home from './Components/Home';
import NumberSumUp from './Components/NumberSumUp';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';




function App() {
  return (
    <div className="App">
      <Nabbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatrooms" element={<ChatRoom />} />
        <Route path="/sum_num" element={<NumberSumUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={


          <Dashboard />


        } />

        <Route path='/register' element={<Register />} />
      </Routes>
      <br />

      <br />


    </div>
  );
}

export default App;
