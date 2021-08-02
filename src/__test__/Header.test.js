import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import { Header } from "../components/Header";
import { BrowserRouter as Router } from 'react-router-dom';

test("render title in Header", () => {
    render(
        <Router>
            <Header />
        </Router>
    );
    const title1 = screen.getByText('My');
    expect(title1).toBeInTheDocument();

    const title2 = screen.getByText('albums');
    expect(title2).toBeInTheDocument();
});
