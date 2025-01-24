import '@testing-library/jest-dom'

import { render, screen} from '@testing-library/react';
import About from "./About.tsx";

test('renders the correct heading', () => {
    render(<About />);
    const heading = screen.getByText('About Us');
    expect(heading).toBeInTheDocument();

})
