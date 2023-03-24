// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type LoginRequest = {
  email: string
  password: string
}

type LoginResponse = {
  token?: string
  error?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  res.status(400).json({ error: 'Invalid credentials' })
}
