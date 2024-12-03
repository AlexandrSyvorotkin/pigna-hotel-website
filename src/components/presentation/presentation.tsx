import { MainButton } from "../../ui/button/main-button"

const Presentation = () => {
    return (
        <div className='w-full h-full bg-[url("./assets/bg/bg.png")] bg-cover bg-center flex justify-center items-center flex-col gap-16'>
          <span className="font-normal text-[56px] text-white text-center font-patrizia uppercase opacity-80">Every detail is crafted for<br/> a remarkable stay </span>
          <MainButton>
            <span>INVEST THE PROJECT</span>
          </MainButton>
        </div>
    )
}

export { Presentation }