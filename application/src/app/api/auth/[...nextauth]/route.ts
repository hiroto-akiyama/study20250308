import { handlers } from '@/auth'; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;

// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';

// const hander = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET as string,
//     }),
//   ],
// });

// export { hander as GET, hander as POST };
