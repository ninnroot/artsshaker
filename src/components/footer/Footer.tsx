import { Typography } from '@mui/material';
import React from 'react';

const Footer: React.FunctionComponent = () => {
  return (
    <>
      <footer className="bg-black text-center text-white">
        <Typography variant="subtitle1" className="p-1">
          Developed by Thiha &#169; {new Date().getFullYear()}
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
