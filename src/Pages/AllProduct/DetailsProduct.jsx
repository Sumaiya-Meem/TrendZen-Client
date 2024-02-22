import { Button, Card } from "flowbite-react";
import { FaStairs } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
const DetailsProduct = () => {
    const product = useLoaderData();
    const { name,price,image,type,details,brandName} = product;
    const axiosSecure=useAxiosSecure();
    const {user}=useContext(AuthContext)


    const handleCart=()=>{
        const cartData = {
            image: image,
            name:name,
            price:price,
            userEmail:user.email
        };

        console.log(cartData );
       axiosSecure.post('/myCart',cartData)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Add the product in cart",
                  showConfirmButton: false,
                  timer: 1500
                });
            }
        })
    }
    return (
        <div>
              <Card className="w-[600px] h-[400px] mx-auto" horizontal>

                <div className='flex gap-6'>
                    <div className='flex-1'>
                        <img src={image} alt="" className="h-[330px]  rounded-lg" />
                    </div>
                    <div className='flex-1 space-y-3'>
                        <h5 className="">{type}</h5>
                        <h1 className="font-semibold text-2xl">{name}</h1>
                        <h5>{brandName}</h5>
                        <p className="font-semibold text-xl">${price}.00</p>
                        <p >< FaStar className="text-orange-300" /></p>
                        <div className="flex flex-wrap gap-2 mt-5">
                            <Button onClick={handleCart}>
                               
                                Add To Cart
                            </Button>
                           
                        </div>
                        <h1 className="font-semibold">Product Details</h1>
                        <p>{details}</p>
                    </div>
                </div>
                <Button>Update</Button>
            </Card>
        </div>
    );
};

export default DetailsProduct;