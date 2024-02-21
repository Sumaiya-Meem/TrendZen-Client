import { Button, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';



const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure=useAxiosSecure()


    const handleAddProperty=(e)=>{

        e.preventDefault();

        const form = e.target;
        const name= form.name.value || "Not-Given"
        const type= form.type.value || "Not-Given"
        const image= form.image.value || "Not-Given"
        const price= form.price.value || "Not-Given"
        const rating= form.rating.value || "Not-Given"
        const brandName= form.brandName.value || "Not-Given"
        const details= form.details.value || "Not-Given"
        const userEmail= user.email || "Not-Given"
      

        const propertyInfo ={
            name,type,image,price,rating,brandName,details,userEmail
        }
        // console.log(propertyInfo)
        axiosSecure.post('/products',propertyInfo)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Property information add successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
            }
        })

    }
    return (
        <div>


            <form className="p-2 lg:p-6" onSubmit={handleAddProperty}>
                <div className='flex gap-2 my-2'>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Product Name" />
                        </div>
                        <TextInput type="text"  name="name" required shadow />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Type" />
                        </div>
                        <TextInput type="text" name="type" required shadow />
                    </div>
                </div>

                <div className='flex gap-2 my-2'>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Image" />
                        </div>
                        <TextInput type="text"  name="image" required shadow />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Price" />
                        </div>
                        <TextInput type="text" name="price" required shadow />
                    </div>
                </div>

                <div className='flex gap-2 my-2'>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Rating" />
                        </div>
                        <TextInput type="text"  name="rating"  shadow />
                    </div>
                    <div className='flex-1'>
                        <div className="mb-2 block">
                            <Label value="Brand Name" />
                        </div>
                        <TextInput type="text" name="brandName"  shadow />
                    </div>
                </div>
                <div className='mb-2'>
                        <div className="mb-2 block">
                            <Label value="Details" />
                        </div>
                        <TextInput type="text" name="details" readOnly shadow />
                    </div>
                
              <div className='flex justify-center'>
              <Button type="submit" className='w-[100px] bg-[#088178]'>Add</Button>
              </div>
            </form>


        </div>
    );
};


export default AddProduct;