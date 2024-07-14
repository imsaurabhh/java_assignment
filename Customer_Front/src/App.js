import './App.css';
import Header from './pages/header/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Nomatch from './pages/no-match/Nomatch'; 
import PostUser from './pages/customer/PostUser';
import UpdateUser from './pages/customer/UpdateUser';
import Login from './pages/customer/Login'

function App() {
  return (
      <>
        <Header/>
        <Routes>
        <Route path='/customers' element={<Dashboard/>} />
        <Route path='*' element={<Nomatch/>} />
        <Route path='/customer' element={<PostUser/>} />
        <Route path='/customer/:id' element={<UpdateUser/>} />
        <Route path='/' element={<Login/>} />
        </Routes>
      </>
  );
}

export default App;
