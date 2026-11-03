import Image from 'next/image'
import { getYouTubeVideoId } from '../lib/video.js'
import adventureMap from '../../public/images/adventure-map.png'

const destinations = [
  { id: 'about', label: '關於我', english: 'ABOUT', description: '認識開發者' },
  { id: 'projects', label: '探索作品', english: 'PROJECTS', description: '走進作品展示館' },
  { id: 'contact', label: '聯絡我', english: 'CONTACT', description: '寄出一封信' },
]

export default function AdventureHero({ profile, projects }) {
  return (
    <section className="adventure-hero" id="home" aria-labelledby="page-title">
      <div className="adventure-hero__intro pixel-panel">
        <p className="eyebrow">ADVENTURE MAP</p>
        <div className="pixel-divider" aria-hidden="true">◆</div>
        <p className="adventure-hero__title" aria-hidden="true">GAME<br />DEVELOPER</p>
        <h1 id="page-title">{profile.displayName}</h1>
        <p className="adventure-hero__role">UNITY <span aria-hidden="true">/</span> C#</p>
        <p className="adventure-hero__description">從遊戲機制，<br />到玩家手中的體驗。</p>
        <div className="adventure-hero__actions">
          <a className="pixel-button" href="#projects">探索作品 <span aria-hidden="true">▶</span></a>
          <a className="pixel-button pixel-button--secondary" href="#contact">聯絡我 <span aria-hidden="true">→</span></a>
        </div>
      </div>

      <div className="adventure-map">
        <Image
          className="adventure-map__image"
          src={adventureMap}
          alt="夕陽山林中的像素冒險地圖：背包角色與資料面板、作品展示館，以及由小徑相連的信箱。"
          sizes="(max-width: 700px) 160vw, 100vw"
          priority
          unoptimized
        />
        <div className="adventure-map__profile" aria-hidden="true">
          <span>DEVELOPER</span>
          <strong>UNITY / C#</strong>
        </div>
        <div className="adventure-map__posters" aria-hidden="true">
          {projects.slice(0, 3).map((project, index) => (
            <img
              className={'adventure-map__poster adventure-map__poster--' + (index + 1)}
              src={'https://i.ytimg.com/vi/' + getYouTubeVideoId(project.videoUrl) + '/hqdefault.jpg'}
              alt=""
              key={project.id}
            />
          ))}
        </div>
        <span className="adventure-map__gallery-name" aria-hidden="true">作品展示館</span>
        <nav className="map-navigation" aria-label="冒險地圖導覽">
          {destinations.map((destination) => (
            <a className={'map-destination map-destination--' + destination.id} href={'#' + destination.id} key={destination.id}>
              <span className="map-destination__label"><span className="map-destination__cursor" aria-hidden="true">▶</span>{destination.label}</span>
              <span className="map-destination__description">{destination.description}</span>
              <span className="sr-only">（{destination.english}）</span>
            </a>
          ))}
        </nav>
      </div>
      <a className="adventure-hero__scroll" href="#about"><span aria-hidden="true">↓</span> 向下探索</a>
    </section>
  )
}
