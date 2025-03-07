'use client';
import { Button, Stack } from '@mantine/core';
import { LogoutButton } from '@/components/LogoutButton';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState('');

  const getData = async () => {
    const response = await axios.get('/api/users');
    setData(JSON.stringify(response, null, 2));
  };

  return (
    <div>
      <Stack>
        <h1>Home</h1>
        <Button onClick={() => getData()}>users GET</Button>
        <pre>
          <code>{data}</code>
        </pre>
        <LogoutButton />
      </Stack>
    </div>
  );
}
