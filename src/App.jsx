import { ToastContainer } from 'react-toastify'
import Banner from '../components/Banner/Banner'
import Mark from '../components/Mark/Mark'
import Navbar from '../components/Navbar/Navbar'
import PremiumSection from '../components/PremiumSection/PremiumSection'
import './App.css'
import GetStarted from '../components/Main/GetStarted'
import Pricing from '../components/Main/Pricing'
import Transform from '../components/Main/Transform'
import Footer from '../components/Footer/Footer'

function App() {

  return (
    <>
      <div className='w-11/12 mx-auto manrope'>
        <Navbar />
        <Banner />
      </div>
      <div className='manrope'>
        <Mark />
      </div>
      <div className='w-11/12 mx-auto manrope'>
        <PremiumSection />
        <div className='flex flex-col justify-center items-center mt-30 space-y-4'>
          <h2 className='font-extrabold text-[48px]'>Get Started in 3 Steps</h2>
          <p className='leading-5 text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <GetStarted />
        <Pricing />
      </div>

      <div className='manrope'>
        <Transform />
        <Footer />
      </div>

      <ToastContainer />
    </>
  )
}

export default App
