import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router';

import {Provider} from "react-redux";
import {store} from "./store/store.ts";

const renderAppComponent =() =>{
        render(
            <Provider store={store}>
                    <MemoryRouter initialEntries={['/']}>
                            <App/>
                    </MemoryRouter>
            </Provider>
        );
}
describe("renders App component", () => {
        test('renders Navbar component', () => {
                renderAppComponent();

                const navbarElement = screen.getByRole('navigation');
                expect(navbarElement).toBeInTheDocument();
        });

        test('renders SideMenu component', () => {
                renderAppComponent();
                const sideMenuElement = document.querySelector('.side-menu');

                expect(sideMenuElement).toBeInTheDocument();
        });

        test('renders MainSection component', () => {
                renderAppComponent();

                const mainSectionElement =document.querySelector('.content-wrapper');
                expect(mainSectionElement).toBeInTheDocument();
        });

});
