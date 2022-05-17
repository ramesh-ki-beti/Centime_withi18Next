import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Input from "@material-ui/core/Input";
import { InputLabel, FormControl, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { billTypeText } from "../../app/constants";
import { getTotalBill } from "../../app/utils";
import styles from "./styles";

function DataInput({
  classes,
  income,
  bills,
  updateIncomeInStore,
  updateBillsInStore,
  deleteExpenseInStore
}) {
  const { t } = useTranslation(); // for i18Next transalation
  /**state initialization */
  const [incomeValue, updateIncomeValue] = React.useState(income);
  const [billsValue, updateBillsValue] = React.useState(bills);
  const [error, updateErrorValue] = React.useState("");
  const [selectedBill, billSelection] = React.useState("");

  //** handle effects */
  useEffect(() => {
    updateIncomeValue(income);
  }, [income]);
  useEffect(() => {
    updateBillsValue(bills);
  }, [bills]);
  //**Ui update methods. */

  const updateIncome = e => {
    const { value } = e.target;
    const parseValue = parseInt(value, 10);
    if (!isNaN(parseValue)) {
      let error = "";
      const totalBill = getTotalBill(billsValue);
      updateIncomeValue(parseValue);
      if (value >= totalBill) {
        updateIncomeInStore(parseValue);
      } else {
        error = "Income cannot be less than expenses.";
      }
      updateErrorValue(error);
    }
  };

  const updateBills = e => {
    const { value, id } = e.target;
    const parseValue = parseInt(value, 10);
    if (!isNaN(parseValue)) {
      let error = "";
      let billValue = { ...billsValue };
      billValue[id] = parseValue;

      const totalBill = getTotalBill(billValue);
      updateBillsValue(billValue);
      if (income >= totalBill) {
        updateBillsInStore({ key: id, value: parseValue });
      } else {
        error = "Your expenses cannot be greater than your income";
      }
      updateErrorValue(error);
    }
  };
  const handleExpenseAddition = e => {
    const { value } = e.target;
    billSelection(value);
    updateBillsInStore({ key: value, value: 0 });
  };
  const deleteExpense = data => {
    billSelection("");
    deleteExpenseInStore(data);
  };
  //**Render */
  const renderBills = data => (
    <div key={`${data}_id`}>
      <span className={classes.inputSpanStyle}>
        {t(`${billTypeText[data]}`)}
        {}:
      </span>
      <Input
        id={data}
        value={billsValue[data]}
        onChange={updateBills}
        data-testid="DataInput_input_bills"
        autoComplete="off"
      />
      <button
        onClick={() => deleteExpense(data)}
        data-testid="DataInput_button_delete"
      >
        {t("delete_button")}
      </button>
    </div>
  );
  let billsArr = [];
  const expenseArr = [];

  for (let item in billsValue) {
    billsArr.push(renderBills(item));
  }
  for (let expense in billTypeText) {
    if (!billsValue[expense]) {
      expenseArr.push({ key: expense, value: billTypeText[expense] });
    }
  }

  return (
    <div
      data-testid="DataInput-div-container"
      className={classes.dataInputContainer}
    >
      <div>
        <span className={classes.inputSpanStyle}>{t("income_text")}:</span>
        <Input
          id={"income"}
          value={incomeValue}
          onChange={updateIncome}
          data-testid="DataInput-input-incomeValue"
          autoComplete="off"
        />
      </div>
      {billsArr.map(item => item)}
      <div className={classes.errorStyle}>{error}</div>
      <FormControl
        className={classes.formControl}
        data-testid="DataInput-formControl-addExpense"
      >
        <InputLabel
          htmlFor="age-native-helper"
          data-testid="DataInput-formControl-addExpenseLabel"
        >
          {t("add_expense")}
        </InputLabel>
        <Select
          value={selectedBill}
          onChange={handleExpenseAddition}
          key={"native_select"}
        >
          {expenseArr.map(({ key, value }) => (
            <MenuItem
              value={key}
              key={`${value}_key`}
              data-testid="DataInput-menuItem-options"
            >
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default withStyles(styles)(DataInput);
