
import { Button, Label, TextInput} from "flowbite-react";

import axios from 'axios';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from "react-router-dom";


const UpdateProduct = () => {
    
    const data = useLoaderData()
    console.log(data);
    const navigate =useNavigate();


    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target


        const name= form.name.value || "Not-Given"
        const type= form.type.value || "Not-Given"
        const image= form.image.value || "Not-Given"
        const price= form.price.value || "Not-Given"
        const rating= form.rating.value || "Not-Given"
        const brandName= form.brandName.value || "Not-Given"
        const details= form.details.value || "Not-Given"
      

        const updateProductInfo ={
            name,type,image,price,rating,brandName,details
        }
        // console.log(updateFoodInfo)
    
    //    axios.put(`http://localhost:5000/products/${data._id}`,updateFoodInfo)
    axios.put(`http://localhost:5000/products/${data._id}`,updateProductInfo)
       .then(res=>{
        // console.log(res.data)
        if (res.data.modifiedCount>0) {
            Swal.fire(
                'Update  successfully',
                'success'
            );
            form.reset();
            navigate("/");
        }
       }
        )
    }
   

    return (
        <div className="my-10 p-4">
            <form className="p-2 lg:p-6" onSubmit={handleUpdateProduct}>
                <div className='flex gap-2 my-2'>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Product Name" />
                        </div>
                        <TextInput type="text" defaultValue={data.name}  name="name" required shadow />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Type" />
                        </div>
                        <TextInput type="text" defaultValue={data.type}  name="type" required shadow />
                    </div>
                </div>

                <div className='flex gap-2 my-2'>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Image" />
                        </div>
                        <TextInput type="text" defaultValue={data.image}  name="image" required shadow />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Price" />
                        </div>
                        <TextInput type="text" defaultValue={data.price}  name="price" required shadow />
                    </div>
                </div>

                <div className='flex gap-2 my-2'>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Rating" />
                        </div>
                        <TextInput type="text" defaultValue={data.rating}   name="rating"  shadow />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Brand Name" />
                        </div>
                        <TextInput type="text" defaultValue={data.brandName}  name="brandName"  shadow />
                    </div>
                </div>
                <div className='mb-2'>
                        <div className="mb-2 block">
                            <Label value="Details" />
                        </div>
                        <TextInput type="text" defaultValue={data.details}  name="details"  shadow />
                    </div>
                
              <div className='flex justify-center'>
              <Button type="submit" className='w-[100px] bg-[#088178]'>Update</Button>
              </div>
            </form>

        </div>
    );
};



export default UpdateProduct;