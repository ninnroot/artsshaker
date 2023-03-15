import { MenuOutlined } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import LoginAvatar from '../navigation/LoginAvatar';

interface ITopBarProps {
    onMenuClick?: any;
}

const TopBar: React.FunctionComponent<ITopBarProps> = ({onMenuClick}) => {
  const session = useSession();
  return (
    <nav className="flex justify-between items-center text-white p-4 py-3">
    <Button onClick={onMenuClick} className="text-white">
      <MenuOutlined ></MenuOutlined>
    </Button>
      {session.data?.user ? (
        <LoginAvatar user={session.data.user}></LoginAvatar>
      ) : (
        <Button variant="contained" onClick={(e) => signIn()}>
          <Typography variant="button">Log In</Typography>
        </Button>
      )}
    </nav>
  );
};

export default TopBar;
