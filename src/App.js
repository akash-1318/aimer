import './App.css';
import {Enter} from "./pages/enter"
import { Aimer } from './pages/aimer';
import { useEffect, useState } from 'react';
function App() {
  const [userName, getUserName] = useState("")
  useEffect(()=>{
    getUserName(localStorage.getItem("username"))
  },[userName])
  return (
    <div className="App">
      {userName ? <Aimer/> : <Enter/>}
    </div>
  );
}

export default App;
