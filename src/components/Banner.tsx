import { Card, Typography } from '@mui/material';
import React from 'react';

interface BannerProps {
  title: string;
  tagline?: string;
  btn1?: React.ReactNode;
  btn2?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ title, tagline, btn1, btn2 }) => {
  return (
    <Card className="bg-jasmine flex flex-col items-center justify-center">
      <Typography variant="h2" className="p-10 font-header">
        {title}
      </Typography>
      {tagline && <Typography variant="h6" className='font-body2'>{tagline}</Typography>}
      <div className="flex flex-row items-center justify-center gap-5 m-10 flex-wrap">
        {btn1}
        {btn2}
      </div>
    </Card>
  );
};

export default Banner;
