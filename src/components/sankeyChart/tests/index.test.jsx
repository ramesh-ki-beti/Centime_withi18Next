import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import {colors} from '../../../app/constants';
import SankeyChart from "../index";

const mockSanekyData = [
  ["To", "From", "Weight"],
  ["Salary", "Budget", 5000],
  ["Budget", "Bills", 3000],
  ["Bills", "Electricity", 2000],
  ["Bills", "Mobile", 1000]
];
const options = {
    sankey: {
      node: {
        colors: colors,
        label: {
          fontName: "sans-serif",
          fontSize: 10,
          color: "#000",
          bold: true,
          italic: false
        },
        interactivity: false 
      },
      link: {
        colorMode: 'gradient',
        colors: colors
      }
    }
  };
describe("SankeyChart", () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  it("renders the sankey chart properly for a given input", () => {
    const { queryByTestId } = render(
      <SankeyChart sankeyData={mockSanekyData} options={options}/>
    );
    expect(queryByTestId("SankeyChart-div-container")).toBeInTheDocument();
  });
});
