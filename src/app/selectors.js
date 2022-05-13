import { createSelector } from 'reselect';

export const getIncome = createSelector(
  state => state,
  state => state.budget ? state.budget.income: 0,
);
export const getBills = createSelector(
    state => state,
    state => state.budget ? state.budget.bills : {}
)
export const getBudget = createSelector(
    state => state,
    state => state.budget || {}
)
export const getCode = createSelector(
    state => state,
    state => state.code || 'en'
)