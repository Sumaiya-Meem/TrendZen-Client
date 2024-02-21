import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { AuthContext } from '../../../Context/AuthProvider';
import { useContext } from 'react';
import { IoIosLogOut } from "react-icons/io";
const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogout =()=>{
    console.log("logout")
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err))
}
    return (
        <div>

    <Navbar fluid rounded>
      <Navbar.Brand href="/">
          < FaOpencart  className='text-3xl mr-2 text-[#088178]'></FaOpencart>
        {/* <img src="" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TrendZen</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
                    {
                        user ? <>
                        <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img={user?.photoURL} rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{ user?.displayName}</span>
                           
                        </Dropdown.Header>
                        <Dropdown.Item>
                        <span className="block truncate text-sm font-medium">{user?.email}</span>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                        <Button color="" className=''  onClick={handleLogout}>
                        <span className='mr-2 text-xl'><IoIosLogOut></IoIosLogOut></span> LogOut
                    </Button>
                        </Dropdown.Item>
                    </Dropdown> 
                        </>
                        :
                        <>
                       <div className='flex items-center'>
                       <Link to="/register">
                    <Button color="" className='mr-2' pill >
                        SignUp
                    </Button></Link>
                    <Link to="/login">
                    <Button color="" className='p-2 font-semibold' pill>
                        Login
                    </Button>
                    </Link>
                       </div>
                        </>
                    }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
      <Navbar.Link active>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white md:text-[#088179e2]" : ""
              }
            >
              Home
            </NavLink>
            
          </Navbar.Link> 
          <Navbar.Link>
            <NavLink
              to="/addProduct"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white md:text-[#088179e2]" : ""
              }
            >
              Add Product
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to="/mycart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white md:text-[#088179e2]" : ""
              }
            >
              <FaCartPlus  className='text-xl text-[#088178]'/>
            </NavLink>
          </Navbar.Link>
          
          
      </Navbar.Collapse>
    </Navbar>

        </div>
    );
};

export default Header;