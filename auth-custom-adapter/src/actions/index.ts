'use server';

import { signIn, signOut } from '@/config/auth/auth';

export async function signInCredential() {
  return await signIn('credentials');
}
export async function signInGithub() {
  return await signIn('github');
}

export async function signOutApp() {
  return await signOut({ redirect: true, redirectTo: '/' });
}
