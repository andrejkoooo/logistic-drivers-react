import {Route, Routes} from "react-router";
import Home from "../../pages/home/Home.tsx";
import About from "../../pages/about/About.tsx";
import Vehicles from "../../pages/vehicles/Vehicles.tsx";
import Drivers from "../../pages/drivers/Drivers.tsx";

const MainSection= () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/vehicles" element={<Vehicles/>}/>
                <Route path="/drivers" element={<Drivers/>}/>
            </Routes>
        </>
    )
}

export default MainSection;
