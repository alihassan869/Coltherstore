import './App.css';
import Home from './components/pages/Home';
import Detailpage from './components/pages/Detailpage';
import Checkout from './components/pages/Checkout';
import Successfull from './components/pages/Successfull';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route  exact path='/' element={<Home/>} />
         <Route  exact path='/Order/:Price' element={<Checkout/>} />
         <Route  exact path='/Successfull' element={<Successfull/>} />
         <Route  exact path='/Detailpage/:id' element={<Detailpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
