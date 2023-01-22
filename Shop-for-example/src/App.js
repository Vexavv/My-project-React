import React from "react";
import './App.scss';
import {Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import OurProduct from "./pages/OurPtoduct";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites"
import PageNotFound from "./pages/PageNotFound";
import BuyProduct from "./pages/BuyProduct";
import Reviews from "./pages/Reviews";


function App() {


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="product" element={<OurProduct />}/>
                    <Route path="reviews" element={<Reviews/>}/>
                    <Route path="cart" element={<Cart />}/>
                    <Route path="buy" element={<BuyProduct/>} />
                    <Route path="favorites" element={<Favorites />}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
