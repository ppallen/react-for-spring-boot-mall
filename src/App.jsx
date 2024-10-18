import 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login.jsx'; // 引入登入組件
import Register from './Register/Register.jsx'
import Shop from './Shop/Shop.jsx'
import Cart from './Cart/Cart.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 設置登入頁為進入點 */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
