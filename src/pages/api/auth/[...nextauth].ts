import NextAuth from 'next-auth/next';
import DiscordProvider from 'next-auth/providers/discord';
import { signIn } from 'next-auth/react';

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: String(process.env['DISCORD_CLIENT_ID']),
      clientSecret: String(process.env['DISCORD_CLIENT_SECRET']),
      authorization:"https://localhost:443/api/auth/callback/discord/authorize"
    }),
  ],
  callbacks: {
    async signIn({user, account, profile}){
        console.log(user, account, profile)
        return true
    }
  }
});
