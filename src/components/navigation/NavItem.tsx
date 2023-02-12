import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface IProps {
  href: string;
  children: React.ReactNode;
  isSelected: boolean;
  onClick: any;
}

const NavItem: React.FunctionComponent<IProps> = ({
  href,
  children,
  isSelected,
  onClick,
}) => {
  return (
    <Link href={href} onClick={onClick}>
      <div className="m-2 rounded-lg p-2">
        {isSelected ? (
          <Typography variant="subtitle1" className="rounded-lg underline">
            {children}
          </Typography>
        ) : (
          <Typography variant="subtitle1" className="rounded-lg">
            {children}
          </Typography>
        )}
      </div>
    </Link>
  );
};

export default NavItem;
