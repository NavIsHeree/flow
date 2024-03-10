import { Translation, TranslationRequest } from './translate.ts';
import { translateFunction } from '@path-to-your-translation-function';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Translation | Translation[] | { error: string }>
) {
  try {
    const translationRequest: TranslationRequest = req.body;
    const translationResult = await translateFunction(translationRequest);
    res.status(200).json(translationResult);
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
