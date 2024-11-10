
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CartContext } from "../root/Root";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GadgetDetail = () => {
  const { gadgetId } = useParams();

  const data = useLoaderData();

  const gadget =Array.isArray(data) ? data.find((gadget) => gadget.product_id === gadgetId): null ;


  if (!gadget) {
    return <div className="text-xl w-11/12 m-auto font-bold text-purple-500">Gadget not found</div>;
  }
  

  const {
    product_image,
    product_title,
    price,
    description,
    rating,
    specification: [item1, item2, item3, item4],
  } = gadget;
  


 

  const {addToCart,addWishList} = useContext(CartContext);

  const handleCart = () =>{
    addToCart(gadget);
    toast.success(`${gadget.product_title} added to Cart`, {
      position: "top-center",
      autoClose: 3000,
    });
  }

  const hanleWishList =() =>{
    addWishList(gadget);

    toast.success(`${gadget.product_title} added to Wish List`, {
      position: "top-center",
      autoClose: 3000,
    });
  }

  return ( 
    <div className="pb-72 sm:pb-60 md:pb-32 lg:pb-0">
    <div className="relative border-2 w-11/12 m-auto mb-96 bg-purple-500  pb-36 sm:pb-40 md:pb-56 lg:pb-64">
     

     
      <div className="text-center text-white py-6">
          <h1 className="py-6 font-bold text-3xl ">Product Details</h1>
          <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
      </div>
      <div className=" absolute  transform -translate-x-1/2 bg-white left-1/2  shadow-xl rounded-xl w-10/12 p-2">
        <div className="hero-content flex-col lg:flex-row  gap-10">
          <img src={product_image} className="max-w-sm rounded-lg w-full h-full object-cover shadow-2xl " />
          <div>
            <h1 className="text-xl font-bold">{product_title}</h1>
            <p className="font-semibold py-3 ">price:${price}</p>
            <button className="btn btn-sm border-emerald-500 bg-emerald-100 hover:border-emerald-500 hover:bg-emerald-100 rounded-3xl">In Stock</button>
            <p className="py-3">{description}</p>
            <h2 className="font-bold py-3">Specification:</h2>
            <ul>
              <li>1. {item1}</li>
              <li>2. {item2}</li>
              <li>3. {item3}</li>
              <li>4. {item4}</li>
            </ul>
            <h2 className="font-bold py-3 ">Rating</h2>
            <div className="flex">
              <div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500 "
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                    
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-green-500"
                  />
                </div>
              </div>
              <p className="p-1 bg-gray-100 rounded-full text-center ml-3">{rating}</p>
            </div>

            <div className="py-3">
            <button onClick={handleCart} className="btn text-lg bg-purple-500 rounded-full">Add To Card  <IoCartOutline /> </button>
            <button  onClick={hanleWishList} className="btn rounded-full ml-3 bg-white text-lg"> <FaRegHeart /></button>
           
            </div>

          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
    </div>
  );
};

export default GadgetDetail;
