import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord"

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: String(process.env["DISCORD_CLIENT_ID"]),
            clientSecret: String(process.env["DISCORD_CLIENT_SECRET"]),
            // authorization:"http://localhost:3000/api/auth/callback/discord/authorize"
        })
    ],
    
})