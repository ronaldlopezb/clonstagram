import {useState} from 'react'
import './App.css';
import Dashboard from './Pages/dashboard/Dashboard';
import Login from './Pages/login/Login'

function App() {
  //simulador login
  const [usuarioLogeado, setUsuarioLogeado] = useState(false);
  
  return (
    <>
      {
        usuarioLogeado ? (
          <Dashboard/>
        ) : (
          <Login/>
        )
      }
    </>
  );
}

export default App;
