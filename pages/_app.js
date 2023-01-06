// import Home from '../pages/index'
// import About from '../components/about'
import Navbar from '../components/Navbar'
import Header from '../components/Header'



import '../styles/globals.css'


export default function App({Component, pageProps}) {
  return (
  <>
    <Navbar></Navbar>
    <Component {...pageProps}></Component>
  </>
)
}
