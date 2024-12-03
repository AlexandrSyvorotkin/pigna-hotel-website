import { Logo } from "../logo/Logo"

const LoadingScreen = () => {
    return (
        <div className='bg-loading-color w-full h-full flex justify-center items-center'>
            <Logo/>
        </div>
    )
}

export { LoadingScreen }