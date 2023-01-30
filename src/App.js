import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import BillingPage from './components/Billing/BillingPage';
import Home from './components/Home';
import Register from './components/Login/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='billingPage' element={<BillingPage></BillingPage>} ></Route>
        <Route path='register' element={<Register></Register>} ></Route>
        <Route path='login' element={<Login></Login>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
