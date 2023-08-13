import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          sx={{width:"100px"}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>{props.title}</em>
          </MenuItem>
          <MenuItem value={10}>{props.type}</MenuItem>
          <MenuItem value={20}>{props.type2}</MenuItem>
          <MenuItem value={30}>{props.type3}</MenuItem>
          <MenuItem value={30}>{props.type4}</MenuItem>
          <MenuItem value={30}>{props.type5}</MenuItem>
          <MenuItem value={30}>{props.type6}</MenuItem>
          <MenuItem value={30}>{props.type7}</MenuItem>
          <MenuItem value={30}>{props.type8}</MenuItem>
          <MenuItem value={30}>{props.type9}</MenuItem>
        </Select>
        <FormHelperText>{props.title}</FormHelperText>
      </FormControl>
    </div>
  );
}