import { useLocalization } from "../../context/useLocalization";
import { Selector } from "../../ui/selector/selector"


const lng = ["ENG", "IT",]

const HeaderControls = ({openMenu}: {openMenu: () => void}) => {


  const { setLocale } = useLocalization();


    return (
      <div className='flex items-center lg:gap-10 sm:gap-0'>
        <span className="text-base sm:hidden lg:block cursor-pointer transition duration-300 ease-in-out hover:opacity-70" onClick={openMenu}>Menu</span>
        <div className='bg-main-white w-[1px] h-10 sm:hidden lg:block'></div>
        <Selector options={lng} onSelect={(select: string) => setLocale(select)} startOption={lng[0]}/>
      </div>
    )
}

export { HeaderControls }