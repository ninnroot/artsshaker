import { Button, Typography } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
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
    { href: '/pricing', text: 'Pricing' },
    { href: '/help', text: 'Help' },
  ];
  return (
    <nav className="flex flex-wrap items-center justify-between bg-gradient-to-r from-gradient-asteroidFrom to-gradient-asteroidTo p-3 text-white">
      <div className='flex items-center gap-5'>
      <Image src="/logo-column.png" width="30" height="60" alt="artshaker logo" className=' object-cover'></Image>
      <div className="flex flex-wrap items-center rounded-2xl bg-blue-200 bg-opacity-20 backdrop-blur-sm backdrop-filter">
        {navItems.map((c, i) => (
          <NavItem
            index={
              i === 0 ? 'left' : i === navItems.length - 1 ? 'right' : null
            }
            key={c.href}
            onClick={(_e: any) => setSelectedHref(c.href)}
            isSelected={c.href === selectedHref}
            href={c.href}
          >
            {c.text}
          </NavItem>
        ))}
      </div>
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
