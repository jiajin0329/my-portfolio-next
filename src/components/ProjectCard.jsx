'use client'

import { useState } from 'react'

function getYouTubeVideoId(videoUrl) {
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

function ProjectCard({ project }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = getYouTubeVideoId(project.videoUrl)
  const maxResolutionThumbnailUrl = videoId
    ? 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg'
    : null
  const highQualityThumbnailUrl = videoId
    ? 'https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg'
    : null
  const [thumbnailUrl, setThumbnailUrl] = useState(maxResolutionThumbnailUrl)

  return (
    <article className="project-card" id={'project-' + project.id}>
      <header className="project-card__header">
        <p className="project-card__number">Project {project.order}</p>
        <h3>{project.name}</h3>
      </header>

      {videoId && thumbnailUrl ? (
        <div className="project-card__video">
          {isPlaying ? (
            <>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                src={'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0'}
                title={project.name + ' 的 YouTube 影片預覽'}
              ></iframe>
              <button
                aria-label={'關閉 ' + project.name + ' 的 YouTube 影片'}
                className="project-card__video-close"
                onClick={() => setIsPlaying(false)}
                type="button"
              >
                <span aria-hidden="true">×</span>
              </button>
            </>
          ) : (
            <button
              aria-label={'播放 ' + project.name + ' 的 YouTube 影片'}
              className="project-card__video-button"
              onClick={() => setIsPlaying(true)}
              type="button"
            >
              <img
                alt=""
                loading="lazy"
                onError={() => setThumbnailUrl(highQualityThumbnailUrl)}
                src={thumbnailUrl}
              />
              <span aria-hidden="true" className="project-card__play-icon">
                ▶
              </span>
            </button>
          )}
        </div>
      ) : null}

      <p>{project.description}</p>

      <ul className="project-card__technologies" aria-label="使用技術">
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      <details className="project-card__disclosure">
        <summary>開發職責 <span>查看詳細內容</span></summary>
        <dl className="project-card__details">
          <div>
            <dt>負責角色</dt>
            <dd>
              <ul>
                {project.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt>使用技術</dt>
            <dd>{project.technologies.join('、')}</dd>
          </div>
        </dl>
      </details>

      {project.availabilityNotes.map((note) => (
        <p className="project-card__note" key={note}>
          {note}
        </p>
      ))}

      <div className="project-card__links">
        {project.storeLinks.map((storeLink) => (
          <a
            href={storeLink.url}
            key={storeLink.url}
            target="_blank"
            rel="noreferrer"
          >
            {storeLink.label}
          </a>
        ))}
        <div className="project-card__video-link">
          <a href={project.videoUrl} target="_blank" rel="noreferrer">
            在 YouTube 開啟
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
