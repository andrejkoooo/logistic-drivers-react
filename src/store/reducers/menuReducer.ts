import {IMenu, IMenuResponse} from "../../models/menuModels.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";
import {getData} from "./DataApi.ts";

const initialState = {
    menus:<IMenu[]>[],
    loading: false,
    error: <string| null>null
};

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
    const response = await getData<IMenuResponse>("/menu.json");

    return response.data;
});

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenu.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenu.fulfilled, (state, action) => {
                state.loading = false;
                state.menus = action.payload;
            })
            .addCase(fetchMenu.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch menu";
            });
    },
});

export const getMenu = (state: RootState) => state.menus;

export default menuSlice.reducer;
