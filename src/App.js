import logo from './logo.svg';
import './App.css';
import { Router, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './components/Home';
import LogInForm from './components/logInForm';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn)
  return (
    <>
    <Nav></Nav>
    {isLoggedIn ?
    <Home></Home>
    :
    <LogInForm></LogInForm>
    }
    </>
  );
}

export default App;
