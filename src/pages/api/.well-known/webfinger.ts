import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        subject: "acct:travis@travisfriesen.ca",
        links: [
            {
                rel: "http://openid.net/specs/connect/1.0/issuer",
                href: "https://auth.travisf.ca/application/o/tailscale/"
            }
        ]
    });
}