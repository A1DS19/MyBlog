// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Message } from '@prisma/client';
import { prisma } from '../../util/prismaClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Partial<Message> | { err: string }>
) {
  if (req.method === 'POST') {
    const data = req.body;
    const message = await prisma.message.create({
      data,
    });

    if (!message) {
      return res.status(401).json({ err: 'Invalid request' });
    }

    res.status(200).json(message);
  }
}
