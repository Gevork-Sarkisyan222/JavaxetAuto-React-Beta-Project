import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { NumericFormat } from 'react-number-format';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import '../App.css';





const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  props,
  ref,
) {
  const { onChange, ...other  } = props;

  

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      // prefix="₾"
    />
  );
});

NumericFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs({ onChangeAddMoney, changeAddMoney }) {
  const [values, setValues] = React.useState({
    textmask: '(100) 000-0000',
    numberformat: '0',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
      {/* lari icon */}
      {changeAddMoney &&  <img className='lari-symbol-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sign_of_Georgian_Lari.svg/800px-Sign_of_Georgian_Lari.svg.png" alt='lari-symbol icon' />}
    
      <TextField
        className="AddMoney-component-input"
        sx={{width:"250px"}}
        label="Сумма"
        value={values.numberformat}
        onChange={handleChange}
        onChangeCapture={onChangeAddMoney}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumericFormatCustom,
        }}
        variant="filled"



      />
    </Box>
  );
}