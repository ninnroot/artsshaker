import NextAuth from 'next-auth/next';
import DiscordProvider from 'next-auth/providers/discord';
import {signIn} from "next-auth/react"

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: String(process.env['DISCORD_CLIENT_ID']),
      clientSecret: String(process.env['DISCORD_CLIENT_SECRET']),
    }),
  ],
  // callbacks: { 
  //   async signIn({user, account, profile}){
  //       fetch("https://artsshaker.vercel.app/api/"+user.name)
  //       return true
  //   }
  // }
});