import React, { useContext, useEffect } from 'react';
import Categories from '../categories/Categories';
import Gadgets from '../gadget/Gadgets';
import { useLoaderData } from 'react-router-dom';
import { Helmet} from 'react-helmet-async';
import { CartContext } from '../root/Root';

const Home = () => {

    const categories = useLoaderData();
    const {setCategory} = useContext(CartContext);

    useEffect(()=>{
     setCategory("All Products");
    }, [setCategory])

    const categoryList = Array.isArray(categories) ? categories : [];
    
    return (
        <div className='bg-base-100 m-auto w-11/12'>
             <Helmet>
        <title>Home | Gadget Heaven </title>
           </Helmet>
           <div className='pt-32 sm:pt-40 md:pt-56 lg:pt-96'>
            <h2 className='py-10 text-center font-bold text-xl  md:text-2xl '>Explore Cutting-Edge Gadgets</h2>
            <div className='md:grid grid-cols-[1fr_5fr] gap-4 '>
                    <div className='bg-white shadow-xl p-4 max-h-96 rounded-xl'>
                       <Categories categories={categoryList}></Categories>
                   </div>
                  <Gadgets></Gadgets>
            </div>
            </div>
        </div>
    );
};

export default Home;