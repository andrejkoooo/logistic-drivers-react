import {useNavigate} from "react-router";
import './Navbar.css';

const Navbar =() => {
const navigate = useNavigate();

    return (
        <>
            <nav className="navbar">
                <img src="/logo.png" onClick={()=>  navigate('/')} alt="company logo"/>
            </nav>

        </>
    );
}
export default Navbar;
