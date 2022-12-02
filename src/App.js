import logo from './logo.svg';
import './App.css';
import Country from './Country';
import {HashRouter,Route,Routes } from 'react-router-dom';
import Iframeparent from './iframeparent';

function App() {
  return (
    <div className="App"  >
      
     <HashRouter>
     <Routes>
    
     <Route  path="/"    element={<Iframeparent/>}/>
      <Route path="/Country" element={<Country/>} />
        

     </Routes>
     </HashRouter>

    </div>
  );
}

export default App;
