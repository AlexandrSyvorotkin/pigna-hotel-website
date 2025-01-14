import { Scrollbar, A11y, Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "../../ui/img/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import img0 from "../../assets/essence-of-pigna/img1.webp";
import img_1 from "../../assets/essence-of-pigna/img3.webp";
import img1 from "../../assets/essence-of-pigna/slide1.png";
import img2 from "../../assets/essence-of-pigna/slide2.png";
import img3 from "../../assets/essence-of-pigna/slide3.png";
import img4 from "../../assets/essence-of-pigna/slide4.png";
import img5 from "../../assets/essence-of-pigna/slide5.png";
import img6 from "../../assets/essence-of-pigna/slide6.png";


import { useLocalization } from "../../context/useLocalization";
import { Heading } from "../heading/heading";

const slidesEls = [
  {
    img: img0,
    text: "The wellness retreat is set in Pigna, a picturesque village founded in the Middle Ages, located within the Ligurian mountains, 20 km from the coast, in the North West of Italy.",
    textIt:
      "Il centro benessere si trova a Pigna, un pittoresco borgo fondato nel Medioevo, situato tra i monti liguri, a 20 km dalla costa, nel nord-ovest dell'Italia.",
  },
  {
    img: img2,
    text: "As one of Europe's renowned Blue Zones, Liguria stands out for its exceptional longevity. The Blue Zones principle, based on a combination of natural products, regional resources, an active and positive lifestyle leading to longevity, is the cornerstone of the hotel's concept.",
    textIt:
      "Come una delle rinomate “Blue Zones” d’Europa, la Liguria si distingue per la longevità eccezionale dei suoi abitanti. Il principio delle Blue Zones, basato su una combinazione di prodotti naturali, risorse regionali, uno stile di vita attivo e positivo che favorisce la longevità, è il fondamento del concetto dell’hotel.",
  },
  {
    img: img3,
    text: "The Grand Hotel Pigna is situated in the Regional Park of the Ligurian Alps, offering proximity to natural landmarks such as the highest mountain in Liguria — Mount Saccarello; the deepest cave — Melosa; and the spectacular long-distance hiking trail in Ligurian Mountains — Alta Via dei Monti Liguri.",
    textIt:
      "Il Grand Hotel Pigna si trova nel Parco Regionale delle Alpi Liguri, vicino a monumenti naturali come la montagna più alta della Liguria — il Monte Saccarello; la grotta più profonda — la Melosa; e il sentiero escursionistico a lunga percorrenza dell’Alta Via dei Monti Liguri.",
  },
  {
    img: img_1,
    text: "The Grand Hotel Pigna is situated in the Regional Park of the Ligurian Alps, offering proximity to natural landmarks such as the highest mountain in Liguria — Mount Saccarello; the deepest cave — Melosa; and the spectacular long-distance hiking trail in Ligurian Mountains — Alta Via dei Monti Liguri.",
    textIt:
      "Il Grand Hotel Pigna è situato nel Parco Regionale delle Alpi Liguri, in prossimità di attrazioni naturali come la montagna più alta della Liguria, il Monte Saccarello; la grotta più profonda, la Melosa; e lo spettacolare percorso escursionistico di lunga percorrenza dei Monti Liguri, l'Alta Via dei Monti Liguri.",
  },
  {
    img: img1,
    text: "Italy is a home to the greatest array of UNESCO World Heritage sites in the world, including high art and monuments. Liguria has a number of parks, archaeological areas, and ancient buildings included in the World Heritage List.",
    textIt:
      "L’Italia è la patria della più grande varietà di siti Patrimonio dell’Umanità dell’UNESCO al mondo, inclusi capolavori artistici e monumenti storici. La Liguria vanta numerosi parchi, aree archeologiche e antichi edifici inclusi nella Lista del Patrimonio Mondiale.",
  },

  {
    img: img4,
    text: 'The Grand Hotel Pigna is situated on the banks of the river Nervia, in the enchanting Val Nervia, close to the picturesque town of Dolceacqua — the inspiration for a series of paintings by Claude Monet, including the famous "Bridge of Dolceacqua".',
    textIt: "",
  },
  {
    img: img5,
    text: "The wellness retreat is set in Pigna, a picturesque village founded in the Middle Ages, located within the Ligurian mountains, 20 km from the coast, in the North West of Italy",
    textIt:
      "Il Grand Hotel Pigna è situato sulle rive del fiume Nervia, nella incantevole Val Nervia, vicino al pittoresco borgo di Dolceacqua — fonte d’ispirazione per una serie di dipinti di Claude Monet, tra cui il famoso “Ponte di Dolceacqua”.",
  },
  {
    img: img6,
    text: "The Grand Hotel Pigna is situated in the Regional Park of the Ligurian Alps, offering proximity to natural landmarks such as the highest mountain in Liguria — Mount Saccarello; the deepest cave — Melosa; and the spectacular long-distance hiking trail in Ligurian Mountains — Alta Via dei Monti Liguri.",
    textIt:
      "Il rifugio benessere si trova a Pigna, un pittoresco villaggio di origine medievale, situato tra le montagne liguri a 20 km dalla costa, nel Nord-Ovest dell’Italia.",
  },
];

const EssenceOfPigna = () => {
  const { locale } = useLocalization();

  return (
    <section
      className="bg-main-white w-full h-1/2 lg:mt-44 sm:mt-20 z-30 lg:mb-40 sm:mb-20"
      id="essence-of-pigna"
    >
      <div className="flex justify-center items-center">
        <Heading tag="h2" className="text-black-main font-patrizia font-normal text-center uppercase">
          {locale === "ENG" ? "ESSENCE OF PIGNA" : "L’ESSENZA DI PIGNA"}
        </Heading>
      </div>
      <div
        id="essence-of-pigna-swiper"
        className="w-full mt-10 lg:px-2 sm:pl-[18px]"
      >
        <Swiper
          // install Swiper modules
          modules={[Scrollbar, A11y, Navigation, Autoplay]}
          loop={true}
          spaceBetween={12}
          //   autoplay={{
          //     delay: 3500,
          //     disableOnInteraction: false,
          //   }}
          breakpoints={{
            360: {
              slidesPerView: 1.3, // 1 слайд на экранах меньше 640px
            },
            768: {
              slidesPerView: 2, // 2 слайда на экранах меньше 768px
            },
            1024: {
              slidesPerView: 2.5, // 2.5 слайда на экранах меньше 1024px
            },
          }}
          navigation={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slidesEls.map((slide, index) => (
            <SwiperSlide key={index} className="w-5/12">
              <Image
                src={slide.img}
                alt={slide.text}
                className="w-full md:h-[465px] sm:h-[300px] hover:opacity-80"
              />
              <div className="text-black-main font-helvetica font-normal text-responsive text-left leading-[23px] mt-3">
                {locale === "ENG" ? slide.text : slide.textIt}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export { EssenceOfPigna };
