'use client';
import { Paper, PaperProps, Text } from '@mantine/core';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { GoogleButton } from '../GoogleButton';
import { TwitterButton } from '../TwitterButton';

type Props = PaperProps & {
  //
};

export const LoginForm: React.FC<Props> = ({ ...props }) => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status !== 'authenticated') {
    return (
      <Paper radius='md' p='xl' withBorder {...props}>
        <GoogleButton
          radius='xl'
          onClick={() =>
            signIn('google', { callbackUrl: '/' }, { prompt: 'login' })
          }
        >
          Google
        </GoogleButton>
        <TwitterButton radius='xl'>Twitter</TwitterButton>
      </Paper>
    );
  }
};
