import Footer from "./components/global/Footer/Footer"
import Header from "./components/global/Header/Header"
import DaliahClicker from "./components/global/DaliahClicker/DaliahClicker"
import { Outlet } from "react-router-dom" 

function App() {

  return (
      <div id="global">
        <Header/>
        <main>
          <Outlet />
        </main>
        <Footer />
        <DaliahClicker/>
      </div>
  )
}

export default App
