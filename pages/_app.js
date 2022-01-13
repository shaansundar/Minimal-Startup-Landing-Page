import NavBarSide from '../components/NavBarSide'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className='flex flex-row w-screen h-screen'>
      <NavBarSide/>
      <Component {...pageProps} />
  </div>
  )
}

export default MyApp
