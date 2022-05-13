const  ActionTypes = {
   UPDATE_INCOME: 'app/UPDATE_INCOME',
   LOAD_INITIAL_DATA: 'app/LOAD_INITIAL_DATA',
   UPDATE_BILLS:'app/UPDATE_BILLS',
   DELETE_EXPENSE: 'app/DELETE_EXPENSE'
}
export const billTypeText = {
    electricityBill: 'Electricity Bill',
    mobileBill: 'Mobile Bill'
}
export const imageSource =
  "https://assets.website-files.com/6231e693006d733616e2ace5/6231e693006d73d0fbe2ad23_logo2.svg";

export const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb"
    },
    {
      code: "hi",
      name: "हिन्दी",
      country_code: "in"
    }
  ];
  export const colors = ['1F1FFF','#0080bf', '#00acdf', '#55d0ff', '#7ce8ff',
  '#ccf9ff'];
  export  let options = {
    sankey: {
      node: {
        colors: colors,
        label: {
          fontName: "sans-serif",
          fontSize: 10,
          color: "#000",
          bold: true,
          italic: false
        },
        interactivity: false 
      },
      link: {
        colorMode: 'gradient',
        colors: colors
      }
    }
  };
  export default ActionTypes;
