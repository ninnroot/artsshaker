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
    <Card
      className="flex flex-col items-center justify-center rounded-none text-white"
      style={{ background: 'linear-gradient(to right, #141e30, #243b55)' }}
    >
      <Typography variant="h2" className="p-10 pb-2 font-header">
        {title}
      </Typography>
      {tagline && (
        <Typography variant="h6" className="font-title">
          {tagline}
        </Typography>
      )}
      <div className="m-10 flex flex-row flex-wrap items-center justify-center gap-7">
        {btn1}
        {btn2}
      </div>
    </Card>
  );
};

export default Banner;
