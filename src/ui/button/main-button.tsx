import { cn } from "../../utils/utils"


const MainButton = ({children, className, onClick}: {children: React.ReactNode, className?: string, onClick?: () => void}) => {
    return (
        <button className={cn('bg-button lg:px-[48px] lg:py-[22px] text-main-white font-helvetica font-bold', className)} onClick={onClick}>
           {children}
        </button>
    )
}

export { MainButton }