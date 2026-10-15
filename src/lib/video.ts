/** Accept watch, share, embed, live, and Shorts URLs; never interpolate an unchecked ID. */
export function getYouTubeId(value: string): string | null {
  try {
    const url = new URL(value);
    const parts = url.pathname.split('/').filter(Boolean);
    let id: string | null = null;
    if (url.protocol !== 'https:') return null;
    if (url.hostname === 'youtu.be') id = parts[0];
    else if (['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(url.hostname)) {
      if (url.pathname === '/watch') id = url.searchParams.get('v');
      else if (['embed', 'live', 'shorts'].includes(parts[0])) id = parts[1];
    }
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}
