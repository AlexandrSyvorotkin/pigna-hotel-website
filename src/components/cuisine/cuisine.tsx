import img1 from "../../assets/cuisine/img1.png";
import img2 from "../../assets/cuisine/img2.png";
import img3 from "../../assets/cuisine/img3.png";
import img4 from "../../assets/cuisine/img4.png";
import { Image } from "../../ui/img/image";



import { Scrollbar, A11y } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { BuildingTerritory } from "../building-territory/building-territory";



const resSlider = [
  {
    img:img1,
    text: "The hotel’s own kitchen and restaurant feature only the finest, nutrient-rich products, carefully sourced from local farmers who share our passion for quality. The region boasts over 250 welcoming farmhouses, each offering immersive tours."
  },
  {
    img:img2,
    text:""
  },
  {
    img:img3,
    text:""
  },
  {
    img:img4,
    text:"Under the guidance of our chef, every dish is a perfect balance of wholesome ingredients, health benefits, and culinary artistry"
  },
]

const Cuisine = () => {
  return (
    <div
      className="w-full lg:mt-44 sm:mt-10 flex justify-center items-center px-[18px]"
      id="cuisine"
    >
      <div className="w-[1750px]">
        
        <div className='flex flex-col gap-0 justify-center items-center'>
          <h3 className='text-black-main lg:text-5xl sm:text-2xl font-patrizia font-normal text-center uppercase'>Cuisine</h3>
          <p className='text-black-main lg:text-lg sm:text-xs font-helvetica font-normal text-center lg:w-[55%] sm:w-full'>By embracing a "Zero Kilometre" supply chain, the hotel’s restaurants proudly showcase the finest and freshest local ingredients. Local produce — easily digestible white pigna beans, olive oil and all olive products — form a plant-based dietary cuisine with a nutritional programme tailored to the needs of each client.</p>
        </div>



        <div className='mt-12 flex gap-6 justify-center w-full sm:hidden lg:flex'>
          <div className='flex flex-col gap-6 w-1/2'>
            <div className='flex gap-6'>
              <Image src={img1} alt='img1' className='w-full h-[476px]' />
              <Image src={img2} alt='img1' className='w-full h-[476px]' />
            </div>
            <p className='text-black-main text-[18px] font-helvetica font-normal'>The hotel’s own kitchen and restaurant feature only the finest, nutrient-rich products, carefully sourced from local farmers who share our passion for quality.The region boasts over 250 welcoming farmhouses, each offering immersive tours.</p>
          </div>
          <div className='flex gap-6 w-1/4'>
            <Image src={img3} alt='img3' className='w-full h-[476px]' />
          </div>
          <div className='flex gap-6 flex-col w-1/4'>
            <Image src={img4} alt='img4' className='w-full h-[476px]' />
            <p className='text-black-main text-[18px] font-helvetica font-normal'>Under the guidance of our chef, every dish is a perfect balance of wholesome ingredients, health benefits, and culinary artistry</p>
          </div>
        </div>
        {/* TODO: make it responsive */}
        <div className='lg:hidden sm:block sm:w-[320px] md:w-[500px] mt-10'>
          <Swiper
          modules={[Scrollbar, A11y]}
          spaceBetween={10}
          breakpoints={{
            360: {
              slidesPerView: 1.6, // 1 слайд на экранах меньше 640px
            },
            600: {
              slidesPerView: 2,
            }
          }}
          >
            {resSlider.map((slide, index) => (
              <SwiperSlide key={index} className='w-[240px]'>
                <div className='flex flex-col gap-2'>
                  <Image src={slide.img} alt={slide.text} className='w-full h-[240px]' />
                  <p className='text-black-main text-xs font-helvetica font-normal max-w-full'>{slide.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> 
        </div>
        
        <BuildingTerritory/>
        
      </div>
    </div>
  );
};

export { Cuisine };
