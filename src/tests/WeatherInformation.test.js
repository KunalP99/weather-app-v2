import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import axiosMock from "axios";
import WeatherInformation from "../components/WeatherInformation";

afterEach(cleanup);

describe("WeatherInformation", () => {
  it("should render search box", async () => {
    render(<WeatherInformation />);
    const searchBox = screen.getByPlaceholderText("Type city name:");

    await waitFor(() => {
      expect(searchBox).toBeInTheDocument();
    });
  });

  it("should not be rendered when waiting for data", async () => {
    const { queryByTestId } = render(<WeatherInformation />);

    await waitFor(() => {
      expect(queryByTestId(/weather-component/i)).toBeNull();
    });
  });

  it("should render weather component when api is called", async () => {
    const { queryByTestId } = render(<WeatherInformation />);
    axiosMock.get.mockResolvedValueOnce({ location: {} });

    await waitFor(() => {
      expect(axiosMock.get).toHaveBeenCalled();
      expect(queryByTestId(/weather-component/i)).toHaveTextContent("London");
    });
    screen.debug();
  });
});
