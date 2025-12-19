import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Page preview'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

const BASE_STYLES = {
  display: 'flex',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, #0f172a 0%, #111827 40%, #1f2937 100%)',
  color: '#f8fafc',
  padding: '64px',
  boxSizing: 'border-box' as const,
  position: 'relative' as const,
}

const GRID_OVERLAY = {
  position: 'absolute' as const,
  inset: 0,
  backgroundImage:
    'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
  backgroundSize: '24px 24px',
  opacity: 0.6,
}

const PANEL_STYLES = {
  position: 'relative' as const,
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  gap: '16px',
  width: '100%',
  borderRadius: '24px',
  padding: '48px',
  background:
    'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
  boxShadow: '0 25px 70px rgba(0,0,0,0.35)',
  border: '1px solid rgba(255,255,255,0.08)',
}

const TITLE_STYLES = {
  fontSize: '70px',
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: '-1px',
}

const DESCRIPTION_STYLES = {
  fontSize: '28px',
  fontWeight: 400,
  lineHeight: 1.4,
  color: 'rgba(248,250,252,0.75)',
}

const NAME_BADGE = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '12px',
  padding: '10px 16px',
  borderRadius: '9999px',
  fontSize: '20px',
  color: '#cbd5e1',
  backgroundColor: 'rgba(15,23,42,0.6)',
  border: '1px solid rgba(148,163,184,0.25)',
  width: 'fit-content',
}

function sanitize(input: string | null, maxLength: number, fallback: string) {
  if (!input) return fallback
  const trimmed = input.trim()
  if (!trimmed) return fallback
  return trimmed.slice(0, maxLength)
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const title = sanitize(
    url.searchParams.get('title'),
    140,
    'Junaid Anjum - Frontend Product Engineer',
  )
  const description = sanitize(
    url.searchParams.get('description'),
    200,
    'Building meaningful products end-to-end, focused on clarity, structure, and systems that age well.',
  )

  return new ImageResponse(
    (
      <div style={BASE_STYLES}>
        <div style={GRID_OVERLAY} />
        <div style={PANEL_STYLES}>
          <span style={NAME_BADGE}>Junaid Anjum · Notes</span>
          <div style={TITLE_STYLES}>{title}</div>
          <div style={DESCRIPTION_STYLES}>{description}</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
