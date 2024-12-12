import {useNavigate } from "react-router-dom";
import star from "../../assets/star/star.svg";

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
        <span>GRAND</span>
        <span>PIGNA</span>
        <span>HOTEL</span>
      </div>
    </div>
  );
};

export { Logo };
