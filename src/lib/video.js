export function getYouTubeVideoId(videoUrl) {
  try {
    const url = new URL(videoUrl)
    const hostname = url.hostname.replace('www.', '')

    if (hostname === 'youtu.be') {
      return url.pathname.split('/').filter(Boolean)[0] ?? null
    }

    if (hostname === 'youtube.com') {
      const videoId = url.searchParams.get('v')
      if (videoId) {
        return videoId
      }

      const pathParts = url.pathname.split('/').filter(Boolean)
      return pathParts[0] === 'embed' || pathParts[0] === 'shorts'
        ? pathParts[1] ?? null
        : null
    }
  } catch {
    return null
  }

  return null
}

