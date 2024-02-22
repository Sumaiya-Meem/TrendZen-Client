import { Button, Card } from "flowbite-react";

import { Link, useLoaderData, useNavigate } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
const DetailsProduct = () => {
    const product = useLoaderData();
    const {_id, name,price,image,type,details,brandName,rating} = product;
    const axiosSecure=useAxiosSecure();
    const {user}=useContext(AuthContext)
    const navigate =useNavigate();

    const renderStars = () => {
        return Array.from({ length: rating }).map((_, index) => (
          <FaStar key={index} className="text-orange-300" />
        ));
      };

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
            navigate("/");
        })
    }
    return (
        <div>
              <Card className="w-[600px] h-[430px] mx-auto" horizontal>

                <div className='flex gap-6'>
                    <div className='flex-1'>
                        <img src={image} alt="" className="h-[330px]  rounded-lg" />
                    </div>
                    <div className='flex-1 space-y-3'>
                        <h5 className="">{type}</h5>
                        <h1 className="font-semibold text-2xl">{name}</h1>
                        <h5>{brandName}</h5>
                        <p className="font-semibold text-xl">${price}.00</p>
                        <p className="flex gap-2">{renderStars()}</p>
                        <div className="flex flex-wrap gap-2 mt-5">
                            <Button onClick={handleCart}>
                               
                                Add To Cart
                            </Button>
                           
                        </div>
                        <h1 className="font-semibold">Product Details</h1>
                        <p>{details}</p>
                    </div>
                </div>
                <Link to={`/updateProduct/${_id}`}>
                <Button className="w-full">Update</Button>
            </Link>
            </Card>
        </div>
    );
};

export default DetailsProduct;