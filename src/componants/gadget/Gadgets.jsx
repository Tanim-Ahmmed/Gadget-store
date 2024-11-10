import { useContext, useEffect, useState } from "react";
import Gadget from "./Gadget";
import { CartContext } from "../root/Root";


const Gadgets = () => {
 
    const [gadget, setGadget] = useState([]);
    const {category}=useContext(CartContext);

    useEffect(()=>{
         fetch("/gadgetItems.json")
         .then(res => res.json())
         .then(data => setGadget(data));
         
    },[])
    
    const CategoryData = gadget.length > 0
        ? (category === "All Products" || category === ""
            ? gadget
            : gadget.filter(g => g.category === category))
        : [];
     
    return (
        <div className="w-full m-auto">

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" >

            {CategoryData.length >0 ? (           

                CategoryData.map((gadget)=><Gadget gadget={gadget} key={gadget.product_id}></Gadget>))
                
                : (
                  <p className="text-2xl text-purple-500 font-bold">No data found</p>
 
                )
            }
           </div>

        </div>
    );
};

export default Gadgets;