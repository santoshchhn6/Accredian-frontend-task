import { padding, width } from "../style";
import hero from "../assets/images/hero.png";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setShowModal } from "../redux/appSlice";

const Hero = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={`${padding} py-[3vw] min-[1360px]:py-[77px] flex justify-center`}
    >
      <div
        className={`flex justify-center bg-[#EEF5FF] rounded-2xl min-[1360px]:rounded-[29px] ${width} aspect-[1360/692] shadow-['0px 7px 29px 0px rgba(100, 100, 111, 0.2)'] overflow-hidden`}
      >
        <div className="flex flex-col justify-center pl-3 min-[1360px]-[pl-0] min-[1360px]:mt-[127px] min-[1360px]:ml-[45px] text-[#1A202C] ">
          <p className="font-bold text-[5vw] min-[1360px]:text-[88px] leading-[5vw] min-[1360px]:leading-[90px]">
            Let's Learn & Earn
          </p>
          <p className="text-[3vw] min-[1360px]:text-[40px] mt-10px min-[1360px]:mt-[37px] my-[3vw] min-[1360px]:mb-[61px] leading-4 sm:leading-none">
            Get a chance to win upto{" "}
            <span className="font-bold min-[1360px]:text-[54px] text-[#1A73E8]">
              Rs. 15,000
            </span>
          </p>
          <Button
            className="w-fit mb-20"
            onClick={() => {
              console.log("clicked");
              dispatch(setShowModal(true));
            }}
          >
            Refer Now
          </Button>
        </div>
        <img src={hero} alt="" className="md:mr-[35px] -mb-[33px] " />
      </div>
    </div>
  );
};

export default Hero;
