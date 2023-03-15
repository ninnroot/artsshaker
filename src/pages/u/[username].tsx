import DirectoryContainer from '@/components/directory/DirectoryContainer';
import IDirectory from '@/types/directory';

import { Typography } from '@mui/material';
import { withIronSessionSsr } from 'iron-session/next';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import { NextPageWithLayout } from '../_app';

interface IProps {
  user: { id: number; username: string; avatar: string };
}

const Profile: NextPageWithLayout<IProps> = () => {
  const router = useRouter();

  const user = useSession().data?.user;

  const directories: IDirectory[] = [
    { href: 'https://instagram.com', displayText: 'instagram' },
    { href: 'https://facebook.com', displayText: 'facebook' },
    { href: 'https://linkedin.com', displayText: 'linkedin' },
  ];
  const theme = {
    bg: 'linear-gradient(to right, #fc00ff, #00dbde)',
  };

  return (
    <>
      <div
        className="justify-star flex h-[100vh] flex-col items-center text-white"
        style={{ background: theme.bg }}
      >
        <Typography
          variant="h6"
          className="ml-5 mt-5 self-start rounded-[30%] border-2 border-solid p-2 hover:cursor-pointer hover:border-white hover:border-opacity-30 hover:bg-white hover:bg-opacity-30"
        >
          <Link href="/">Artsshaker</Link>
        </Typography>
        <Image
          src={(user && user?.image + '?size=480') || ''}
          width={100}
          height={100}
          alt="user profile"
          className="mt-20 rounded-[50%] border-2 border-solid border-white shadow-md"
        ></Image>
        <Typography variant="h3" className="mb-4 p-3">
          @{user?.name}
        </Typography>
        <DirectoryContainer directories={directories}></DirectoryContainer>
      </div>
    </>
  );
};

export default Profile;
