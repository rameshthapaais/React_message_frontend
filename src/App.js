import { Route, Routes } from 'react-router';
import './App.css';
import Nabbar from './Components/Navbar';
import ChatRoom from './Components/ChatRoom';
import Home from './Components/Home';
import NumberSumUp from './Components/NumberSumUp';



function App() {
  return (
    <div className="App">
      <Nabbar/>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/chatrooms" element={<ChatRoom/>} />
        <Route path="/sum_num" element={<NumberSumUp/>} />
      </Routes>         
      <br />
      
      <button className="btn btn-primary">Click me</button>
    </div>
  );
}

export default App;
