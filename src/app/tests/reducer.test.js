import {
  loadInitialData,
  updateIncomeInStore,
  updateBillsInStore,
  deleteExpenseInStore
} from "../actions";
import produce from "immer";

import AppReducer from "../reducer";

/* eslint-disable default-case, no-param-reassign */
describe("AppReducer", () => {
  let state;
  beforeEach(() => {
    state = {
      budget: {
        income: 0,
        bills: {}
      },
      code: ""
    };
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(AppReducer(undefined, {})).toEqual(expectedResult);
  });

  it("should handle the loadInitialData action correctly", () => {
    const payload = {
      income: 5000,
      bills: {
        electricityBill: 2000,
        mobileBill: 1000
      }
    };
    const expectedResult = produce(state, draft => {
      draft.budget = payload;
    });

    expect(AppReducer(state, loadInitialData(payload))).toEqual(expectedResult);
  });
  it("should handle the updateIncomeInStore action correctly", () => {
    const payload = 500
    const expectedResult = produce(state, draft => {
      draft.budget.income = payload;
    });

    expect(AppReducer(state, updateIncomeInStore(payload))).toEqual(expectedResult);
  });
  it("should handle the updateBillsInStore action correctly", () => {
    const payload = {key:'electricityBill', value: 400}
    const expectedResult = produce(state, draft => {
        const { key, value } = payload;
        const bills = draft.budget.bills;
        bills[key] = value;
        draft.budget.bills = bills;
    });

    expect(AppReducer(state, updateBillsInStore(payload))).toEqual(expectedResult);
  });
  it("should handle the deleteExpenseInStore action correctly", () => {
    const payload = 'electricityBill';
    const expectedResult = produce(state, draft => {
        const bills = draft.budget.bills;
        delete bills[payload];
        draft.budget.bills = bills;
    });

    expect(AppReducer(state, deleteExpenseInStore(payload))).toEqual(expectedResult);
  });

});
