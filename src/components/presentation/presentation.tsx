import { ReactNode } from "react"
import { cn } from "../../utils/utils"
// import { cn } from '../../utils/utils'

const Presentation = ({button,children, isVideo}: {button?: ReactNode, children?: ReactNode, isVideo?: boolean  }) => {

    const styles = {
        'w-full lg:h-screen sm:h-[800px]': true,
        'lg:bg-[url("./assets/bg/bg.png")] sm:bg-[url("./assets/bg/bg-responsive.png")]': !isVideo,
        'bg-cover bg-center flex justify-center items-center flex-col gap-16 px-[18px]': true
    }

    // https://termedipigna.com/uploads/intro.mp4

    return (
        <div className={cn(styles)}>
          {isVideo && (
            <video 
                autoPlay 
                muted 
                loop
                playsInline
                controls={false}
                disablePictureInPicture
                controlsList="nodownload noplaybackrate" 
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
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