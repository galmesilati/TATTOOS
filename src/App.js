import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
     {/* <div style={{ backgroundColor: 'black', minHeight: '100vh', overflowX: 'hidden' }}> */}
    <Header/>
    <Outlet />
    {/* </div> */}
    </>
  );
}

export default App;
