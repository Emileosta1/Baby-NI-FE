import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({ onKPIChange }) {
  const [kpi, setKPI] = React.useState("rsL_Deviation");

  const handleChange = (event) => {
    debugger;
    const selectedKPI = event.target.value;
    setKPI(selectedKPI);

    if (onKPIChange) {
      onKPIChange(selectedKPI);
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">KPI</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={kpi}
          onChange={handleChange}
          autoWidth
          label="KPI"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="rsL_INPUT_POWER">rsL_INPUT_POWER</MenuItem>
          <MenuItem value="maxRxLevel">maxRxLevel</MenuItem>
          <MenuItem value="rsL_Deviation">rsL_Deviation</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
