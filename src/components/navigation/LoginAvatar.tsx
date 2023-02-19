import { ArrowDropDown } from '@mui/icons-material';
import { Avatar, Button, Menu, MenuItem, Typography } from '@mui/material';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface IProps {
  user: any;
}

const LoginAvatar: React.FunctionComponent<IProps> = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="flex items-center gap-2">
        <Link href={`u/${user.name}`}>
          <Avatar src={user.image} className="hover:cursor-pointer"></Avatar>
        </Link>
        <Typography variant="subtitle1">{user.name}</Typography>
        <div
          className="hover:cursor-pointer"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={(e) => handleClick(e)}
        >
          <ArrowDropDown className="text-white"></ArrowDropDown>
        </div>
        <Menu
          disableScrollLock={true}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <Link href={`u/${user.name}`}>
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem onClick={(e) => signOut()}>Logout</MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default LoginAvatar;
