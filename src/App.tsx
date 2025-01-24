
import './App.css'
import SideMenu from "./components/side-menu/Side-menu.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import MainSection from "./components/main-section/Main-section.tsx";

function App() {

  return (
      <>
          <Navbar />
          <div className="main-wrapper">
              <div className="side-menu">
                <SideMenu />
              </div>
              <div className="content-wrapper">
                <MainSection />
              </div>
          </div>
    </>
  )
}

export default App
