import React from "react";
import { useTranslation } from "react-i18next";
import { InputLabel, FormControl, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import i18Next from "i18next";
import DataInput from "../components/dataInput";
import SankeyChart from "../components/sankeyChart";
import styles from "./styles";
import { getSankeyData } from "./utils";
import { imageSource, languages } from "./constants";
import { options } from "./constants";

function App({
  classes,
  income,
  bills,
  updateIncomeInStore,
  budget,
  updateBillsInStore,
  deleteExpenseInStore,
  code
}) {
  const { t } = useTranslation();
  const [sankeyData, updateSankeyData] = React.useState();
  const [codeValue, setCode] = React.useState(code);

  React.useEffect(() => {
    const sankeyData = getSankeyData(budget, t);
    updateSankeyData(sankeyData);
  }, [budget, t]);

  const handleLanguageChange = e => {
    setCode(e.target.value);
    i18Next.changeLanguage(e.target.value);
  };
  return (
    <div className="App" data-testid="AppLayout-div-renderDocument">
      <header className={classes.headerStyle}>
        <div className={classes.headerContainer}>
          <div className={classes.centime_logo}>
            <img
              src={imageSource}
              alt="Centime Logo"
              className={classes.logo}
              data-testid="AppLayout-img-Centime_Logo"
            />
          </div>
          <div className={classes.root}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-helper">Language</InputLabel>
              <Select
                value={codeValue}
                onChange={handleLanguageChange}
                key={"native_select"}
                data-testid="AppLayout-Select-LanguageSelect"
              >
                {languages.map(({ code, name, country_code }) => (
                  <MenuItem
                    value={code}
                    key={country_code}
                    data-testid={`AppLayout-option-code`}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </header>
      <div className={classes.contentContainer}>
        <div className={classes.contentAlign}>
          <DataInput
            income={income}
            bills={bills}
            updateIncomeInStore={updateIncomeInStore}
            updateBillsInStore={updateBillsInStore}
            deleteExpenseInStore={deleteExpenseInStore}
          />
          <SankeyChart
            customClass={classes.sankeyGraphAlign}
            sankeyData={sankeyData}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);
