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
    <Card className="bg-gray text-white flex flex-col items-center justify-center rounded-none">
      <Typography variant="h2" className="p-10 font-header pb-2">
        {title}
      </Typography>
      {tagline && (
        <Typography variant="h6" className="font-title">
          {tagline}
        </Typography>
      )}
      <div className="flex flex-row items-center justify-center gap-7 m-10 flex-wrap">
        {btn1}
        {btn2}
      </div>
    </Card>
  );
};

export default Banner;
