import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Weather from "../components/Weather";

afterEach(cleanup);

const mockParams = {
  name: "London",
  main: {
    temp: 12.72,
  },
  sys: {
    country: "GB",
  },
  weather: [
    {
      description: "overcast clouds",
      icon: "04d",
    },
  ],
};

describe("Weather Component", () => {
  it("should render image", () => {
    const { getByTestId } = render(<Weather location={mockParams} />);
    expect(getByTestId("weather-icon")).toBeInTheDocument();
  });

  it("should render image with correct weather icon", () => {
    const { getByTestId } = render(<Weather location={mockParams} />);
    expect(getByTestId("weather-icon")).toHaveAttribute(
      "src",
      "http://openweathermap.org/img/wn/04d@2x.png"
    );
  });

  it("should render weather description", () => {
    const { getByTestId } = render(<Weather location={mockParams} />);
    expect(getByTestId("weather-description")).toBeInTheDocument();
  });

  it("should render weather weather temperature", () => {
    const { getByTestId } = render(<Weather location={mockParams} />);
    expect(getByTestId("weather-temp")).toBeInTheDocument();
  });

  it("should round up temperature", () => {
    const { getByTestId } = render(<Weather location={mockParams} />);
    expect(getByTestId("weather-temp")).toHaveTextContent(13);
  });

  it("should render city name", () => {
    const { getByTestId } = render(<Weather location={mockParams} />);
    expect(getByTestId("city-name")).toBeInTheDocument();
  });

  it("should render country flag", () => {
    const { getByTestId } = render(<Weather location={mockParams} />);
    expect(getByTestId("location-flag")).toBeInTheDocument();
  });

  it("should render correct country flag based on props", () => {
    const { getByTestId } = render(<Weather location={mockParams} />);
    expect(getByTestId("location-flag")).toHaveAttribute(
      "src",
      "https://flagcdn.com/w80/gb.png"
    );
  });
});
