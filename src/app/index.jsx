/** APP-index file*/
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { getIncome, getBills, getBudget, getCode } from "./selectors";
import {
  loadInitialData,
  updateIncomeInStore,
  updateBillsInStore,
  deleteExpenseInStore
} from "./actions";
import App from "./layout";

//**COMPONENT */
const AppContainer = (props) => {
  const { loadInitialData } = props;

  //**EFFECTS */
  useEffect(() => {
    loadInitialData({
      income: 5000,
      bills: {
        electricityBill: 2000,
        mobileBill: 1000
      }
    });
  }, [loadInitialData]);
return (<App {...props} />);
};

const mapStateToProps = createStructuredSelector({
  income: getIncome,
  bills: getBills,
  budget: getBudget,
  code: getCode,
});

const mapDispatchToProps = dispatch => {
  return {
    loadInitialData: (payload) => {
      dispatch(loadInitialData(payload));
    },
    updateIncomeInStore: (payload) => {
      dispatch(updateIncomeInStore(payload));
    },
    updateBillsInStore: (payload) => {
      dispatch(updateBillsInStore(payload));
    },
    deleteExpenseInStore: (payload) =>{
      dispatch(deleteExpenseInStore(payload));
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(AppContainer);
