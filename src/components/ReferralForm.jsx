import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../components/Input";
import {
  email_validation,
  name_validation,
  phone_validation,
  relationship_validation,
} from "../utils/inputValidations";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setShowModal } from "../redux/appSlice";

const ReferralForm = () => {
  const dispatch = useDispatch();
  const methods = useForm();

  const onSubmit = methods.handleSubmit(async (inputs) => {
    // console.log(inputs);
    try {
      // const response = await axios.post(
      //   "http://localhost:5000/referral/add",
      //   inputs
      // );
      const response = await axios.post(
        "https://accredian-backend-task-rid3.onrender.com/referral/add",
        inputs
      );

      const { success, message } = response?.data;
      console.log({ success });
      if (success) {
        alert(message);
        dispatch(setShowModal(false));
        methods.reset();
      } else {
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <div className="w-full sm:w-[640px] h-fit text-center bg-[#EEF5FF] py-8 px-24  rounded-xl shadow-md ">
      <h2 className="text-gray-600 text-4xl font-bold">Referral Form</h2>
      <hr className="my-5 h-[2px] bg-gray-500" />
      <FormProvider {...methods}>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <h2 className="text-gray-600 text-2xl font-bold text-left">
            Referrer Information
          </h2>
          <Input name="referrer_name" {...name_validation} />
          <Input name="referrer_email" {...email_validation} />
          <Input name="referrer_phone" {...phone_validation} />
          <Input name="relationship" {...relationship_validation} />

          <hr className="my-5 h-[2px] bg-gray-500" />

          <h2 className="text-gray-600 text-2xl font-bold text-left">
            Referee Information
          </h2>

          <Input name="referee_name" {...name_validation} />
          <Input name="referee_email" {...email_validation} />
          <Input name="referee_phone" {...phone_validation} />

          <button
            onClick={onSubmit}
            className="px-3 py-2 font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-800"
          >
            Submit Referral
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ReferralForm;
