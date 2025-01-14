import { ReactNode, useState } from "react"
import { cn } from "../../utils/utils"
// import { cn } from '../../utils/utils'

const Presentation = ({button,children, isVideo}: {button?: ReactNode, children?: ReactNode, isVideo?: boolean  }) => {

  const [isLoading, setIsLoading] = useState(true);
  const styles = {
    'w-full lg:h-screen sm:h-[800px]': true,
    'lg:bg-[url("./assets/bg/bg.png")] sm:bg-[url("./assets/bg/bg-responsive.png")]': !isVideo || isLoading, // Добавил isLoading
    'bg-cover bg-center flex justify-center items-center flex-col gap-16 px-[18px]': true
  }
  
 
  
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
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } -z-10`}
          style={{
            objectFit: 'cover',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
          }}
        >
          <source src="https://termedipigna.com/uploads/intro.mp4" type="video/mp4" />
        </video>
      )}
          {children}
          {button}
        </div>
    )
}

export { Presentation }