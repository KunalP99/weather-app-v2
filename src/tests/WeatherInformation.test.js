import React from "react";
import {
  render,
  screen,
  cleanup,
  waitForElement,
  queryByTestId,
} from "@testing-library/react";
import WeatherInformation from "../components/WeatherInformation";

afterEach(cleanup);

describe("WeatherInformation", () => {
  it("should render search box", () => {
    render(<WeatherInformation />);
    const searchBox = screen.getByPlaceholderText("Type city name:");
    expect(searchBox).toBeInTheDocument();
  });

  it("should not be rendered when waiting for data", async () => {
    const { queryByTestId } = render(<WeatherInformation />);

    expect(queryByTestId(/weather-component/i)).toBeNull();
  });
});
