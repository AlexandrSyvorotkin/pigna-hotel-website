const HeaderControls = ({openMenu}: {openMenu: () => void}) => {
    return (
      <div className='flex items-center gap-10'>
        <span onClick={openMenu}>Menu</span>
        <div className='bg-[#1A1515] w-[1px] h-10'></div>
        <span>ENG</span>
      </div>
    )
}

export { HeaderControls }