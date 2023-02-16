import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = {
        code: req.query.code,
        client_id: String(process.env["DISCORD_CLIENT_ID"]),
        client_secret: String(process.env["DISCORD_CLIENT_SECRET"]),
        grant_type: "client_credentials",
        'scope': 'identify connections'
    }
    const r = await axios.post("https://discord.com/api/v10/oauth2/token", data, {headers: {"Content-Type": "application/x-www-form-urlencoded"}})
    const g = await axios.get("https://discord.com/api/v10/oauth2/@me", {headers: {"Authorization": `Bearer ${r.data.access_token}`}})
    res.redirect(``)
  }