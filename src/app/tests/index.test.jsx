import React from "react";
import {
  render,
  cleanup,
  fireEvent,
} from "react-testing-library";
import "jest-dom/extend-expect";
import configureStore from "../../store/configureStore";
import wrapperComponent from "../../testUtils/wrapperComponent";
import AppContainer from "../index";
import * as actions from "../actions";
jest.mock("i18next", () => ({
  // this mock makes sure any components using the changeLanguage hook can use it without a warning being shown
  changeLanguage: () => () => new Promise(() => {})
}));
jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: str => str
    };
  }
}));
const mockBillsData = {
  electricityBill: 2000,
  mobileBill: 1000
};
const mockBudgetData = {
  income: 5000,
  bills: {
    electricityBill: 2000,
    mobileBill: 1000
  }
};
describe("AppContainer", () => {
  const state = {
    budget: {
      income: 0,
      bills: {}
    },
    code: "en"
  };
  const store = configureStore(state);
  const WrapperApp = wrapperComponent(
    /**@ts-ignore*/
    <AppContainer
      income={5000}
      bills={mockBillsData}
      budget={mockBudgetData}
      code="en"
    />,
    store
  );
  afterEach(() => {
    cleanup;
    jest.clearAllMocks();
  });
  it("renders correctly", () => {
    const updateIncomeInStoreSpy = jest.spyOn(actions, "updateIncomeInStore");
    const deleteIncomeSpy = jest.spyOn(actions, "deleteExpenseInStore");
    const updateBillsInStoreSpy = jest.spyOn(actions, "updateBillsInStore");
    const { queryByTestId, debug, queryAllByTestId } = render(WrapperApp);
    expect(queryByTestId("AppLayout-div-renderDocument")).toBeInTheDocument();
    const input = queryByTestId("DataInput-input-incomeValue").querySelector(
      "input"
    );
    fireEvent.change(input, { target: { value: "4000" } });
    expect(updateIncomeInStoreSpy).toHaveBeenCalled();
    const button = queryAllByTestId("DataInput_button_delete");
    fireEvent.click(button[0]);
    expect(deleteIncomeSpy).toHaveBeenCalled();

    const billsInput = queryByTestId("DataInput_input_bills").querySelector(
      "input"
    );
    fireEvent.change(billsInput, { target: { value: "100" } });
    expect(updateBillsInStoreSpy).toHaveBeenCalledWith({
      key: "mobileBill",
      value: 100
    });
  });
});
