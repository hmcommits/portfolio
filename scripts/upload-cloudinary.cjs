const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure cloudinary with env or provided credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'me9hwxub',
  api_key: process.env.CLOUDINARY_API_KEY || '621155855568615',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'UVES4t1aX8ZUAeYO1nhQoIgsabU'
});

const assetsDir = path.join(__dirname, '..', 'public', 'assets');
const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.webp'));

async function uploadAll() {
  const urlMap = {};
  console.log(`Found ${files.length} webp images to upload...`);

  for (const file of files) {
    const filePath = path.join(assetsDir, file);
    const publicId = path.parse(file).name;
    console.log(`Uploading ${file} ...`);
    try {
      const res = await cloudinary.uploader.upload(filePath, {
        folder: 'portfolio',
        public_id: publicId,
        overwrite: true,
        resource_type: 'image',
        format: 'webp'
      });
      console.log(`Uploaded ${file} -> ${res.secure_url}`);
      urlMap[file] = res.secure_url;
      urlMap[`/assets/${file}`] = res.secure_url;
    } catch (err) {
      console.error(`Failed to upload ${file}:`, err);
    }
  }

  const outputPath = path.join(__dirname, 'cloudinary-map.json');
  fs.writeFileSync(outputPath, JSON.stringify(urlMap, null, 2));
  console.log(`Saved URL map to ${outputPath}`);
}

uploadAll();
