import { cn } from "../../utils/utils"


const Banner = ({children, className}: {children?: React.ReactNode, className?: string}) => {
    return (
        <div className={cn('bg-loading-color w-full flex justify-center items-center', className)}>
          {children}
        </div>
    )
}

export { Banner }