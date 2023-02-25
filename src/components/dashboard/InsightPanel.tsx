import { Card, Typography } from '@mui/material';
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';


interface IInsightPanelProps {
  foo?: string;
}

const InsightPanel: React.FunctionComponent<IInsightPanelProps> = (props) => {
    const pcData = [
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
    ]
  return (
    <>
      <div className='flex flex-row flex-wrap items-center justify-around text-center'>
        <Card className='w-[33%]'>
        <PieChart data={pcData} radius={30}></PieChart>
          <Typography>Waiting</Typography>
          <Typography>10</Typography>

        </Card>
        <Card className='w-[33%]'>
          <Typography>Processing</Typography>
          <Typography>3</Typography>

        </Card>
        <Card className='w-[33%]'>
          <Typography>To debrief</Typography>
          <Typography>1</Typography>

        </Card>
      </div>
    </>
  );
};

export default InsightPanel;
