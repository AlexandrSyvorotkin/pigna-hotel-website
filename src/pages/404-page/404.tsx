import {useNavigate } from "react-router-dom"
import { MainButton } from "../../ui/button/main-button"

const NotFoundPage = () => {

    const navigate = useNavigate()

    return (
        <div className="w-full h-screen bg-loading-color">
            <div className="pt-56 flex flex-col gap-5 items-center">
                <h1 className="uppercase font-patrizia text-[145px] mt-[80px] text-main-white">404</h1>
                <span className="uppercase font-patrizia text-5xl text-main-white">page not found</span>
                <p className="uppercase font-helvetica text-lg text-main-white text-center max-w-[425px]"> It may have been moved, or you may have entered the page address incorrectly</p>
                <MainButton className="mt-14 bg-main-white text-black-main w-[400px]" onClick={() => navigate('/main')}>BACK TO HOME</MainButton>
            </div>
        </div>
    )
}

export { NotFoundPage }