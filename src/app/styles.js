import { createStyles } from '@material-ui/core';

const imageURL =
  "https://assets.website-files.com/6231e693006d733616e2ace5/6231e693006d733ed4e2adf2_1440.svg";
function styles() {
  return createStyles({
   headerStyle:{
    position: 'fixed',
    left: '0%',
    top: '0%',
    right: '0%',
    bottom: 'auto',
    zIndex: 999,
    backgroundColor: 'hsla(0, 0%, 100%, 0.9)',
    color: '#6d6e6d',
    width: '100%',
   },
   headerContainer:{
     width: 'inherit',
     padding:'1rem',
     display: 'inline-block',
     height: 'inherit',
   },
   centime_logo:{
     width: '10rem', 
     display:'inline',
   },
   logo:{
     width: 'inherit'
   },
   contentContainer: {
    height: "37rem",
    backgroundImage: `url(${imageURL})`,
    display: 'flex',
  },
  sankeyGraphAlign:{
    width: 'fit-content',
    height: 'fit-content',
    padding: '10px',
  },
  contentAlign:{
    display:'inherit',
    width: '80%',
    margin: 'auto',
  },
  formControl: {
    margin: '2rem',
    minWidth: '6rem',
  },
  root: {
    display: 'inline',
    flexWrap: 'wrap',
    float: 'right',
  },
  });
}

export default styles;
