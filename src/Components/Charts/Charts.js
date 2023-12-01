import  {useEffect,useState} from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

export default function CombinedComponent(props) {
  const { data,selectedKPI } = props;
const [chartData,setChartData] = useState();


const groupbyData = () =>{

  if (data && data.length > 0) {
 
    data.sort((a, b) => (a.time < b.time ? -1 : 1));

     const uniqueData = Array.from(new Set(data.map((dataPoint) => dataPoint.ne)));

     const uniqueLabelsSet = new Set(data.map((dataPoint) => dataPoint.time));
     const uniqueLabels = Array.from(uniqueLabelsSet).sort();

     const newDatasets = uniqueData.map((unique, index) => ({
       label: unique,
       borderWidth: 5,
       data: data
         .filter((dataPoint) => dataPoint.ne === unique)
         .map((dataPoint) => ({
           x: dataPoint.time,
           y: dataPoint[selectedKPI],
         }))
     }));

     const newData = {
       labels: uniqueLabels,
       datasets: newDatasets,
     };

     setChartData(newData);
    }
 
}
  
  useEffect(() => {
    console.log("data in chart:", data);
    groupbyData();
  }, [data,selectedKPI]);

  // Extract the relevant data from the API response
  const rsL_INPUT_POWER = data.map(item => item.rsL_INPUT_POWER);
  const maxRxLevel = data.map(item => item.maxRxLevel);
  const rsL_Deviation = data.map(item => item.rsL_Deviation);

  return (
    <div>
      {data.length > 0 ? (
        <LineChart
        width={1800}
        height={700}
        series={chartData ? chartData.datasets.map(dataset => ({ data: dataset.data.map(item => item.y), label: dataset.label })) : []}
        xAxis={[{ scaleType: 'point', data: chartData ? chartData.labels : [] }]}
      />
      ) : (
        <Stack
          sx={{
            height: '50vh',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Alert
            severity="warning"
            sx={{
              fontSize: '2rem', 
              width: '35%', 
            }}
          >
            <AlertTitle>Warning</AlertTitle>
            The data is empty — <strong>check it out!</strong>
          </Alert>
        </Stack>
      )}
    </div>
  );
}
