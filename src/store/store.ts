import {configureStore} from "@reduxjs/toolkit";
import menuReducer from "./reducers/menuReducer.ts";
import driversReducer from "./reducers/driversReducer.ts";


export const store = configureStore({
    reducer: {
        menus: menuReducer,
        drivers: driversReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

