import {
  Button,
  Typography,
} from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LoginAvatar from './LoginAvatar';
import NavItem from './NavItem';

const NavBar: React.FunctionComponent = () => {
  const router = useRouter();
  const [selectedHref, setSelectedHref] = useState(router.pathname);
  const session = useSession();

  useEffect(() => {
    setSelectedHref(router.pathname);
  }, [router.pathname]);

  const navItems: { href: string; text: string }[] = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/help', text: 'Help' },
    { href: '/pricing', text: 'Pricing' },
  ];
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 bg-black p-3 text-white">
      <div className="flex flex-wrap items-center">
        {navItems.map((c) => (
          <NavItem
            key={c.href}
            onClick={(_e: any) => setSelectedHref(c.href)}
            isSelected={c.href === selectedHref}
            href={c.href}
          >
            {c.text}
          </NavItem>
        ))}
      </div>
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

export default NavBar;
