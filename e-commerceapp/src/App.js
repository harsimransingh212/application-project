import{BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from'./components/Home'
import ProductList from'./components/ProductList'
import ProductDetail from'./components/ProductDetail'
import Cart from'./components/Cart'
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Navigate to='/login'/>}></Route>*/Navigate component is basically redirecting the homepage to login page so that always login page appears*/
     <Route path='/' element={<Home/>}>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      </Route>
      <Route path='/productlist' element={<ProductList/>}></Route>
      <Route path='/productdetail' element={<ProductDetail/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      </Routes>

    </BrowserRouter>
    );
}

export default App;
