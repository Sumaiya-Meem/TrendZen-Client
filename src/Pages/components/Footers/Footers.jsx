import { Button, Footer } from "flowbite-react";
import { FaOpencart } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
const Footers = () => {
  return (
    <div className="mt-10 ">
      <Footer container>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="mt-10">
              <FaOpencart className="text-4xl ml-6 text-[#088178]"></FaOpencart>
              <span className=" self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                TrendZen
              </span>
            </div>
            <div className="flex gap-10 sm:mt-2  ">
              <div>
                <Footer.Title title="Address" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    28 , Islam Centre, Mirpur, Dhaka
                  </Footer.Link>
                  <Footer.Link href="#">Email: trendZen@gmail.com</Footer.Link>
                  <Footer.Link href="#">Helpline: 0123291315</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">About Us</Footer.Link>
                  <Footer.Link href="#">Delivery Information</Footer.Link>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                  <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="My Account" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                  Sign In
                  </Footer.Link>
                  <Footer.Link href="#">View Cart</Footer.Link>
                  <Footer.Link href="#">Help</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Install App" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                  From App Store or Google Play
                  <Button color="light" className="mt-3">
        <FaGooglePlay className="mr-2 h-5 w-5 text-[#088178]" />
       Google Play
      </Button>
                  <Button color="light" className="mt-3">
        <IoLogoApple className="mr-2 h-5 w-5 text-[#1a1a1a]" />
       App tore
      </Button>
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="TrendZen™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center"></div>
          </div>
        </div>
      </Footer>
      <div>
        

    
      </div>
    </div>
  );
};

export default Footers;
