import { ReactNode } from "react"
// import { cn } from '../../utils/utils'

const Presentation = ({button,children}: {button?: ReactNode, children?: ReactNode}) => {
    return (
        <div className='w-full h-screen bg-[url("./assets/bg/bg.png")] bg-cover bg-center flex justify-center items-center flex-col gap-16 px-[18px]'>
          {children}
          {button}
        </div>
    )
}

export { Presentation }