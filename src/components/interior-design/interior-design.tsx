import { Image } from "../../ui/img/image";
import bg from "../../assets/bg/bg-1.png";
import bgres from '../../assets/bg/bg-1-res.svg'

import img1 from "../../assets/interior-design/img1.svg";
import img2 from "../../assets/interior-design/img2.svg";
import img3 from "../../assets/interior-design/img3.svg";
import img4 from "../../assets/interior-design/img4.svg";
import img5 from "../../assets/interior-design/img5.svg";
import img6 from "../../assets/interior-design/img6.svg";
import img7 from "../../assets/interior-design/img7.svg";

import img1res from "../../assets/interior-design/res/img1res.svg";
import img2res from "../../assets/interior-design/res/img2res.svg";
import img3res from "../../assets/interior-design/res/img3res.svg";
import img4res from "../../assets/interior-design/res/img4res.svg";
import img5res from "../../assets/interior-design/res/img5res.svg";
import img6res from "../../assets/interior-design/res/img6res.svg";
import { useLocalization } from "../../context/useLocalization";

const images = [img1, img2, img3, img4, img5, img6, img7];
const imagesMobile = [img1res, img2res, img3res, img4res, img5res, img6res];

const InteriorDesign = () => {

const {locale} = useLocalization()

  return (
    <div
      className="lg:mt-60 sm:mt-10 w-full flex justify-center flex-col items-center lg:pb-60 sm:pb-10 px-[18px]"
      id="architecture"
    >
      <div className="max-w-[1750px]">
        <div className="flex justify-center items-center flex-col gap-4">
        <span className="text-black-main lg:text-5xl sm:text-2xl font-patrizia font-normal text-center uppercase lg:w-full sm:w-[80%]">

          {locale === 'ENG' ? "Interior Design and Architecture" :"Design degli Interni e Architettura" }
        </span>
        <div className="w-full flex justify-center items-center">
          <p className="text-black-main lg:text-lg sm:text-xs font-helvetica font-normal text-center lg:w-1/2 sm:w-full">
            The hotel project is conceived around the oriental principle of
            layout, embodied in a modern design. Unique design solutions,
            including the incorporation of natural precious stones, are utilised
            in the interior finishes.
          </p>
        </div>
        <div className="w-full bg-black-main lg:mt-14 sm:mt-6">
          <Image src={bg} alt="img" className="w-full h-full sm:hidden md:block" />
          <Image src={bgres} alt="img" className="w-full h-full md:hidden" />
        </div>
        </div>
        <div className="w-full lg:mt-36 sm:mt-10 flex flex-col justify-center items-center">
        <p className='text-black-main lg:text-2xl sm:text-base font-helvetica font-normal text-center uppercase lg:w-[65%] sm:w-full'>Designed by the renowned architect Alex Kravetz, the renovation project stands as a testament to innovative vision and artistry, set to redefine luxury and elegance within the hospitality landscape.</p>
        <p className='mt-4 text-black-main lg:text-lg sm:text-xs font-helvetica font-normal text-center lg:w-[45%] sm:w-full'>This transformation is further distinguished by accolades that include The Imperial Hotel Vienna, Intercontinental Porto, Radisson Hotel Antwerpen, Sheraton Oman, Hilton Muscat etc.</p>
      </div>

      <div className='mt-[72px] flex justify-between gap-10 flex-wrap md:flex sm:hidden'>
        {images.map((img, index) => (
          <img src={img} alt='img' key={index} className='object-contain'/>
        ))}
      </div>

      <div className='mt-[32px] justify-between gap-8 md:hidden sm:flex flex-wrap'>
        {imagesMobile.map((img, index) => (
          <img src={img} alt='img' key={index} className='object-contain'/>
        ))}
      </div>

      </div>
    </div>
  );
};

export { InteriorDesign };
