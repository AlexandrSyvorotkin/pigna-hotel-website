import { cn } from "../../utils/utils"


const MainButton = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
        <button className={cn('bg-button px-[48px] py-[22px] text-white font-helvetica font-bold text-[24px] text-base', className)}>
           {children}
        </button>
    )
}

export { MainButton }