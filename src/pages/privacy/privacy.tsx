import { PrivacyList } from "../../components/privacy-list/privacy-list";

const Privacy = () => {
  return <div className="w-full bg-main-white">
    <div className="w-full h-auto bg-main-white relative">
      <span className="lg:text-lg font-helvetica sm:text-sm pointer absolute top-10 left-10">Return</span>
      <PrivacyList/>
    </div>
  </div>;
};

export { Privacy };
