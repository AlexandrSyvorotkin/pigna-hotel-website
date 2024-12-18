import { cn } from "../../utils/utils"


const MainButton = ({children, className, onClick, type}: {children: React.ReactNode, className?: string, onClick?: () => void, type?: string}) => {
    return (
        <button type={type} className={cn('bg-button px-[48px] py-[22px] text-white font-helvetica font-bold lg:text-2xl sm:text-lg', className)} onClick={onClick}>
           {children}
        </button>
    )
}

export { MainButton }