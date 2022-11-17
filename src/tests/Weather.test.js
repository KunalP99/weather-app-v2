import { render, screen } from "@testing-library/react";
import Weather from "../components/Weather";

const mockLocation = jest.fn();

describe("Input Element", () => {
  test("render input element to screen", async () => {
    render(<Weather location={mockLocation} />);
    const inputElement = screen.getByPlaceholderText(/Type city name:/i);
    expect(inputElement).toBeInTheDocument();
  });
});
