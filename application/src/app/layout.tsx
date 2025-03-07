import type { Metadata } from 'next';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { NextAuthProvider } from '@/providers/NextAuth';
import { theme } from '@/theme';

export const metadata: Metadata = {
  title: 'トリアエズナマの会 第４回',
  description: 'APIを使って見よう',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <MantineProvider theme={theme}>
          <NextAuthProvider>{children}</NextAuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
