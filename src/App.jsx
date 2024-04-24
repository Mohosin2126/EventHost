
import './App.css'
import Banner from './Banner/Banner'
import Events from './Events/Events'
import Footer from './Footer/Footer'
import HostEvents from './HostEvents/HostEvents'
import NavBar from './NavBar/NavBar'
import Scanner from './QrScanner/Scanner'
import Ticket from './Ticketing/Ticket'
function App() {
 

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Events></Events>
      <HostEvents></HostEvents>
      <Scanner></Scanner>
      <Ticket></Ticket>
      <Footer></Footer>
    </>
  )
}

export default App
