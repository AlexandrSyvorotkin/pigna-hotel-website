import { cn } from "../../utils/utils"


const MainButton = ({children, className, onClick}: {children: React.ReactNode, className?: string, onClick?: () => void}) => {
    return (
        <button className={cn('bg-button px-[48px] py-[22px] text-white font-helvetica font-bold text-[24px] text-base', className)} onClick={onClick}>
           {children}
        </button>
    )
}

export { MainButton }