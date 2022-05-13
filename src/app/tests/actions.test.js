import ActionTypes from "../constants";

import {
  loadInitialData,
  updateIncomeInStore,
  updateBillsInStore,
  deleteExpenseInStore
} from "../actions";

describe("App Actions", () => {
  describe("loadInitialData", () => {
    it("should return the correct action", () => {
      const initialData = {
        income: 5000,
        bills: {
          electricityBill: 2000,
          mobileBill: 1000
        }
      };
      const expectedResult = {
        type: ActionTypes.LOAD_INITIAL_DATA,
        payload: initialData
      };

      expect(loadInitialData(initialData)).toEqual(expectedResult);
    });
  });
  describe("updateIncomeInStore", () => {
    it("should return the correct action", () => {
      const incomeData = 1000;
      const expectedResult = {
        type: ActionTypes.UPDATE_INCOME,
        payload: incomeData
      };

      expect(updateIncomeInStore(incomeData)).toEqual(expectedResult);
    });
  });
  describe("updateBillsInStore", () => {
    it("should return the correct action", () => {
      const billsData = { key: "electricityBill", value: 1000 };
      const expectedResult = {
        type: ActionTypes.UPDATE_BILLS,
        payload: billsData
      };

      expect(updateBillsInStore(billsData)).toEqual(expectedResult);
    });
  });
  describe("deleteExpenseInStore", () => {
    it("should return the correct action", () => {
      const deleteData = "electricityBill";
      const expectedResult = {
        type: ActionTypes.DELETE_EXPENSE,
        payload: deleteData
      };

      expect(deleteExpenseInStore(deleteData)).toEqual(expectedResult);
    });
  });
});
