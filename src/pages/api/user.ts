// pages/api/user.ts

import { ironOptions } from "@/lib/config/iron-config";
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  function userRoute(req, res) {
    res.send({ user: req.session.user });
  },
  ironOptions
);