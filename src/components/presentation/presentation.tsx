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

  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const isDesktop = useMediaQuery({
    query: '(min-width: 600px)' // lg breakpoint
  });
 

  const videoUrl = isDesktop 
  ? "https://termedipigna.com/uploads/pc_intro.mp4"
  : "https://termedipigna.com/uploads/mobile_intro.mp4";

useEffect(() => {
  if (isVideo) {
    const preloadVideo = document.createElement('video');
    preloadVideo.src = videoUrl; // Используем ту же переменную
    preloadVideo.load();

    preloadVideo.addEventListener('canplaythrough', () => {
      setIsVideoLoading(false);
    });

    return () => {
      preloadVideo.remove();
      setIsVideoLoading(true);
    };
  }
}, [isVideo, isDesktop, videoUrl]);

  const styles = {
    "w-full lg:h-screen sm:h-[800px]": true,
    'lg:bg-[url("./assets/bg/bg.png")] sm:bg-[url("./assets/bg/bg-responsive.png")]':
      !isVideo || isVideoLoading,
    "bg-cover bg-center flex justify-center items-center flex-col gap-16 px-[18px]": true,
  };


  return (
    <div className={cn(styles)}>
      {isVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          onLoadedData={() => {
            setIsVideoLoading(false);
          }}
          className={`absolute top-0 left-0 w-full lg:h-screen sm:h-[800px] object-cover transition-opacity duration-700 ${
            isVideoLoading ? "opacity-0" : "opacity-100"
          } -z-10`}
          style={{
            objectFit: "cover",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
          }}
        >
          <source 
            src={videoUrl} 
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
