// app/components/AuthButtons.js
'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  console.log("session", session);
  if (session) {
    return (
      <>
        <p>Welcome, {session.user.name}/{session.accessToken}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return <button onClick={() => signIn("google")}>Sign in with Google</button>;
}
