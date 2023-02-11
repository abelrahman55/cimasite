import './App.css';
import { Routes,Route } from 'react-router-dom';
import {Header}from './components/ExportComp';
import WatchList from './components/WatchList/WatchList';
import Add from './components/ADD/Add';
import Watched from './components/Watched/Watched';
import Contextapi from './components/context/Contextapi';
import Loved from './components/Loved/Loved';
import Rejected from './components/Rejected/Rejected';
function App() {
  return (
    <Contextapi>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<WatchList/>}/>
          <Route path='/watched' element={<Watched/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/loved' element={<Loved/>}/>
          <Route path='/rejected' element={<Rejected/>}/>
        </Routes>
      </div>
    </Contextapi>


  );
}

export default App;
