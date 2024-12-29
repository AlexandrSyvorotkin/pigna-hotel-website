import { useNavigate } from "react-router-dom";
import { PrivacyList } from "../../components/privacy-list/privacy-list";
import { useEffect } from "react";

const Privacy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  const navigate = useNavigate()
  return <div className="w-full bg-main-white text-black-main">
    <div className="w-full h-auto bg-main-white relative">
      <span className="lg:text-lg font-helvetica sm:text-sm pointer absolute top-10 left-10 cursor-pointer" onClick={() => navigate('/main')}>Return</span>
      <PrivacyList/>
    </div>
  </div>;
};

export { Privacy };
