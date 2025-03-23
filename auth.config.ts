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
    async redirect({ url, baseUrl }: any) {
      // Check if the URL has a `redirect_uri` query parameter
      const redirectUri = new URLSearchParams(url).get('redirect_uri');
      console.log(redirectUri)
      if (redirectUri) {
        return redirectUri;  // Redirect to the custom redirect_uri
      }
      return baseUrl;  // Default to the base URL (e.g., homepage)
    }
  },
};

// export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
