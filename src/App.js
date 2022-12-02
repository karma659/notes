import logo from './logo.svg';
import './App.css';
import Country from './Country';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import Iframeparent from './iframeparent';

function App() {
  return (
    <div className="App"  >
      
     <BrowserRouter>
     <Routes>
    
     <Route  path="/"    element={<Iframeparent/>}/>
      <Route path="/Country" element={<Country/>} />
        

     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
