import Image from 'next/image'
import { getYouTubeVideoId } from '../lib/video.js'
import adventureMap from '../../public/images/adventure/scene-preview.png'

const mapSize = { width: 480, height: 270 }

// Landmark bounds in the full-scene preview's native pixel grid.
const destinations = [
  { id: 'about', label: '關於我', x: 173, y: 55, width: 101, height: 72 },
  { id: 'projects', label: '探索作品', x: 319, y: 44, width: 155, height: 95 },
  { id: 'contact', label: '聯絡我', x: 292, y: 183, width: 47, height: 59 },
]

export default function AdventureHero({ profile, projects }) {
  return (
    <section className="adventure-hero" id="home" aria-labelledby="page-title">
      <div className="adventure-hero__intro pixel-panel">
        <p className="eyebrow">ADVENTURE MAP</p>
        <div className="pixel-divider" aria-hidden="true">◆</div>
        <h1 id="page-title">{profile.displayName}</h1>
        <p className="adventure-hero__title">遊戲開發者</p>
        <p className="adventure-hero__role">UNITY <span aria-hidden="true">/</span> C#</p>
        <p className="adventure-hero__description">從遊戲機制，<br />到玩家手中的體驗。</p>
        <div className="adventure-hero__actions">
          <a className="pixel-button" href="#projects">探索作品 <span aria-hidden="true">▶</span></a>
          <a className="pixel-button pixel-button--secondary" href="#contact">聯絡我 <span aria-hidden="true">→</span></a>
        </div>
      </div>

      <div className="adventure-map">
        <div className="adventure-map__scene">
          <Image
            className="adventure-map__image"
            src={adventureMap}
            alt="夕陽映照山林，蜿蜒的小徑經過石橋，遠處有瀑布。"
            fetchPriority="high"
            unoptimized
          />
          <nav aria-label="冒險地圖導覽">
            {destinations.map(({ id, label, x, y, width, height }) => (
              <a
                className={'map-destination map-destination--' + id}
                href={'#' + id}
                key={id}
                style={{
                  left: (x / mapSize.width) * 100 + '%',
                  top: (y / mapSize.height) * 100 + '%',
                  width: (width / mapSize.width) * 100 + '%',
                  '--landmark-ratio': width + ' / ' + height,
                }}
              >
                <span className="map-destination__art" aria-hidden="true">
                  {id === 'about' && (
                    <span className="adventure-map__profile">{profile.displayName}<br />UNITY / C#</span>
                  )}
                  {id === 'projects' && <span className="adventure-map__gallery-name">作品展示館</span>}
                  {id === 'projects' && projects.slice(0, 3).map((project, index) => (
                    <img
                      className={'adventure-map__poster adventure-map__poster--' + (index + 1)}
                      src={'https://i.ytimg.com/vi/' + getYouTubeVideoId(project.videoUrl) + '/hqdefault.jpg'}
                      alt=""
                      key={project.id}
                    />
                  ))}
                </span>
                <span className="map-destination__label">
                  <span className="map-destination__cursor" aria-hidden="true">▶</span>
                  {label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <a className="adventure-hero__scroll" href="#about"><span aria-hidden="true">↓</span> 向下探索</a>
    </section>
  )
}
