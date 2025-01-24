import {IDriver, IDriversReposnse, ITableDriver} from "../../models/driverModels.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "./DataApi.ts";
import {calculateTotalActivityTime, getActivityDays, getGroupActivities} from "./DriversHelper.ts";
import {RootState} from "../store.ts";

const initialState = {
    drivers:<ITableDriver[]>[],
    daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    loading: false,
    error: <string| null>null
};
export const fetchDrivers = createAsyncThunk("drivers/fetchDrivers", async () => {
    const response = await getData<IDriversReposnse>("/drivers.json");

    return response.data;
});

const driverSlice = createSlice({
    name: "drivers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDrivers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDrivers.fulfilled, (state, action) => {
                state.loading = false;
                state.drivers = action.payload.map(d => mapToTableDriver(d));
            })
            .addCase(fetchDrivers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch menu";
            });
    },
});

export const getDrivers=(state: RootState) => state.drivers;

const mapToTableDriver =(driver: IDriver): ITableDriver =>{
    return {
        driverID: driver.driverID,
        name: driver.forename + ' ' + driver.surname,
        vehicleRegistration: driver.vehicleRegistration,
        totalDuration: driver.traces?  calculateTotalActivityTime(driver.traces): 0,
        activityDays: getActivityDays(driver.traces),
        activityTypes: getGroupActivities(driver.traces)
    } as ITableDriver;
}

export default driverSlice.reducer;
