import { ReactNode, useEffect, useState } from "react";
import { cn } from "../../utils/utils";
import { useMediaQuery } from "react-responsive";
// import { cn } from '../../utils/utils'

const Presentation = ({
  button,
  children,
  isVideo,
}: {
  button?: ReactNode;
  children?: ReactNode;
  isVideo?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const styles = {
    "w-full lg:h-screen sm:h-[800px]": true,
    'lg:bg-[url("./assets/bg/bg.png")] sm:bg-[url("./assets/bg/bg-responsive.png")]':
      !isVideo || isLoading, // Добавил isLoading
    "bg-cover bg-center flex justify-center items-center flex-col gap-16 px-[18px]":
      true,
  };
  useEffect(() => {
    const bgLg = new Image();
    const bgSm = new Image();

    bgLg.src = "./assets/bg/bg.png";
    bgSm.src = "./assets/bg/bg-responsive.png";

    Promise.all([
      new Promise((resolve) => (bgLg.onload = resolve)),
      new Promise((resolve) => (bgSm.onload = resolve)),
    ]).then(() => {
      setIsLoading(false);
    });
  }, []);

  const isDesktop = useMediaQuery({
    query: '(min-width: 600px)' // lg breakpoint
  });

  return (
    <div className={cn(styles)}>
      {isVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          onLoadedData={() => setIsLoading(false)}
          className={`absolute top-0 left-0 w-full lg:h-screen sm:h-[800px] object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          } -z-10`}
          style={{
            objectFit: "cover",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
          }}
        >
          <source 
            src={isDesktop 
              ? "https://termedipigna.com/uploads/pc_intro.mp4"
              : "https://termedipigna.com/uploads/mobile_intro.mp4"
            } 
            type="video/mp4" 
          />
        </video>
      )}
      {children}
      {button}
    </div>
  );
};

export { Presentation };
