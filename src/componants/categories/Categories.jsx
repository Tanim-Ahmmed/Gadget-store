import { useContext } from "react";
import { CartContext } from "../root/Root";
import {Link} from "react-router-dom";


const Categories = ({categories}) => {
const { setCategory}=useContext(CartContext);
    return (
        <div className="flex flex-col space-y-4 ">

           {
            categories.map(category => <Link   to={`/?category=${(category.category)}`}  onClick={()=>setCategory(category.category)} key={category.id}

             className={ `btn btn-xs sm:btn-sm md:btn-md lg:btn-md rounded-3xl `}>
                
            {category.category}</Link> )
            
           }
             
        </div>
    );
};

export default Categories;