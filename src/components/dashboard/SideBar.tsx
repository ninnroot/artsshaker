import {
  ChevronLeft,
  ChevronRight,
  InboxRounded,
  Home,
} from '@mui/icons-material';
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface ISideBarProps {
  onChevronClick?: any;
  menuIsOpen: boolean;
}

const SideBar: React.FunctionComponent<ISideBarProps> = ({
  onChevronClick,
  menuIsOpen,
}) => {
  const router = useRouter();

  const [selectedHref, setSelectedHref] = useState(router.pathname);
  useEffect(() => {
    setSelectedHref(router.pathname);
    console.log(router.pathname);
  }, [router.pathname]);

  const menuItems = [
    { displayText: 'Dashbaord', href: '/dashboard' },
    { displayText: 'Clients', href: '/clients' },
    { displayText: 'Manage', href: '/' },
    { displayText: 'Home', href: '/' },
  ];

  return (
    <Drawer
      variant="persistent"
      open={menuIsOpen}
      PaperProps={{
        sx: {
          background: 'rgb(20, 30, 48, 0.7)',
          borderRight: 'solid rgba(0,0,0,0.3) 2px',
          backdropFilter: 'blur(30px)',
        },
      }}
    >
      <List className="text-white">
        <div className="flex items-end justify-end" onClick={onChevronClick}>
          <IconButton className="text-white">
            {menuIsOpen ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        {menuItems.map((c) => (
          <Link key={c.href} href={c.href}>
            {selectedHref === c.href ? (
              <ListItem className="flex gap-2 bg-blue-100 bg-opacity-20 pr-20">
                <Typography>{c.displayText}</Typography>
              </ListItem>
            ) : (
              <ListItem className="flex gap-2 pr-20 hover:bg-blue-100 hover:bg-opacity-20">
                <Typography>{c.displayText}</Typography>
              </ListItem>
            )}
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
