import { useSelector } from "react-redux";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Refer from "./components/Refer";
import ReferralForm from "./components/ReferralForm";
import "./index.css";

function App() {
  const { showModal } = useSelector((state) => state.app);
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Refer />
      <Benefits />
      <FAQ />
      {showModal && (
        <Modal>
          <ReferralForm />
        </Modal>
      )}
    </div>
  );
}

export default App;
