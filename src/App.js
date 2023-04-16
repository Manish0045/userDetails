
import './App.css';
import Home from './components/Home';
import Navbar from './components/navbar';
import User from './components/userDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User url={"https://reqres.in/api/users?page=1"} />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
