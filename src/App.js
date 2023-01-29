import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import BillingPage from './components/BillingPage';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='billingPage' element={<BillingPage></BillingPage>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
