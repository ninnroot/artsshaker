import { ironOptions } from "@/lib/config/iron-config";
import {withIronSessionApiRoute} from "iron-session/next"
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
interface User {
    id: number;
    name: string;
}
declare module "iron-session" { 
    interface IronSessionData { 
      user?: User; 
    } 
  } 
export default withIronSessionApiRoute(
    async function loginRoute(req: NextApiRequest, res: NextApiResponse){
        try{
            const r = await axios.get("https://discord.com/api/oauth2/authorize?client_id=1075686808815407175&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fcallback&response_type=code&scope=identify")
            req.session.user = r.data
            req.session.save()
            res.send(r.data)
        } catch (err) {
            res.send(err)
        }
    },
    ironOptions
)