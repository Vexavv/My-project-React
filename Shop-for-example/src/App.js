import React from "react";
import './App.scss';
import {Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout/Loyout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import OurProduct from "./pages/OurPtoduct/OurProduct";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites"
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import BuyProduct from "./pages/BuyProduct/BuyProduct";
import Reviews from "./pages/Reviews/Reviews";
import Example from "./pages/Example/Example"

function App() {


    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="product" element={<OurProduct />}/>
                    <Route path="reviews" element={<Reviews/>}/>
                    <Route path="example" element={<Example/>}/>
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
