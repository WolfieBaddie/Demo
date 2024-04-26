
import {Routes, Route} from 'react-router-dom';

import './App.css';
import FooterComponent from './components/footer/footer';
import HeaderComponent, {title} from './components/header/header';
import Home from './components/home';
import Contact from './components/contact';
import Product from './components/products';
import ProductDetail from './components/productdetail';
import FormEvent from './components/header/FormEvent';
import FormAdmin from './components/Form';
function App() {
  return (
    <div className="App">
    {/*   <HeaderComponent />
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/products" element={<Product/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/product:/id" element={<ProductDetail/>}/>
      </Routes>
      <FormEvent/>
      <FooterComponent /> */}
      <FormAdmin></FormAdmin>
      <h1>{title}</h1>
    </div>    
  );
}













export default App;
