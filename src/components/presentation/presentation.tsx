import { ReactNode } from "react"

const Presentation = ({text, button}: {text: string, button?: ReactNode}) => {
    return (
        <div className='w-full h-screen bg-[url("./assets/bg/bg.png")] bg-cover bg-center flex justify-center items-center flex-col gap-16 px-[18px]'>
          <span className="font-normal lg:text-6xl sm:text-3xl text-main-white text-center font-patrizia uppercase opacity-80 lg:w-[800px]">{text}</span>
          {button}
        </div>
    )
}

export { Presentation }