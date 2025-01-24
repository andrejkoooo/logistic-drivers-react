import {ITableActivity, ITrace} from "../../models/driverModels.ts";


export const calculateTotalActivityTime = (traces: ITrace[]) => {

    let totalDuration = 0;

    traces.forEach((trace) => {
        trace.activity.forEach((act) => {
            totalDuration += act.duration;
        });
    });
    return totalDuration;
}

export const getActivityDays = (traces: ITrace[]) => {
    return traces.map((trace) => {
        return new Date(trace.date)?.getDay();
    });
}

export const getGroupActivities = (traces: ITrace[]): ITableActivity[] => {
    const activityMap: any = {};

    traces.forEach(trace => {
        trace.activity.forEach(({ type, duration }) => {
            if (!activityMap[type]) {
                activityMap[type] = 0;
            }
            activityMap[type] += duration;
        });
    });

    return Object.entries(activityMap).map(([type, totalActivityDuration]) => ({ type, totalActivityDuration } as ITableActivity));
}

export const sortByString = <T>(collection: T[], sortByProperty: string): T[] => {
    return [...collection].sort((a: any, b: any) => {
        const nameA = a[sortByProperty]?.toLowerCase() || '';
        const nameB = b[sortByProperty]?.toString().toLowerCase() || '';

        return nameA.localeCompare(nameB); // Alphabetical comparison
    });
}
