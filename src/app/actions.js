
import ActionTypes from './constants';

export function loadInitialData(payload) {
    return {
      type: ActionTypes.LOAD_INITIAL_DATA,
      payload,
    };
  }
export function updateIncomeInStore(payload){
    debugger;
    return {
        type: ActionTypes.UPDATE_INCOME,
        payload,
    }
}
export function updateBillsInStore(payload){
    return {
        type: ActionTypes.UPDATE_BILLS,
        payload,
    }
}
export function deleteExpenseInStore(payload){
    return {
        type: ActionTypes.DELETE_EXPENSE,
        payload,
    }
}