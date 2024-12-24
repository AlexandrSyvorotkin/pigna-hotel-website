import { Image } from '../../ui/img/image.tsx'
import close from '../../assets/IconClose.svg'
import { useLocalization } from '../../context/useLocalization.tsx';


const Modal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {



  

  setTimeout(() => {
    onClose();
  }, 3000);

  const {locale} = useLocalization();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-[18px]">
      <div className="bg-main-white shadow-lg relative animate-fadeIn p-10">
        <button onClick={onClose} className="absolute top-6 right-6">
          <Image src={close} alt="close" className="w-5 h-5" />
        </button>
        <div className="flex justify-center mt-16 pb-16 w-full h-full">
          <div className="flex flex-col items-center justify-center w-[70%] gap-6">
          <span className='text-main-black font-helvetica lg:text-2xl sm:text-base text-center uppercase'>
            {locale === "ENG" ? "Thank you, we have received your request for access to the investment plan." : 
            "Grazie, abbiamo ricevuto la tua richiesta di accesso al piano di investimento."}
            </span>
          <span className='text-main-black lg:text-lg sm:text-xs font-helvetica text-center'>
            {locale === "ENG" ? "The project manager will contact you as soon as possible to confirm access." : 
            "Il project manager ti contatterà al più presto per confermare l’accesso."}
          </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export {Modal};