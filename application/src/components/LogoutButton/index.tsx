'use client';
import { Button, ButtonProps } from '@mantine/core';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

type Props = ButtonProps;

export const LogoutButton: React.FC<Props> = ({ ...props }) => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <div>
        <Button onClick={() => signOut()}>ログアウト</Button>
      </div>
    );
  }

  return null;
};
