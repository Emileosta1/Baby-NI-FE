import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup(props) {

  const [selectedValue, setSelectedValue] = useState(props.data[1]);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    props.onRadioChange(value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{props.data[0]}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedValue}
        onChange={handleRadioChange}
      >
        <FormControlLabel value={props.data[1]} control={<Radio />} label={props.data[1]} />
        <FormControlLabel value={props.data[2]}  control={<Radio />} label={props.data[2]} />
      </RadioGroup>
    </FormControl>
  );
}