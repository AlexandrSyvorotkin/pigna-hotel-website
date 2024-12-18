import './App.css'
import { Header } from './layout/header/header'
import { useState } from 'react'
import { Menu } from './ui/menu/menu'
import { Footer } from './layout/footer/footer'
import { Routes, Route } from 'react-router-dom'
import { NotFoundPage } from './pages/404-page/404'
import { MainPage } from './pages/main-page/main'
import { LoadingPage } from './pages/loading-page/loading'
import { Privacy } from './pages/privacy/privacy'
import Registration from './pages/registration/registration'
import { Docs } from './pages/docs/docs'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(true)

  return (
    <div className=" w-full h-full flex flex-col">
      <Header openMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen}/>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/docs" element={<Docs />} />
        </Routes>
      {/* <Footer/> */}
      {/* <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/> */}
    </div>
  )
}

export default App
