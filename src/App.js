import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Header from './ShearedPages/Header/Header';
import NotFound from './ShearedPages/NotFound/NotFound';



function App() {
  return (
    <div className="">
      <Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/protfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Header>

    </div>
  );
}

export default App;
