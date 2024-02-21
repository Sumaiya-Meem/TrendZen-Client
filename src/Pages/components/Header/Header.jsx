import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
const Header = () => {
    return (
        <div>
        


    <Navbar fluid rounded>
      <Navbar.Brand href="/">
          < FaOpencart  className='text-3xl mr-2 text-[#088178]'></FaOpencart>
        {/* <img src="" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TrendZen</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
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