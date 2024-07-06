import Button from "./Button";
import r1 from "../assets/images/r1.svg";
import r2 from "../assets/images/r2.svg";
import r3 from "../assets/images/r3.svg";
import { width } from "../style";
import { useDispatch } from "react-redux";
import { setShowModal } from "../redux/appSlice";

const Refer = () => {
  const dispatch = useDispatch();
  const info = [
    {
      title: "Submit referrals easily via our website’s referral section.",
      img: r1,
    },
    {
      title: "Earn rewards once your referral joins an Accredian program.",
      img: r2,
    },
    {
      title: "Both parties receive a bonus 30 days after program enrollment.",
      img: r3,
    },
  ];
  return (
    <div className="flex justify-center bg-[#EEF5FF]">
      <div className={`${width} flex flex-col items-center `}>
        <p className="font-semibold text-[27.66px] mt-[23px] mb-[53px]">
          How do I <span className="text-[#1A73E8]">Refer?</span>
        </p>
        <div className="flex flex-col min-[930px]:flex-row gap-8 min-[1360px]:gap-[128px] ">
          {info.map((e) => (
            <Info key={e.title} {...e} />
          ))}
        </div>
        <Button
          className="w-fit mt-[78px] mb-[53px]"
          onClick={() => {
            console.log("clicked");
            dispatch(setShowModal(true));
          }}
        >
          Refer Now
        </Button>
      </div>
    </div>
  );
};

const Info = ({ title, img }) => {
  return (
    <div className="flex flex-col gap-[26px] justify-center items-center   border-red-500 w-[280px] aspect-square rounded-full py-[60px] px-[54px] shadow-[12px_12px_10px_hsla(200,30%,34%,0.3)]">
      <img src={img} alt="" />
      <p className=" ">{title}</p>
    </div>
  );
};

export default Refer;
