import { createStyles } from '@material-ui/core';

function styles() {
  return createStyles({
    dataInputContainer:{
        width: '50%',
    },
    inputSpanStyle:{
        display:'inline-block',
        width: '20%'
    },
    errorStyle:{
        color:'#FF0000',
    },
    formControl:{ 
        width: '8rem',
    }
  });
}

export default styles;
