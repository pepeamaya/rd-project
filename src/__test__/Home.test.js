import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import Home from "../components/home/Home";

test("render div with texts in Home", () => {
    render(<Home />);
    const text1 = screen.getByText('Find your music');
    expect(text1).toBeInTheDocument();
    
    const text2 = screen.getByText('with Spotify!');
    expect(text2).toBeInTheDocument();
});