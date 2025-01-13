import img1 from "../../assets/cuisine/img1.png";
import img2 from "../../assets/cuisine/img2.png";
import img3 from "../../assets/cuisine/img3.png";
import img4 from "../../assets/cuisine/img4.png";
import { Image } from "../../ui/img/image";



import { Scrollbar, A11y } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useLocalization } from "../../context/useLocalization";
import { ResponsiveContentContainer } from "../responsive-content-container/responsive-content-container";
import { Heading } from "../heading/heading";



const resSlider = [
  {
    img:img1,
    text: "The hotel’s own kitchen and restaurant feature only the finest, nutrient-rich products, carefully sourced from local farmers who share our passion for quality. The region boasts over 250 welcoming farmhouses, each offering immersive tours.",
    textIt: "La cucina e il ristorante dell’hotel utilizzano solo i migliori prodotti ricchi di nutrienti, accuratamente selezionati da contadini locali che condividono la nostra passione per la qualità. La regione vanta oltre 250 agriturismi accoglienti, ognuno dei quali offre visite coinvolgenti."
  },
  {
    img:img2,
    text:"",
    textIt: ""
  },
  {
    img:img3,
    text:"",
    textIt: ""
  },
  {
    img:img4,
    text:"Under the guidance of our chef, every dish is a perfect balance of wholesome ingredients, health benefits, and culinary artistry",
    textIt: "Sotto la guida del nostro chef, ogni piatto raggiunge il perfetto equilibrio tra ingredienti genuini, benefici per la salute e arte culinaria."
  },
]

const Cuisine = () => {

  const { locale } = useLocalization();


  return (
    <div
      className="w-full lg:mt-44 sm:mt-10 flex justify-center items-center"
      id="cuisine"
    >
      <ResponsiveContentContainer>
        <div className='flex flex-col gap-0 justify-center items-center'>
          <Heading tag="h2" className='font-patrizia text-center uppercase'>
            {locale === 'ENG' ? 'Cuisine' : 'Cucina'}
          </Heading>
          <p className='text-black-main text-responsive font-helvetica font-normal text-center lg:w-[55%] sm:w-full'>
            {locale === 'ENG' ? "By embracing a 'Zero Kilometre' supply chain, the hotel’s restaurants proudly showcase the finest and freshest local ingredients. Local produce — easily digestible white pigna beans, olive oil and all olive products — form a plant-based dietary cuisine with a nutritional programme tailored to the needs of each client." 
            : "Adottando la filosofia della filiera “Zero Chilometri”, i ristoranti dell’hotel valorizzano i migliori ingredienti locali, freschi e di stagione. Prodotti locali — i leggeri e digeribili fagioli bianchi di Pigna, l’olio d’oliva e tutti i prodotti a base di olive — formano una cucina a base vegetale con un programma nutrizionale adattato alle esigenze di ogni cliente."}</p>
        </div>

        <div className='mt-12 flex gap-6 justify-center w-full md:flex sm:hidden'>
          <div className='flex flex-col gap-6 w-1/2'>
            <div className='flex gap-6'>
              <Image src={img1} alt='img1' className='w-full lg:h-[476px] md:h-[300px]' />
              <Image src={img2} alt='img1' className='w-full lg:h-[476px] md:h-[300px]' />
            </div>
            <p className='text-black-main text-responsive font-helvetica font-normal'>
              {locale === "ENG" ?
              "The hotel’s own kitchen and restaurant feature only the finest, nutrient-rich products, carefully sourced from local farmers who share our passion for quality.The region boasts over 250 welcoming farmhouses, each offering immersive tours." :
              "La cucina e il ristorante dell’hotel utilizzano solo i migliori prodotti ricchi di nutrienti, accuratamente selezionati da contadini locali che condividono la nostra passione per la qualità. La regione vanta oltre 250 agriturismi accoglienti, ognuno dei quali offre visite coinvolgenti."  
            }
              </p>
          </div>
          <div className='flex gap-6 w-1/4'>
            <Image src={img3} alt='img3' className='w-full lg:h-[476px] md:h-[300px] sm:h-[200px]' />
          </div>
          <div className='flex gap-6 flex-col w-1/4'>
            <Image src={img4} alt='img4' className='w-full lg:h-[476px] md:h-[300px] sm:h-[200px]' />
            <p className='text-black-main text-responsive font-helvetica font-normal'>
              {locale === "ENG" ?
              "Under the guidance of our chef, every dish is a perfect balance of wholesome ingredients, health benefits, and culinary artistry" :
              "Sotto la guida del nostro chef, ogni piatto raggiunge il perfetto equilibrio tra ingredienti genuini, benefici per la salute e arte culinaria."}
            </p>
          </div>
        </div>
        {/* TODO: make it responsive */}
        <div className="relative md:hidden sm:block h-[400px]">
          <div className='absolute left-0 w-full mt-10 '>
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
                    <Image src={slide.img} alt={slide.text} className='w-full h-[340px] hover:opacity-80' />
                    <p className='text-black-main text-xs font-helvetica font-normal max-w-full'>{locale === 'ENG' ? slide.text : slide.textIt}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> 
          </div>
        </div>
      </ResponsiveContentContainer>
      
    </div>
  );
};

export { Cuisine };
