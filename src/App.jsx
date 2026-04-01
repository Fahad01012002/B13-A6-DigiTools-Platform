import Banner from '../components/Banner/Banner'
import Mark from '../components/Mark/Mark'
import Navbar from '../components/Navbar/Navbar'
import PremiumSection from '../components/PremiumSection/PremiumSection'
import './App.css'

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
      </div>
    </>
  )
}

export default App
