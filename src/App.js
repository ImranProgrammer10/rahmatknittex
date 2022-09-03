import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/shared/Header/Header';
import Home from './components/home/Home/Home';
import Banner from './components/shared/Header/home/Banner/Banner';
import Footer from './components/shared/Footer/Footer';
import Profile from './components/Profile/Profile';
import Design from './components/Design/Design';
import Factory from './components/Factory/Factory';
import Product from './components/Products/Product';
import ContactUs from './components/ContactUs/ContactUs';
 
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header></Header>
      <Banner></Banner>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/design" element={<Design />} />
         <Route path="/factory" element={<Factory />} />
           {/* <Route path="/quality" element={<Quality />} /> */}
      
         <Route path="/products" element={<Product />} />
        {/* <Route path="/sidebar" element={<Sidebar />} />      */}
        {/* <Route path="/wardrobe" element={<Wardrobe />} /> */}
        {/* <Route path="/register" element={<Register
         />} /> */}
        {/* <Route path="/home" element={<Home />} />
        <Route path="*" element={<Notfound />} />   */}
         <Route path="/contactus" element={<ContactUs
         />} />
         
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </div>
);
}

export default App;
