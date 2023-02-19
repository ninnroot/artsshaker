import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import { NextApiRequest, NextApiResponse } from "next";

require("dotenv").config()

const options = {

  // Configure one or more authentication providers
  providers: [
    // GitHubProvider({
    //     clientId: process.env.GITHUB_ID,
    //     clientSecret: process.env.GITHUB_SECRET,
    // }),
    DiscordProvider({
        clientId: String(process.env.DISCORD_CLIENT_ID),
        clientSecret: String(process.env.DISCORD_CLIENT_SECRET)
    }),
  ],

}

function Auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, options)
}

export default Auth;