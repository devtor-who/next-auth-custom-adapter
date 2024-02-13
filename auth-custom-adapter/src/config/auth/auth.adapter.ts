import { Adapter, AdapterAccount, AdapterSession, AdapterUser } from '@auth/core/adapters';
import { Awaitable } from '@auth/core/types';

export const CustomAdapter = {
  createUser(user: AdapterUser): Awaitable<AdapterUser> {
    console.log(CustomAdapter.createUser.name);
    return user;
  },
  getUser(id: string): Awaitable<AdapterUser | null> {
    console.log(CustomAdapter.getUser.name);
    return null;
  },
  getUserByEmail(email: string): Awaitable<AdapterUser | null> {
    console.log(CustomAdapter.getUserByEmail.name);
    return null;
  },
  getUserByAccount(
    providerAccountId: Pick<AdapterAccount, 'provider' | 'providerAccountId'>
  ): Awaitable<AdapterUser | null> {
    console.log(CustomAdapter.getUserByAccount.name);
    console.log(providerAccountId);
    return null;
  },
  updateUser(user: Partial<AdapterUser> & Pick<AdapterUser, 'id'>): Awaitable<AdapterUser> {
    console.log(CustomAdapter.updateUser.name);
    return {
      id: '',
      email: '',
      emailVerified: null,
    };
  },
  linkAccount(account: AdapterAccount): Promise<void> | Awaitable<AdapterAccount | null | undefined> {
    console.log(CustomAdapter.linkAccount.name);
    console.log(account);
    return null;
  },
  createSession(session: { sessionToken: string; userId: string; expires: Date }): Awaitable<AdapterSession> {
    console.log(CustomAdapter.createSession.name);
    console.log(session);
    return session;
  },
  getSessionAndUser(sessionToken: string): Awaitable<{ session: AdapterSession; user: AdapterUser } | null> {
    console.log(CustomAdapter.getSessionAndUser.name);
    console.log(sessionToken);
    return {
      user: { id: '', email: '', emailVerified: null },
      session: { sessionToken, expires: new Date(), userId: '' },
    };
  },
  updateSession(
    session: Partial<AdapterSession> & Pick<AdapterSession, 'sessionToken'>
  ): Awaitable<AdapterSession | null | undefined> {
    console.log(CustomAdapter.updateSession.name);
    return null;
  },
  deleteSession(sessionToken: string): Promise<void> | Awaitable<AdapterSession | null | undefined> {
    console.log(CustomAdapter.deleteSession.name);
    return null;
  },
} satisfies Adapter;
