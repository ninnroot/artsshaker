// pages/api/logout.ts

import { ironOptions } from '@/lib/config/iron-config';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export default withIronSessionApiRoute(function logoutRoute(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  req.session.destroy();
  res.send({ ok: true });
},
ironOptions);
