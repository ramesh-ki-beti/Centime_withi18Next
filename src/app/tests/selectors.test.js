import { getIncome, getBills, getBudget, getCode } from "../selectors";
describe("select Income", () => {
  it("should select income", () => {
    const mockedState = {
      budget: {
        income: 0,
        bills: {}
      }
    };
    expect(getIncome(mockedState)).toEqual(0);
  });
});

describe("select Bills", () => {
  it("should select the bills from store", () => {
    const mockedState = {
      budget: {
        income: 0,
        bills: {}
      }
    };
    const billsValue = {};
    expect(getBills(mockedState)).toEqual(billsValue);
  });
});
describe("select Budget", () => {
  it("should select the budget node from store", () => {
    const mockedState = {
      budget: {
        income: 0,
        bills: {}
      }
    };
    const budget = {
      income: 0,
      bills: {}
    };
    expect(getBudget(mockedState)).toEqual(budget);
  });
});
describe("select code", () => {
  it("should return the language code", () => {
    const mockedState = {
      budget: {
        income: 0,
        bills: {}
      }, 
      code: 'en'
    };
    const mockCode = 'en'
    expect(getCode(mockedState)).toEqual(mockCode);
  });
});
