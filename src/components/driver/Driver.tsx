import * as React from "react";
import {DayOfWeek, ITableActivity, ITableDriver} from "../../models/driverModels.ts";
import {sortByString} from "../../store/reducers/DriversHelper.ts";

const Driver:React.FC<{driver: ITableDriver, daysOfWeek:string[]}> =({driver, daysOfWeek}) => {

    const driverActive = (driver: ITableDriver, day: DayOfWeek): boolean => {
        return driver.activityDays.some(dayOfWeek => dayOfWeek === day);
    }

    const getActivities = (activities: ITableActivity[]) => {
        if (activities.length === 0) {
            return "";
        }
        // concat the activity type and the total activity duration
        const sortedActivities = sortByString(activities, "type");
        const activityDetails = sortedActivities.map((activity) => (activity.type + ": " + activity.totalActivityDuration)).join(", ");
        return `(${activityDetails})`;
    }

    return (
        <>
            <td>{driver.name}</td>
            <td>{driver.vehicleRegistration}</td>
            <td>Total: {driver.totalDuration} {getActivities(driver.activityTypes)}</td>
            {daysOfWeek.map((_, index: number) => <td key={index}>
                <span className={`day ${driverActive(driver, index + 1) ? 'day-work' : ''}`}></span>
            </td>)}
        </>
    )
}
export default Driver;
