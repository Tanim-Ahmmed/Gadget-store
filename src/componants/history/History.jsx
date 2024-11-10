import { RiFileHistoryFill } from "react-icons/ri";
import { Helmet} from 'react-helmet-async';
import { useContext } from "react";
import { CartContext } from "../root/Root";

const History = () => {
    const {pHistory} = useContext(CartContext);
    return (
        <div className="text-center m-auto">
             <Helmet>
        <title>History | Gadget Heaven </title>
           </Helmet>
            <div className="text-center py-6 bg-purple-500 text-white">
           <h3 className="text-3xl font-bold py-3" >Purchase history</h3>
           <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
        </div>

        <div className="w-11/12 m-auto mt-6">
            { pHistory.length === 0 ? 
            <p className="text-2xl font-bold text-purple-500">Nothing purchase yet</p> 

            : 
          pHistory.map((purchase, i) => (
          
              <div className="text-purple-500 border border-purple-500 rounded-3xl py-6">
            <p key={i} className="text-xl font-bold ">

            <button><RiFileHistoryFill /></button> Total Purchase price: ${purchase.totalPrice}
            </p>
               <p className="py-2">{purchase.date}</p>
              </div>
           
          )) 
            }
        </div>
        </div>
    );
};

export default History;