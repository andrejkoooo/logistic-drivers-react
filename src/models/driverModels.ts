export interface IDriversReposnse {
    data: IDriver[]
}

export interface IDriver {
    driverID: number;
    surname: string;
    forename: string;
    vehicleRegistration: string;
    traces: ITrace[];
}

export interface ITrace {
    date: Date;
    activity: IActivity[]
}

export interface IActivity {
    startTime: Date;
    type: ActvityType;
    duration: number
}

export interface ITableActivity {
    type: string;
    totalActivityDuration: number
}

export type ActvityType = 'available' | 'rest' | 'drive' | 'work';

export interface ITableDriver {
    driverID: number,
    name: string,
    vehicleRegistration: string,
    totalDuration: number,
    activityDays: DayOfWeek[],
    activityTypes: ITableActivity[],
    driver?: ITableDriver
}

export enum DayOfWeek {
    Sunday = 0,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}
