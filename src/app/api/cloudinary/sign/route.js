// src/app/api/cloudinary/sign/route.js
import { NextResponse } from 'next/server'
import { cloudinary } from '../../../../lib/cloudinary'
import { isAdmin } from '../../../../lib/auth'

export async function POST(req) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { paramsToSign } = await req.json()
  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET
  )
  return NextResponse.json({ signature })
}