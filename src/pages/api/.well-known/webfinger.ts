// src/pages/api/.well-known/webfinger.ts
          import type { NextApiRequest, NextApiResponse } from 'next';

          export default function handler(req: NextApiRequest, res: NextApiResponse) {
            const resource = req.query.resource as string;
            if (!resource) {
              res.status(400).json({ error: 'Missing resource parameter' });
              return;
            }

            if (resource === 'acct:travis@travisfriesen.ca') {
              res.status(200).json({
                subject: resource,
                links: [
                  {
                    rel: 'http://openid.net/specs/connect/1.0/issuer',
                    href: 'https://auth.travisf.ca/application/o/tailscale/'
                  }
                ]
              });
              return;
            }

            res.status(404).json({ error: 'Not found' });
          }