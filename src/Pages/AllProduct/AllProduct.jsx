import { Button, Card } from "flowbite-react";
import useProduct from "../../Hooks/useProduct";
import { Link } from "react-router-dom";
const AllProduct = () => {
    const [products] = useProduct();
    return (
        <div className="mt-5">
            <h1 className="text-[#088178] text-3xl text-center font-semibold">Featured Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2 p-2'>
                {
                    products.map(data =>

                        // eslint-disable-next-line react/jsx-key
                        <Card
                            className="h-[400px]"
                        >         
                            <img src={data.image} className='h-[200px] rounded-lg w-full' alt="" />
                            <h3 className='capitalize text-gray-400'>{data.brandName}</h3>
                            <h2 className="font-semibold text-xl">{data.name}</h2>
                            <div className="flex justify-center">
                            <Link to={`/detailProduct/${data._id}`}>
                            <Button pill>Details</Button>
                                </Link>
                                </div>
                           {/* <div className="flex justify-between">
                                <p className="text-[#088178] font-semibold">${data.price}</p>
                                <div className="bg-[#44cdc4] p-2 rounded-[50%] text-white text-xl"><FaCartShopping /></div>
                            </div> */}
                            
                               
                           

                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default AllProduct;