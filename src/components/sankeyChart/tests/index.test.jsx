import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Chart from "react-google-charts";
import "jest-dom/extend-expect";

import SankeyChart from "../index";

const mockSanekyData = [
  ["To", "From", "Weight"],
  ["Salary", "Budget", 5000],
  ["Budget", "Bills", 3000],
  ["Bills", "Electricity", 2000],
  ["Bills", "Mobile", 1000]
];

describe("SankeyChart", () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  it("renders the sankey chart properly for a given input", () => {
    const { queryByTestId, debug, queryAllByTestId, queryByRole } = render(
      <SankeyChart sankeyData={mockSanekyData} />
    );
    expect(queryByTestId("SankeyChart-div-container")).toBeInTheDocument();
  });
});
