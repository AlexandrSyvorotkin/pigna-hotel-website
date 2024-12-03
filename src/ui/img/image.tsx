import { cn } from "../../utils/utils"

const Image = ({src, alt, className}: {src: string, alt?: string, className?: string}) => {
    return (
        <div className={cn(className)}>
          <img src={src} alt={alt} className={`w-full h-full object-cover`} />
        </div>
    )
}

export { Image }