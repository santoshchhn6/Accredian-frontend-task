import Button from "./Button";
import { padding, width } from "../style";
import pg from "../assets/images/g.svg";
import { useDispatch } from "react-redux";
import { setShowModal } from "../redux/appSlice";

const Benefits = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center">
      <div className={`${padding} ${width} flex flex-col items-center `}>
        <p className="font-semibold text-[27.66px] my-[66px]">
          What Are The{" "}
          <span className="text-[#1A73E8]">Referral Benefits?</span>
        </p>
        <Table />
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

const Table = () => {
  const rows = [
    {
      id: 1,
      programs: "Professional Certificate Program in Product Management",
      referrer_bonus: "₹ 7,000",
      referee_bonus: "₹ 9,000",
    },
    {
      id: 2,
      programs: "PG Certificate Program in Strategic Product Management",
      referrer_bonus: "₹ 9,000",
      referee_bonus: "₹ 11,000",
    },
    {
      id: 3,
      programs: "Executive Program in Data Driven Product Management",
      referrer_bonus: "₹ 10,000",
      referee_bonus: "₹ 10,000",
    },
    {
      id: 4,
      programs:
        "Executive Program in Product Management and Digital Transformation",
      referrer_bonus: "₹ 10,000",
      referee_bonus: "₹ 10,000",
    },
    {
      id: 5,
      programs: "Executive Program in Product Management",
      referrer_bonus: "₹ 10,000",
      referee_bonus: "₹ 10,000",
    },
    {
      id: 6,
      programs: "Advanced Certification in Product Management",
      referrer_bonus: "₹ 10,000",
      referee_bonus: "₹ 10,000",
    },
    {
      id: 7,
      programs:
        "Executive Program in Product Management and Project Management",
      referrer_bonus: "₹ 10,000",
      referee_bonus: "₹ 10,000",
    },
  ];

  return (
    <div className="rounded-[14px] border overflow-hidden bg-[#EBF3FF] shadow-lg">
      <table className=" text-[#3C4852]">
        <thead className="bg-[#1A73E8] text-[#1350A0] text-[20px] font-bold ">
          <tr>
            <th className="py-[14px]">Programs</th>
            <th className="border-l-2 border-black/20 text-center px-[25px]">
              Referrer Bonus
            </th>
            <th className="border-l-2 border-black/20 text-center px-[25px]">
              Referee Bonus
            </th>
          </tr>
        </thead>
        <tbody className="text-[20px]">
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="px-[25px] py-[10px] flex gap-3">
                <img src={pg} alt="" />
                {row.programs}
              </td>
              <td className="border-l-2 border-black/20 text-center">
                {row.referrer_bonus}
              </td>
              <td className="border-l-2 border-black/20 text-center">
                {row.referee_bonus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Benefits;
