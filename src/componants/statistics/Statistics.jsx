import { Helmet} from 'react-helmet-async';

const Statistics = () => {
    return (
        <div className="text-center  m-auto py-6 bg-purple-500 text-white">
           
           
           <h3 className="text-3xl font-bold py-3" >Statistics</h3>
           <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
       
           <Helmet>
        <title>Statistics | Gadget Heaven </title>
           </Helmet>
        </div>
    );
};

export default Statistics;