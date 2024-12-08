import star from "../../assets/star/star.svg";

const LoadingScreen = () => {
  return (
    <div className="bg-loading-color w-full h-full flex justify-center items-center">
      <div className="flex gap-10 flex-col justify-center items-center">
        <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
            <img
                src={star}
                alt="star"
                key={index}
                className="animate-fadeIn"
                style={{
                animationDelay: `${index * 0.4}s`,
                opacity: 0,
                animationFillMode: "forwards",
                }}
            />
            ))}
        </div>
        <div className="flex items-center gap-2 text-main-white text-4xl font-patrizia">
            <span className="text-5xl">GRAND</span>
            <span className="text-8xl">PIGNA</span>
            <span className="text-5xl">HOTEL</span>
        </div>
      </div>
    </div>
  );
};

export { LoadingScreen };
