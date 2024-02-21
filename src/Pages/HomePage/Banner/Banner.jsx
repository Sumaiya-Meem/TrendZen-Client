import img from "../../../assets/hero4.png";
import buttonimg from "../../../assets/button.png";
const Banner = () => {
  const banner = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "top 25% right 0",
    width: "100%",
    height: "100vh",
  };
 
  return (
    <div className="flex justify-center items-center" style={banner}>
      <div className=" mt-28 ml-4">
        <h1 className="text-[25px]">Elevate Your Style</h1>
        <h2 className="text-5xl text-[#088178]">
          Discover Timeless Fashion <br />
          <p className="text-[#088178]">At TrendZen</p>
        </h2>

        <p className="">Save more with coupens & up to 50% off!</p>
      
        <button
    className="mt-4 font-semibold"
    style={{
        backgroundImage: `url(${buttonimg})`,
        backgroundRepeat: 'no-repeat',
        border: '0',
        backgroundColor: 'transparent',
        color: '#008178',
        padding: '10px 80px 10px 65px',
    }}
>
    Shop Now
</button>
</div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Banner;
