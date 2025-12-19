import type { Metadata } from 'next'
import { WEBSITE_URL } from './constants'

type MetadataOptions = {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
  index?: boolean
}

const SITE_NAME = 'Junaid Anjum'
const OG_IMAGE_SIZE = { width: 1200, height: 630 }

function createOgImageUrl(title: string, description: string) {
  const url = new URL('/og', WEBSITE_URL)
  url.searchParams.set('title', title)
  url.searchParams.set('description', description)
  return url.toString()
}

export function createMetadata(options: MetadataOptions): Metadata {
  const { title, description, path, type = 'website', index = true } = options
  const canonicalUrl = path
    ? new URL(path, WEBSITE_URL).toString()
    : WEBSITE_URL
  const imageUrl = createOgImageUrl(title, description)

  return {
    title,
    description,
    metadataBase: new URL(WEBSITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: index
      ? undefined
      : {
          index: false,
          follow: false,
        },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: imageUrl,
          width: OG_IMAGE_SIZE.width,
          height: OG_IMAGE_SIZE.height,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}
