import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const uploadDir = path.join(process.cwd(), 'public/uploads');

    try {
      try {
        // Check if the directory exists
        await fs.access(uploadDir);
      } catch (error) {
        // If it doesn't exist, create it
        await fs.mkdir(uploadDir, { recursive: true });
      }

      const file = req.body.image;

      if (file) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const newFileName = uniqueSuffix + path.extname(file.name);
        const filePath = path.join(uploadDir, newFileName);

        await fs.writeFile(filePath, file);

        const url = `/uploads/${newFileName}`;
        return res.status(200).json({ url });
      } else {
        return res.status(400).json({ error: 'No file uploaded' });
      }
    } catch (error) {
      return res.status(400).json({ error: 'File upload failed' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

