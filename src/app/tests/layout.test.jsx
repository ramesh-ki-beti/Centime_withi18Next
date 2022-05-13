import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { act } from "react-dom/test-utils";
import "jest-dom/extend-expect";

import App from "../layout";

jest.mock("i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  changeLanguage: () => () => new Promise(() => {})
}));
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      // i18n: {
      //   changeLanguage: () => new Promise(() => {}),
      // },
    };
  },
}));
const mockIncome = 5000;
const mockBills = {
  electricityBill: 2000,
  mobileBill: 1000
};
const mockBudget = {
  income: 5000,
  bills: {
    electricityBill: 2000,
    mobileBill: 1000
  }
};
const updateIncomeInStoreJest = jest.fn();
const updateBillsInStoreJest = jest.fn();
const deleteExpenseInStoreJest = jest.fn();
describe("<AppLayout />", () => {
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { queryByTestId, debug, queryAllByRole, queryByRole } = render(
      <App
        income={mockIncome}
        bills={mockBills}
        updateIncomeInStore={updateIncomeInStoreJest}
        budget={mockBudget}
        updateBillsInStore={updateBillsInStoreJest}
        deleteExpenseInStore={deleteExpenseInStoreJest}
        code='en'
      />
    );
    expect(queryByTestId("AppLayout-div-renderDocument")).toBeInTheDocument();
    expect(queryByTestId("AppLayout-img-Centime_Logo")).toBeInTheDocument();
    expect(
      queryByTestId("AppLayout-Select-LanguageSelect")
    ).toBeInTheDocument();
    
    fireEvent.mouseDown(queryByRole("button"));
    expect(queryByTestId("AppLayout-option-code")).toBeInTheDocument();
    act(() => {
      const options = queryAllByRole("option");
      fireEvent.mouseDown(options[1]);
      options[1].click();
    });
  });
});
