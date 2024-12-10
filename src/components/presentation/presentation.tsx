import { ReactNode } from "react"

const Presentation = ({text, button}: {text: string, button?: ReactNode}) => {
    return (
        <div className='w-full h-screen bg-[url("./assets/bg/bg.png")] bg-cover bg-center flex justify-center items-center flex-col gap-16'>
          <span className="font-normal text-[56px] text-white text-center font-patrizia uppercase opacity-80 min-w-[900px] max-w-[1400px]">{text}</span>
          {button}
        </div>
    )
}

export { Presentation }