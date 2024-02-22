import { MdDeleteForever } from "react-icons/md";
import useCart from "../../Hooks/useCart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
const Mycart = () => {
    const {user} = useContext(AuthContext)
    const [cart]=useCart();
    const [myCartProduct,setMyCartProduct]=useState([])
  useEffect(()=>{
    const product = cart.filter(data => data.userEmail === user.email);
    setMyCartProduct(product)
  },[cart,user.email])

    return (
        <div>
       <div>
        <table className="w-full">
            <thead className="border-[1px] border-[#e2e9e1] border-solid border-x-0">
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
            {
                myCartProduct.map(data =>
                    // eslint-disable-next-line react/jsx-key
                    <tr>
                        <td>
                        <MdDeleteForever className="text-2xl bg-red-600 text-white rounded-sm " />
                        </td>
                        <td>
                           <img src={data.image} alt=""  className="w-[60px]"/>
                        </td>
                        <td>
                            {data.name}
                        </td>
                        <td>
                            ${data.price}
                        </td>
                    </tr>)
            }
            </tbody>
        </table>
       </div>
        </div>
    );
};

export default Mycart;