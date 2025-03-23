import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"; // Import GitHub provider

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
    // You can add other providers if needed, like Google, Facebook, etc.
  ],
  callbacks: {
    async jwt({ token, account, trigger, session }: any) {
      // token.accountlevel = 'lplplpplp';
      if(trigger == 'update') {
        token.accountlevel = session.accountlevel;
      }
        console.log("account", account);
        console.log("token", token);

      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: any) {
      // session.test='kkkkkkkkkk';
        console.log("session", session);
        console.log("token", token);
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

// export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
