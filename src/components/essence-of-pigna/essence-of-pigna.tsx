import { Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '../../ui/img/image';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


import img1 from '../../assets/essence-of-pigna/slide1.png' 
import img2 from '../../assets/essence-of-pigna/slide2.png'
import img3 from '../../assets/essence-of-pigna/slide3.png'
import img4 from '../../assets/essence-of-pigna/slide4.png'
import img5 from '../../assets/essence-of-pigna/slide5.png'
import img6 from '../../assets/essence-of-pigna/slide6.png'


const slidesEls = [
    { img: img1, text: "Italy is a home to the greatest array of UNESCO World Heritage sites in the world, including high art and monuments. Liguria has a number of parks, archaeological areas, and ancient buildings included in the World Heritage List." },
    { img: img2, text: "As one of Europe's renowned Blue Zones, Liguria stands out for its exceptional longevity. The Blue Zones principle, based on a combination of natural products, regional resources, an active and positive lifestyle leading to longevity, is the cornerstone of the hotel's concept." },
    { img: img3, text: 'The Grand Hotel Pigna is situated in the Regional Park of the Ligurian Alps, offering proximity to natural landmarks such as the highest mountain in Liguria — Mount Saccarello; the deepest cave — Melosa; and the spectacular long-distance hiking trail in Ligurian Mountains — Alta Via dei Monti Liguri.' },
    { img: img4, text: 'The Grand Hotel Pigna is situated on the banks of the river Nervia, in the enchanting Val Nervia, close to the picturesque town of Dolceacqua — the inspiration for a series of paintings by Claude Monet, including the famous "Bridge of Dolceacqua".' },
    { img: img5, text: "The wellness retreat is set in Pigna, a picturesque village founded in the Middle Ages, located within the Ligurian mountains, 20 km from the coast, in the North West of Italy" },
    { img: img6, text: 'The Grand Hotel Pigna is situated in the Regional Park of the Ligurian Alps, offering proximity to natural landmarks such as the highest mountain in Liguria — Mount Saccarello; the deepest cave — Melosa; and the spectacular long-distance hiking trail in Ligurian Mountains — Alta Via dei Monti Liguri.' },

]


const EssenceOfPigna = () => {
    return (
        <section className="bg-main-white w-full h-1/2 lg:mt-44 sm:mt-20" id="essence-of-pigna">
            <div className="flex justify-center items-center">
                <span className="text-black-main font-patrizia font-normal lg:text-5xl sm:text-2xl text-center uppercase">ESSENCE OF PIGNA</span>
            </div>
            <div className="w-full mt-10 px-2">
                <Swiper
                    // install Swiper modules
                    modules={[Scrollbar, A11y]}
                    spaceBetween={24}
                    breakpoints={{
                        360: {
                            slidesPerView: 1.4, // 1 слайд на экранах меньше 640px
                        },
                        768: {
                            slidesPerView: 2, // 2 слайда на экранах меньше 768px
                        },
                        1024: {
                            slidesPerView: 2.5, // 2.5 слайда на экранах меньше 1024px
                        },
                    }}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {slidesEls.map((slide, index) => (
                        <SwiperSlide key={index} className='w-5/12'>
                            <Image src={slide.img} alt={slide.text} className='w-full md:h-[465px] sm:h-[300px]' />
                            <div className="text-black-main font-helvetica font-normal md:text-lg sm:text-xs text-left leading-5 mt-3">
                                {slide.text}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export { EssenceOfPigna }