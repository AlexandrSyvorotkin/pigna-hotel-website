import star from '../../assets/star/star.svg'

const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <img src={star} alt="star" key={index} />
        ))}
      </div>
      <div className="flex items-center gap-2">
      <span>GRAND</span>
      <span>PIGNA</span>
      <span>HOTEL</span>
    </div>
    </div>
  )
}

export { Logo }