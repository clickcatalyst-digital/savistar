// src/lib/cloudinary.js
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export { cloudinary }

export async function deleteAssets(publicIds = []) {
  const ids = publicIds.filter(Boolean)
  await Promise.all(
    ids.map((id) =>
      cloudinary.uploader
        .destroy(id)
        .catch((e) => console.error('Cloudinary destroy failed for', id, e?.message))
    )
  )
}