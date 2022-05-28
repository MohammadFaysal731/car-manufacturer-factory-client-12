import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import Header from './ShearedPages/Header/Header';
import NotFound from './ShearedPages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './ShearedPages/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import Footer from './ShearedPages/Footer/Footer';
import Payment from './Pages/Dashboard/Payment/Payment';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllProducts from './Pages/Dashboard/ManageAllProducts/ManageAllProducts';




function App() {
  return (
    <div className="">
      <Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/part/:id' element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/protfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='/registration' element={<Registration></Registration>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
            <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
            <Route path='addreview' element={<AddReview></AddReview>}></Route>
            <Route path='manageallorder' element={<ManageAllOrders></ManageAllOrders>}></Route>
            <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
            <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
            <Route path='manageallproducts' element={<ManageAllProducts></ManageAllProducts>}></Route>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Header>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
