import {Link} from "react-router";
import './Side-menu.css'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {fetchMenu, getMenu} from "../../store/reducers/menuReducer.ts";
import {useEffect} from "react";

const SideMenu = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {menus, loading, error} = useSelector((state: RootState) => getMenu(state));

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    if (loading) return <p>Loading menu...</p>;
    if (error) console.error(error);

    return (
        <>
            <nav>
                {menus.map((route, index) => (
                    <div key={index} className="link">
                        <Link to={route.url}>{route.title}</Link>
                    </div>
                ))}
            </nav>
        </>
    )
}

export default SideMenu;
