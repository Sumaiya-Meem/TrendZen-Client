import { Card } from "flowbite-react";
import useSummerProduct from "../../Hooks/useSummerProduct";
import { FaCartShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const NewArrival = () => {
    const [allProduct] = useSummerProduct();
    return (
        <div className="mt-5">
            <h1 className="text-[#088178] text-3xl text-center font-semibold">Latest Summer Collection</h1>
            <p className="text-[#201f1f38] text-center mb-6">Summer Collection Modern Design</p>
            <div className='grid grid-cols-3 gap-2 p-2'>
                {
                    allProduct.map(data =>

                        // eslint-disable-next-line react/jsx-key
                        <Card
                            className="h-[400px]"
                        >         
                            <img src={data.image} className='h-[200px] rounded-lg w-full' alt="" />
                            <h3 className='capitalize text-gray-400'>{data.brandName}</h3>
                            <h2 className="font-semibold text-xl">{data.name}</h2>
                            <p className="text-orange-300 flex flex-row gap-2"><FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </p>
                            
                            <div className="flex justify-between">
                                <p className="text-[#088178]">${data.price}</p>
                                <FaCartShopping />
                            </div>
                            
                               
                           

                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default NewArrival;