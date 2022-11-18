const mockResponse = {
  data: {
    name: "London",
    main: {
      temp: 12,
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
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
