
import { Link } from "react-router-dom";



const Gadget = ({gadget}) => {

  const {price, product_id,product_image, product_title} = gadget ;
    return (
        <div>
           
        <div className="card card-compact bg-base-100 rounded-xl  shadow-xl">
    <img
      src={product_image}
      className="h-full  object-cover rounded-xl m-4"
      alt={product_title} />
      
       <div className="card-body text-center">
       <h2 className="text-xl font-bold">{product_title}</h2>
      <p className="text-lg text-gray-600">Price :${price}</p>
      <div className="card-actions justify-center">
        <Link to={`/gadget/${product_id}`}>
      <button className="btn btn-outline text-purple-500 hover:border-none font-bold rounded-xl hover:bg-purple-500 hover:text-white">View Details</button>
        </Link>
    </div>
   </div>
   </div>


        </div>
    );
};

export default Gadget;