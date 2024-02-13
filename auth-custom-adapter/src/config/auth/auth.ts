import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Credentials from '@auth/core/providers/credentials';
import { CustomAdapter } from './auth.adapter';

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      authorize(credentials, request) {
        return {};
      },
    }),
  ],
  adapter: CustomAdapter,
  callbacks: {
    signIn(params) {
      console.log('signIn===============');
      console.log(params);
      return true;
    },
  },
  session: {
    strategy: 'database',
  },
  secret: 'ss',
});
