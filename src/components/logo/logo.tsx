import { useNavigate } from "react-router-dom";


interface LogoProps {
  color?: "white" | "black";
  size?: "sm" | "lg";
  img?: string;
  content: React.ReactNode;
}

const Logo = ({ size, img, content }: LogoProps) => {
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
        {content}
      </div>
    </div>
  );
};

export { Logo };
