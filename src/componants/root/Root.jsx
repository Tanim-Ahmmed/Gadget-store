import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Footer from "../footer/Footer";
import { createContext, useState } from "react";
import { HelmetProvider } from 'react-helmet-async';


export const CartContext = createContext();
const Root = () => {

    const [category, setCategory]=useState("");
    const [totalPrice , setTotalPrice] = useState(0);
    const [cartItem, setCartItem] = useState([]);
    const [wishItem, setWishItem] = useState([]);
    const [pHistory, setPHistory] =useState([]);
    

    const addToCart = (item) => {
       setCartItem([ ...cartItem, item]);
    }

    const addWishList = (item) =>{
        setWishItem([...wishItem,item]);
        
    }
    return (
        <div className="m-auto max-w-screen-2xl">
            <HelmetProvider>

            <CartContext.Provider value={{pHistory,setPHistory, cartItem, setCartItem,totalPrice,setTotalPrice, addToCart,wishItem,setWishItem,addWishList, category,setCategory}}>

            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>

            </CartContext.Provider>
            </HelmetProvider>
        </div>
    );
};

export default Root;