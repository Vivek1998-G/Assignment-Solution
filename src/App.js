import logo from './logo.svg';
import './App.css';
import { User } from './components/user';
import Authentication from './components/Auth';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
    <div className="App">
  <Routes>  <Route exact path="/" element={<Authentication />} /></Routes>
     <Routes>  <Route exact path="/User" element={<User/>} /></Routes>
     </div></Router>
   
    </>
  );
}

export default App;
//979038724559-u96r45qjsqfe3ia0c65pcpu52mvo0l66.apps.googleusercontent.com --client ID