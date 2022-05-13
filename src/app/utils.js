import { billTypeText } from "./constants";

export const getSankeyData = (data, t) => {
  const resuLTArray = [["From", "To", `${t("weight")}`]];
  const { income, bills } = data;
  resuLTArray.push([`${t("salary")}`, `${t("budget")}`, income]);
  if (bills) {
    const billsValue = Object.values(bills);
    const totalBill = billsValue.reduce((acc, val) => {
      return acc + val;
    }, 0);
    resuLTArray.push([`${t("budget")}`, `${t("bills")}`, totalBill]);
    for (let item in bills) {
      resuLTArray.push([
        `${t("bills")}`,
        `${t(billTypeText[item])}`,
        bills[item]
      ]);
    }
  }

  return resuLTArray;
};
