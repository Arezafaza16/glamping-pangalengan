import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/images';
const files = fs.readdirSync(dir);

for (const file of files) {
  if (file.toLowerCase().endsWith('.heic') || file.toLowerCase().endsWith('.heif')) {
    const filePath = path.join(dir, file);
    const newName = file.substring(0, file.lastIndexOf('.')) + '.jpg';
    const newPath = path.join(dir, newName);
    
    console.log(`Converting ${file} to ${newName}...`);
    try {
      await sharp(filePath).jpeg({ quality: 85 }).toFile(newPath);
      console.log(`Success! Deleting original ${file}`);
      fs.unlinkSync(filePath);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
}
