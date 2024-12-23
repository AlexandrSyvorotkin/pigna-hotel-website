import { ReactNode } from "react"
// import { cn } from '../../utils/utils'

const Presentation = ({button,children}: {button?: ReactNode, children?: ReactNode}) => {
    return (
        <div className='w-full lg:h-screen sm:h-[800px] lg:bg-[url("./assets/bg/bg.png")] sm:bg-[url("./assets/bg/bg-responsive.png")] bg-cover bg-center flex justify-center items-center flex-col gap-16 px-[18px]'>
          {children}
          {button}
        </div>
    )
}

export { Presentation }