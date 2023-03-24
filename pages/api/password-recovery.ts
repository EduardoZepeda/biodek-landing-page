// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type RecoveryPasswordResponse = {
    status: string
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<RecoveryPasswordResponse>
) {
    res.status(200).json({ status: 'ok', message: 'We will send a recovery password email in case that email is valid' })
}
