import { billTypeText } from "./constants";

export const getSankeyData = (data, t) => {
  const resuLTArray = [["From", "To", `${t("weight")}`]];
  const { income, bills } = data;
  resuLTArray.push([`${t("salary")}`, `${t("budget")}`, income]);
  if (bills) {
    const totalBill = getTotalBill(bills);
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

export const getTotalBill = (bills) => {
  const billsArray = Object.values(bills);
  const totalBill = billsArray.reduce((acc, val) => {
    return acc + val;
  }, 0);
  return totalBill;
}