import React from "react";
import { render, cleanup, waitFor, fireEvent } from "@testing-library/react";
import axiosMock from "axios";
import WeatherInformation from "../components/WeatherInformation";

afterEach(cleanup);

describe("WeatherInformation Component", () => {
  it("should render search box", () => {
    const { getByPlaceholderText } = render(<WeatherInformation />);
    const searchBox = getByPlaceholderText("Type city name:");
    expect(searchBox).toBeInTheDocument();
  });

  it("should render submit button", () => {
    const { getByRole } = render(<WeatherInformation />);
    const submitBtn = getByRole("button");
    expect(submitBtn).toBeInTheDocument();
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
  });
});
