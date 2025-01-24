import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {ITableDriver} from "../../models/driverModels.ts";
import {useEffect} from "react";
import {fetchDrivers} from "../../store/reducers/driversReducer.ts";

import './Drivers.css';
import Driver from "./Driver.tsx";

const Drivers = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {drivers, loading, error, daysOfWeek} = useSelector((state: RootState) => state.drivers);

    useEffect(() => {
        dispatch(fetchDrivers());
    }, [dispatch]);

    if (loading) return <p>Loading menu...</p>;
    if (error) console.error(error);

    return (
        <>
            <h1>Drivers</h1>
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
                {drivers.map((driver: ITableDriver, index: number) => (
                    <tr key={index}>
                        <Driver driver={driver} daysOfWeek={daysOfWeek}/>
                    </tr>)
                )}
                </tbody>
            </table>
        </>
    )
}
export default Drivers;
