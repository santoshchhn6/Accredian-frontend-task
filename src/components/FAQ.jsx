import { padding, width } from "../style";
import up from "../assets/images/up.svg";
import down from "../assets/images/down.svg";
import { useState } from "react";

const FAQ = () => {
  return (
    <div className="flex justify-center">
      <div
        className={`${padding} ${width} flex flex-col items-center pb-[60px]`}
      >
        <p className="font-semibold text-[27.66px] my-[66px]">
          Frequently Asked <span className="text-[#1A73E8]">Questions</span>
        </p>
        <FAQs />
      </div>
    </div>
  );
};

const FAQs = () => {
  const faq = [
    {
      id: 1,
      question:
        "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
      anwser:
        "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
    },
    {
      id: 2,
      question: "What is the minimum system configuration required?",
      anwser:
        "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
    },
  ];
  return (
    <div className="space-y-8">
      {faq.map((e) => (
        <QuestionAnswer key={e.id} {...e} />
      ))}
    </div>
  );
};

const QuestionAnswer = ({ question, anwser }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-5">
      <div className="flex gap-3 justify-between">
        <p className="text-[16px] font-semibold text-[#1A73E8]">{question}</p>
        <div className="cursor-pointer" onClick={() => setShow(!show)}>
          {show ? <img src={up} alt="" /> : <img src={down} alt="" />}
        </div>
      </div>
      {show && <p className="text-[15px] text-black/80">{anwser}</p>}
    </div>
  );
};

export default FAQ;
