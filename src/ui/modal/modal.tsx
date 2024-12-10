import { Image } from '../../ui/img/image.tsx'
import close from '../../assets/IconClose.svg'


const Modal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[1000px] h-[400px] shadow-lg p-9 relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-6 right-6">
          <Image src={close} alt="close" className="w-5 h-5" />
        </button>
        <div className="flex justify-center mt-2 w-full h-full">
          <div className="flex flex-col items-center justify-center w-[600px] gap-6">
          <span className='text-main-black font-helvetica text-2xl text-center uppercase'>Thank you, we have received your request for access to the investment plan.</span>
          <span className='text-main-black text-lg font-helvetica text-center'>The project manager will contact you as soon as possible to confirm access.</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export {Modal};