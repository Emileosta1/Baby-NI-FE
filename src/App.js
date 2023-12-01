import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ResponsiveAppBar from './Components/Header/Header';
import RowRadioButtonsGroup from './Components/RadioButtons/RadioGroup';
import SimpleLineChart from './Components/Charts/Charts';
import SelectAutoWidth from './Components/SelectAutoWidth';
import CustomizedTables from './Components/Grid/Table'; 

import './App.css';

const timely = ["Time: ", "Hourly", "Daily"];
const ne = ["Aggregation Type: ", "NeAlias", "NeType"];

function App() {
  const [data, setData] = useState([]);
  const [selectedTimely, setSelectedTimely] = useState("Hourly");
  const [selectedNe, setSelectedNe] = useState("NeAlias");
  const [startDate, setStartDate] = useState(dayjs('2020-03-11'));
  const [endDate, setEndDate] = useState(dayjs('2020-03-12'));
  const [selectedKPI, setSelectedKPI] = useState("rsL_Deviation");

  const handleStartDateChange = (newDate) => {
    setStartDate(newDate);
  };

  const handleEndDateChange = (newDate) => {
    setEndDate(newDate);
  };

  const setComingData = (response) => {
    setData(response);
  };

  const handleKPIChange = (value) => {
    console.log('Selected KPI:', value);
    setSelectedKPI(value);
  };

  useEffect(() => {
    getdata();
  }, [selectedTimely, selectedNe, startDate, endDate]);

  const getdata = () => {
    let tableName = selectedTimely === "Hourly" ? "TRANS_MW_AGG_SLOT_HOURLY" : "TRANS_MW_AGG_SLOT_DAILY";

    axios.post('https://localhost:7241/api/GetData/get-data', {
      "ne": selectedNe.toString(),
      "table": tableName,
      "timeStart": startDate.format(),
      "timeEnd": endDate.format()
    })
      .then(response => {
        setComingData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  return (
    <div className="App">
      <ResponsiveAppBar />
      <div className="filters">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="filter-row">
            <DateTimePicker
              label="Start Date and Time"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <DateTimePicker
              label="End Date and Time"
              value={endDate}
              onChange={handleEndDateChange}
            />
            <RowRadioButtonsGroup data={timely} onRadioChange={(value) => setSelectedTimely(value)} />
            <RowRadioButtonsGroup data={ne} onRadioChange={(value) => setSelectedNe(value)} />
            <SelectAutoWidth onKPIChange={handleKPIChange} />
          </div>
        </LocalizationProvider>
      </div>
      <div className="body">
        <SimpleLineChart data={data} selectedKPI ={selectedKPI} />
        <CustomizedTables data={data}  />
      </div>
    </div>
  );
}

export default App;
