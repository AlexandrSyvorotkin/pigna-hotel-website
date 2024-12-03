import { Image } from '../../ui/img/image'
import bg from '../../assets/bg/bg-1.png'

import img1 from "../../assets/interior-design/img1.svg"
import img2 from "../../assets/interior-design/img2.svg"
import img3 from "../../assets/interior-design/img3.svg"
import img4 from "../../assets/interior-design/img4.svg"
import img5 from "../../assets/interior-design/img5.svg"
import img6 from "../../assets/interior-design/img6.svg"
import img7 from "../../assets/interior-design/img7.svg"

const images = [img1, img2, img3, img4, img5, img6, img7]

const InteriorDesign = () => {
  return (
    <div className='mt-60 w-full flex justify-center flex-col items-center pb-60'>
      <div className='w-[1750px] flex justify-center flex-col gap-4'>
        <h2 className='text-black-main text-5xl font-patrizia font-normal text-center'>Interior Design and Architecture</h2>
        <div className='w-full flex justify-center items-center'>
        <p className='text-black-main text-lg font-helvetica font-normal text-center w-1/2'>The hotel project is conceived around the oriental principle of layout, embodied in a modern design. Unique design solutions, including the incorporation of natural precious stones, are utilised in the interior finishes.</p>
        </div>
      </div>
      <div className='w-[1750px] h-[900px] bg-black-main mt-14'>
        <Image src={bg} alt='img' className='w-full h-full' />
      </div>
      <div className="w-[900px] mt-14">
        <p className='text-black-main text-2xl font-helvetica font-normal text-center uppercase'>Designed by the renowned architect Alex Kravetz, the renovation project stands as a testament to innovative vision and artistry, set to redefine luxury and elegance within the hospitality landscape.</p>
        <p className='mt-4 text-black-main text-lg font-helvetica font-normal text-center'>This transformation is further distinguished by accolades that include The Imperial Hotel Vienna, Intercontinental Porto, Radisson Hotel Antwerpen, Sheraton Oman, Hilton Muscat etc.</p>
      </div>
      <div className='mt-20 flex justify-between gap-10'>
        {images.map((img, index) => (
          <img src={img} alt='img' key={index} className='object-contain'/>
        ))}
      </div>
    </div>
  )
}

export {InteriorDesign}