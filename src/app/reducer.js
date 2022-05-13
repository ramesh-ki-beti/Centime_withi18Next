import produce from "immer";
import ActionTypes from "./constants";

const initialState = {
  budget: {
    income: 0,
    bills: {}
  }, 
  code: document && document.querySelector('html').lang
};

const rootReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.LOAD_INITIAL_DATA:
        draft.budget = action.payload;
        break;
      case ActionTypes.UPDATE_INCOME:
        draft.budget.income = action.payload;
        break;
      case ActionTypes.UPDATE_BILLS: {
        const { key, value } = action.payload;
        const bills = draft.budget.bills;
        bills[key] = value;
        draft.budget.bills = bills;
        break;
      }
      case ActionTypes.DELETE_EXPENSE: {
        const bills = draft.budget.bills;
        delete bills[action.payload];
        draft.budget.bills = bills;
        break;
      }
      default:
        return state;
    }
  });
export default rootReducer;
