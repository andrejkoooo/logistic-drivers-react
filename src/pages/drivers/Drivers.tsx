import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {ITableDriver} from "../../models/driverModels.ts";
import {useEffect, useState} from "react";
import {fetchDrivers} from "../../store/reducers/driversReducer.ts";

import './Drivers.css';
import Driver from "./Driver.tsx";


const Drivers = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {drivers, loading, error, daysOfWeek} = useSelector((state: RootState) => state.drivers);
    const [filteredDrivers, setFilteredDrivers] = useState([]);

    useEffect(() => {
        dispatch(fetchDrivers());
    }, [dispatch]);

    useEffect(() => {
        setFilteredDrivers(drivers);
    }, [drivers]);

    const onSearchChange = (searchText) => {
        const filteredDrivers = drivers.filter((driver: ITableDriver) => {
            const drivers = driver.name.toLowerCase().includes(searchText.toLowerCase());
            const vehicles = driver.vehicleRegistration.toLowerCase().includes(searchText.toLowerCase());
            return drivers || vehicles;
        });
        setFilteredDrivers(filteredDrivers);
    };

    if (loading) return <p>Loading menu...</p>;
    if (error) console.error(error);

    const noDriversFound =() =>{
        if(filteredDrivers.length > 0){
            return ;
        }
        return <p className="not-drivers-found">No Drivers found.</p>;
    }

    return (
        <>
            <h1>Drivers</h1>
            <input type="text" id="search" placeholder="Search Driver..." onChange={e => onSearchChange(e.target.value)}/>
            <table>
                <thead>
                <tr>
                    <th>Driver Name</th>
                    <th>Vehicle Registration</th>
                    <th>Activities (in Minutes)</th>
                    {daysOfWeek.map((day: string) => (<th key={day}>{day}</th>))}
                </tr>
                </thead>
                <tbody>
                {filteredDrivers.map((driver: ITableDriver, index: number) => (
                    <tr key={index}>
                        <Driver driver={driver} daysOfWeek={daysOfWeek}/>
                    </tr>)
                )}
                </tbody>
            </table>
            {noDriversFound()}
        </>
    )
}
export default Drivers;
