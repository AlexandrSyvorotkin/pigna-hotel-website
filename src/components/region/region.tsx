import { Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '../../ui/img/image';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


import img1 from '../../assets/region-slides/slide1.png'
import img2 from '../../assets/region-slides/slide2.png'
import img3 from '../../assets/region-slides/slide3.png'
import img4 from '../../assets/region-slides/slide4.png'
import img5 from '../../assets/region-slides/slide5.png'
import img6 from '../../assets/region-slides/slide6.png'
import img7 from '../../assets/region-slides/slide7.png'
import img8 from '../../assets/region-slides/slide8.png'

const slidesEls = [
    { img: img1, text: "As one of Europe's renowned Blue Zones, Liguria stands out for its exceptional longevity. The Blue Zones principle, based on a combination of natural products, regional resources, an active and positive lifestyle leading to longevity, is the cornerstone of the hotel's concept." },
    { img: img2, text: 'The Grand Hotel Pigna is situated in the Regional Park of the Ligurian Alps, offering proximity to natural landmarks such as the highest mountain in Liguria — Mount Saccarello; the deepest cave — Melosa; and the spectacular long-distance hiking trail in Ligurian Mountains — Alta Via dei Monti Liguri.' },
    { img: img3, text: 'The Grand Hotel Pigna is situated on the banks of the river Nervia, in the enchanting Val Nervia, close to the picturesque town of Dolceacqua — the inspiration for a series of paintings by Claude Monet, including the famous "Bridge of Dolceacqua".' },
    { img: img4, text: 'Italy is a home to the greatest array of UNESCO World Heritage sites in the world, including high art and monuments. Liguria has a number of parks, archaeological areas, and ancient buildings included in the World Heritage List.' },
    { img: img5, text: "As one of Europe's renowned Blue Zones, Liguria stands out for its exceptional longevity. The Blue Zones principle, based on a combination of natural products, regional resources, an active and positive lifestyle leading to longevity, is the cornerstone of the hotel's concept." },
    { img: img6, text: 'The Grand Hotel Pigna is situated in the Regional Park of the Ligurian Alps, offering proximity to natural landmarks such as the highest mountain in Liguria — Mount Saccarello; the deepest cave — Melosa; and the spectacular long-distance hiking trail in Ligurian Mountains — Alta Via dei Monti Liguri.' },
    { img: img7, text: 'The Grand Hotel Pigna is situated on the banks of the river Nervia, in the enchanting Val Nervia, close to the picturesque town of Dolceacqua — the inspiration for a series of paintings by Claude Monet, including the famous "Bridge of Dolceacqua".' },
    { img: img8, text: 'The wellness retreat is set in Pigna, a picturesque village founded in the Middle Ages, located within the Ligurian mountains, 20 km from the coast, in the North West of Italy' }
]


const Region = () => {
    return (
        <section className="bg-main-white w-full h-1/2 mt-44" id="essence-of-pigna">
            <div className="flex justify-center items-center">
                <span className="text-black-main font-patrizia font-normal text-5xl text-center uppercase">ESSENCE OF PIGNA</span>
            </div>
            <div className="w-full mt-10 px-2">
                <Swiper
                    // install Swiper modules
                    modules={[Scrollbar, A11y]}
                    spaceBetween={24}
                    slidesPerView={2.5}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {slidesEls.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Image src={slide.img} alt={slide.text} className='w-[864px] h-[465px]' />
                            <div className="text-black-main font-helvetica font-normal text-lg text-left leading-5 mt-3">
                                {slide.text}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export { Region }