import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";
import { billTypeText } from "../../app/constants";
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

  //** handle effects */
  useEffect(() => {
    updateIncomeValue(income);
  }, [income]);
  useEffect(() => {
    updateBillsValue(bills);
  }, [bills]);
  //**Ui update methods. */
  const updateIncome = ({ target: { value = "" } = {} }) => {
    const parseValue = Number(value);
    updateIncomeInStore(parseValue);
  };
  const updateBills = ({ target: { value = "", id = "" } = {} }) => {
    const parseValue = Number(value);
    updateBillsInStore({ key: id, value: parseValue });
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
      />
      <button
        onClick={() => deleteExpenseInStore(data)}
        data-testid="DataInput_button_delete"
      >
        {t("delete_button")}
      </button>
    </div>
  );
  let billsArr = [];
  for (let item in billsValue) {
    billsArr.push(renderBills(item));
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
        />
      </div>
      {billsArr.map(item => item)}
    </div>
  );
}

export default withStyles(styles)(DataInput);
