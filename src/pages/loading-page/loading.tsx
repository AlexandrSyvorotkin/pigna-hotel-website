import { LoadingScreen } from "../../components/loading-screen/loading-screen"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const LoadingPage = () => {

    const navigate = useNavigate()

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigate('/main')
    //     }, 2000)

    //     return () => clearTimeout(timer)
    // }, [navigate])

    return (
        <div className="w-full h-screen">
            <LoadingScreen/>
        </div>
    )
}

export { LoadingPage }