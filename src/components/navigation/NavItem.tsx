import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface IProps {
  href: string;
  children: React.ReactNode;
  isSelected: boolean;
  onClick: any;
  index: "left" | "right" | null;
}

const NavItem: React.FunctionComponent<IProps> = ({
  href,
  children,
  isSelected,
  onClick,
  index,
}) => {
  const glassStyleConfig = {
    boxShadow: '0 0 10px 1px rgba(0, 0, 0, .25)',
    backdropFilter: 'blur(15px)',
    background: 'rgba(255, 255, 255, 0.1)',
  }
  return (
    <Link href={href} onClick={onClick}>
      <div className="">
        {isSelected ? (
          index === "left" ? (
            <Typography
              variant="subtitle1"
              className="rounded-l-2xl p-2 px-4"
              style={glassStyleConfig}
            >
              {children}
            </Typography>
          ) : index==="right" ? (
            <Typography
              variant="subtitle1"
              className="rounded-r-2xl p-2 px-4"
              style={glassStyleConfig}
            >
              {children}
            </Typography>
          ) :(
            <Typography
              variant="subtitle1"
              className="p-2 px-4"
              style={glassStyleConfig}
            >
              {children}
            </Typography>
          ) 
        ) : (
          <Typography variant="subtitle1" className="p-2 px-4">
            {children}
          </Typography>
        )}
      </div>
    </Link>
  );
};

export default NavItem;
