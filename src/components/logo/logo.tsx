import {useNavigate } from "react-router-dom";
import star from "../../assets/star/StarW.svg";

interface LogoProps {
  color: "white" | "black";
  size: "sm" | "lg"
}

const Logo = () => {

  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => navigate("/main")}>
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <img src={star} alt="star" key={index} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="md:text-xl sm:text-sm">GRAND</span>
        <span className="md:text-3xl sm:text-lg">PIGNA</span>
        <span className="md:text-xl sm:text-sm">HOTEL</span>
      </div>
    </div>
  );
};

export { Logo };
