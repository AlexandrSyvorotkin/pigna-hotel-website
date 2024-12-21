import { useNavigate } from "react-router-dom";
import starWhite from "../../assets/star/StarW.svg";
import starBlack from "../../assets/star/star.svg"

interface LogoProps {
  color?: "white" | "black";
  size?: "sm" | "lg";
  img?: string;
  content: React.ReactNode;
}

const Logo = ({ color, size, img, content }: LogoProps) => {
  const navigate = useNavigate();


  const mt = size === 'lg' ? 'mt-6' : 'mt-0'
  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => navigate("/main")}
    >
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <img src={img} alt="star" key={index} />
        ))}
      </div>
      <div className={`flex items-center gap-2 ${mt}`}>
        {/* {size === "sm" && (
          <>
            <span className="md:text-xl sm:text-sm ">GRAND</span>
            <span className="md:text-3xl sm:text-lg">PIGNA</span>
            <span className="md:text-xl sm:text-sm">HOTEL</span>
          </>
        )}
        {size === "lg" && (
          <>
            <span className="md:text-5xl sm:text-2xl font-patrizia">GRAND</span>
            <span className="md:text-8xl sm:text-4xl font-patrizia">PIGNA</span>
            <span className="md:text-5xl sm:text-2xl font-patrizia">HOTEL</span>
          </>
        )} */}
        {content}
      </div>
    </div>
  );
};

export { Logo };
