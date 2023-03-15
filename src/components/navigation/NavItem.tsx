import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface IProps {
  href: string;
  children: React.ReactNode;
  isSelected: boolean;
  onClick: any;
  index: 'left' | 'right' | null;
}

const NavItem: React.FunctionComponent<IProps> = ({
  href,
  children,
  isSelected,
  onClick,
  index,
}) => {

  return (
    <Link href={href} onClick={onClick}>
      <div className="">
        {isSelected ? (
          index === 'left' ? (
            <Typography
              variant="subtitle1"
              className="rounded-l-2xl p-2 px-4 bg-white bg-opacity-30"

            >
              {children}
            </Typography>
          ) : index === 'right' ? (
            <Typography
              variant="subtitle1"
              className="rounded-r-2xl p-2 px-4 bg-white bg-opacity-30"
            >
              {children}
            </Typography>
          ) : (
            <Typography
              variant="subtitle1"
              className="p-2 px-4 bg-white bg-opacity-30"
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
