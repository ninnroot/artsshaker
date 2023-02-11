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
      <div>
        {isSelected ? (
          <Typography
            variant="button"
            className="hover:text-white p-3 px-3 mx-2 rounded-lg underline"
          >
            {children}
          </Typography>
        ) : (
          <Typography
            variant="button"
            className="hover:text-white p-3 px-3 mx-2 rounded-lg"
          >
            {children}
          </Typography>
        )}
      </div>
    </Link>
  );
};

export default NavItem;
