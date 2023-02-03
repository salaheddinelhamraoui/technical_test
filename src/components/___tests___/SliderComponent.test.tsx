import React from "react";
import SliderComponent, { SliderComponentProps } from "../SliderComponent";
import { render, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

describe("SliderComponent", () => {
  let props: SliderComponentProps;
  beforeEach(() => {
    props = {
      heading: "Building Height",
      keyValue: "height",
      sliderValue: 10,
      handleSliderValueChange: jest.fn(),
      max: 100,
    };
  });

  it("renders correctly", () => {
    render(<SliderComponent {...props} />);

    expect(screen.getByText("Building Height : 10")).toBeInTheDocument();
  });
});
