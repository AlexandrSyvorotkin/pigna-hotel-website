const HeaderControls = ({openMenu}: {openMenu: () => void}) => {
    return (
      <div className='flex items-center lg:gap-10 sm:gap-0'>
        <span className="text-base sm:hidden lg:block cursor-pointer transition duration-300 ease-in-out hover:opacity-70" onClick={openMenu}>Menu</span>
        <div className='bg-main-white w-[1px] h-10 sm:hidden lg:block'></div>
        <span className="text-base">ENG</span>
      </div>
    )
}

export { HeaderControls }