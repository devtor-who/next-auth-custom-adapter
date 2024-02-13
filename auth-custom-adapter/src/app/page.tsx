'use client';

import { signInCredential, signInGithub, signOutApp } from '@/actions';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => signInGithub()}>login</button>
      <button onClick={() => signInCredential()}>credential login</button>
      <button onClick={() => signOutApp()}>logout</button>
    </main>
  );
}
