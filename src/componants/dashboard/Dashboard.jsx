import { useContext, useEffect } from "react";
import { CartContext } from "../root/Root";
import modalImg from "../../assets/Group.png"
import { RxCross1 } from "react-icons/rx";
import { PiSlidersLight } from "react-icons/pi";
import { useState } from "react";
import { Helmet} from 'react-helmet-async';

const Dashboard = () => {

    const [isActive, setIsActive] = useState(true);
    const {cartItem, setCartItem,setPHistory,pHistory, wishItem, totalPrice, setTotalPrice } = useContext(CartContext);

    useEffect(() =>{
     const price =cartItem.reduce((sum,item)=>sum + item.price, 0);
     setTotalPrice(price);
    },[cartItem]);


    const handleIsActive = (status) =>{
        if(status === 'Cart'){
            setIsActive(true);
        } else{
          setIsActive(false);
        }
  
 }

   

    const handleSort= ()=>{
        const sorted = [...cartItem].sort((a , b)=> b.price - a.price);
        setCartItem(sorted);
    }



    const handlePurchase = () => {
     const modal = document.getElementById('my_modal');
     modal.showModal();
           


     const pDetails = {
         date: new Date().toLocaleString(),
         totalPrice: totalPrice,
     }

     setPHistory([...pHistory, pDetails]);
    };


    const closeModal = () => {
      const modal = document.getElementById('my_modal');
      modal.close(); 
      setCartItem([]);
  };
    
    return (
        <div>
            <Helmet>
        <title>Dashboard | Gadget Heaven </title>
           </Helmet>
            <div className="text-center py-6 bg-purple-500 text-white">
           <h3 className="text-3xl font-bold py-3" >Dashboard</h3>
           <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>

           <div className="py-6 space-x-4 font-bold">
           <button onClick={()=>handleIsActive("Cart")} className={`${isActive? " bg-white text-purple-500 rounded-3xl px-4 py-2" :  " border px-4 py-2  rounded-3xl"}` } >Cart</button>
           <button onClick={()=> handleIsActive("wish")} className={`${isActive? " bg-purple-500 border text-white rounded-3xl px-4 py-2" :  "text-purple-500 bg-white px-4 py-2  rounded-3xl"}` } >WishList</button>
           </div>
        </div>

          
          

          { isActive ?

          
          
            <div className=" w-11/12 m-auto">
            <div className="py-8 mt-6 flex justify-between">
            <h3 className="text-2xl font-bold">Cart</h3>
           
            
              <div className="flex items-center gap-2">

                <h3 className="text-xl font-bold">Total Price:$ {totalPrice} </h3>

              <button onClick={ handleSort} className="btn btn-outline text-lg text-purple-500 hover:border-none font-bold rounded-3xl hover:bg-purple-500 hover:text-white ">Sort by price <PiSlidersLight /> </button>
              <button onClick={handlePurchase} className="btn rounded-3xl btn-outline text-lg hover:border-purple-500 font-bold  bg-purple-500 hover:text-purple-500 text-white hover:bg-white"   disabled ={cartItem.length === 0}>Purchase</button>
              </div>
              </div>
            <div>
                {
                    
                    cartItem.map((item, index)=>(
                        <div key={index} className="flex p-6 items-center shadow-xl rounded-2xl gap-3">
                        <div>
                            <img src={item.product_image} className="w-52" alt="" />
                        </div>
                        
                        <div className="w-full">
                            <div className="flex justify-between py-3 ">
                                <h2 className="text-xl font-bold">{item.product_title}</h2>
                                <button className="ml-auto border-2 border-red-500 p-1 rounded-full">
                              <RxCross1 className="text-red-600 border-red-500 rounded-full" />
                            </button>
                            </div >
                            <p >{item.description}</p>
                            <p className="text-lg font-bold py-3">Price:${item.price}</p>
                        </div>
                         </div>
                    ))
                }
            </div>
            </div>
            
            :   <div className="w-11/12 m-auto">
                <h3 className="text-2xl font-bold py-8 mt-6">WishList</h3>
                {
                    wishItem.map((item, index)=>(
                        <div key={index} className="flex p-6 items-center shadow-xl rounded-2xl gap-3">
                        <div>
                            <img src={item.product_image} className="w-52" alt="" />
                        </div>
                        
                        <div className="w-full">
                            <div className="flex justify-between py-3 ">
                                <h2 className="text-xl font-bold">{item.product_title}</h2>
                                <button className="ml-auto border-2 border-red-500 p-1 rounded-full">
                              <RxCross1 className="text-red-600 border-red-500 rounded-full" />
                            </button>
                            </div >
                            <p >{item.description}</p>
                            <p className="text-lg font-bold py-3">Price:${item.price}</p>
                        </div>
                         </div>
                    ))
                }
            </div>

        }



            <div> 
                <dialog id="my_modal" className="modal modal-middle">
                  <div className="modal-box text-center">  
                    <img src={modalImg} alt="" className="mx-auto" />              
                    <h3 className="font-bold text-2xl py-4 ">Payment Successfully</h3>
                   
                    <p className="py-4 border-t">Thanks for purchasing <br />
                    Total: ${totalPrice}</p>
                      <form method="dialog">
                        <button className="btn w-full rounded-3xl  text-lg font-bold " onClick={closeModal}>Close</button>
                      </form>
                  </div>
                </dialog>
            </div>



        </div>
    );
};

export default Dashboard;