import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';

const upload = multer({ dest: 'uploads/' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    upload.single('image')(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: 'Image upload failed' });
      }
      const { path } = req.file;
      return res.status(200).json({ url: path });
    });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

