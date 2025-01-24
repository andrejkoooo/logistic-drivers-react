import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store/store.ts";
import {MemoryRouter} from "react-router";
import App from "../../App.tsx";
import {fetchMenu} from "../../store/reducers/menuReducer.ts";

const renderComponent =() =>{
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        </Provider>
    );
}

describe('App Navigation tests', () =>{
    test('navigates to home on Home click', () => {
        renderComponent();
        store.dispatch(fetchMenu()).then(() => {
            const element = screen.getByText('Home');
            element.click();
            expect(window.location.pathname).toBe('/');
        })
    });
    test('navigates to home on Drivers click', () => {
        renderComponent();
        store.dispatch(fetchMenu()).then(() => {
            const element = screen.getByText('Drivers');
            element.click();
            expect(window.location.pathname).toBe('/Drivers');
        })
    });
    test('navigates to home on Vehicles click', () => {
        renderComponent();
        store.dispatch(fetchMenu()).then(() => {
            const element = screen.getByText('Vehicles');
            element.click();
            expect(window.location.pathname).toBe('/Vehicles');
        })
    });
    test('navigates to home on About click', () => {
        renderComponent();
        store.dispatch(fetchMenu()).then(() => {
            const element = screen.getByText('About');
            element.click();
            expect(window.location.pathname).toBe('/About');
        })
    });
})
