import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { act } from "react-dom/test-utils";
import "jest-dom/extend-expect";

import DataInput from "../index";
const mockIncome = 5000;
const mockBills = {
  electricityBill: 2000,
  mobileBill: 1000
};
const updateIncomeInStoreJest = jest.fn();
const updateBillsInStoreJest = jest.fn();
const deleteExpenseInStoreJest = jest.fn();
jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str) => str,
      };
    },
  }));
  
describe("DataInput", () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  it("renders correctly and calls all actions", () => {
    const { queryByTestId, debug, queryAllByTestId, queryByRole } = render(
      <DataInput
        income={mockIncome}
        bills={mockBills}
        updateIncomeInStore={updateIncomeInStoreJest}
        updateBillsInStore={updateBillsInStoreJest}
        deleteExpenseInStore={deleteExpenseInStoreJest}
        code="en"
      />
    );
    expect(queryByTestId("DataInput-div-container")).toBeInTheDocument();
    const input = queryByTestId("DataInput-input-incomeValue").querySelector(
      "input"
    );
    fireEvent.change(input, { target: { value: "4000" } });
    expect(updateIncomeInStoreJest).toHaveBeenCalledWith(4000);
    const button = queryAllByTestId("DataInput_button_delete");
    fireEvent.click(button[0]);
    expect(deleteExpenseInStoreJest).toHaveBeenCalledWith("electricityBill");

    const billsInput = queryByTestId("DataInput_input_bills").querySelector(
      "input"
    );
    fireEvent.change(billsInput, { target: { value: "100" } });
    expect(updateBillsInStoreJest).toHaveBeenCalledWith({
      key: "electricityBill",
      value: 100
    });
  });
});
