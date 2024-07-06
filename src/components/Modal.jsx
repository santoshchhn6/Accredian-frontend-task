import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setShowModal } from "../redux/appSlice";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <div className="z-10 absolute top-0 left-0 w-screen h-full py-10 bg-black/50 flex justify-center  overflow-y-scroll">
      <div className="flex flex-col gap-3">
        <IoMdCloseCircle
          size={30}
          className="self-end hover:text-gray-600 cursor-pointer"
          onClick={() => dispatch(setShowModal(false))}
        />
        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
