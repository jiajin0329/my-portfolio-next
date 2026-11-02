import Navbar from './Navbar.jsx'
import ProjectCard from './ProjectCard.jsx'
import SectionHeading from './SectionHeading.jsx'
import { portfolio } from '../data/portfolio.js'


function PortfolioApp() {
  const { experience, navigation, profile, projects } = portfolio
  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#main-content">
        跳至主要內容
      </a>
      <Navbar displayName={profile.displayName} items={navigation} />

      <main id="main-content">
        <section className="hero-section" id="home" aria-labelledby="page-title">
          <div className="hero-section__content">
            <p className="eyebrow">UNITY / GAME DEVELOPMENT</p>
            <h1 id="page-title">{profile.displayName}</h1>
            <p className="hero-section__headline">從遊戲機制，<br />到玩家手中的體驗。</p>
            <p className="hero-section__description">使用 Unity 與 C# 開發 2D、3D 遊戲，參與核心玩法、系統整合與行動平台上架。</p>
            <div className="hero-section__actions">
              <a className="hero-section__cta" href="#projects">探索作品 <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#contact">聯絡我 <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <a className="hero-feature" href="#project-sandwich-tycoon" aria-label="探索 Sandwich Tycoon 專案">
            <div className="hero-feature__image"><img src="https://i.ytimg.com/vi/u_GdUsjH4_s/hqdefault.jpg" alt="Sandwich Tycoon 遊戲影片預覽" fetchPriority="high" /></div>
            <div className="hero-feature__caption"><div><span className="eyebrow">FEATURED PROJECT / 01</span><strong>Sandwich Tycoon</strong></div><span aria-hidden="true">↗</span></div>
          </a>
        </section>

        <section id="about" aria-labelledby="about-heading">
          <SectionHeading id="about-heading">關於我</SectionHeading>
          <p>{profile.introduction}</p><p className="section-description">作品涵蓋經營與益智遊戲，開發內容包括核心遊戲邏輯、美術整合、第三方 SDK 串接，以及 Android 與 iOS 發布維護。</p>
        </section>

        <section id="skills" aria-labelledby="skills-heading">
          <SectionHeading id="skills-heading">技能與技術</SectionHeading>
          <ul className="skill-list">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <SectionHeading id="projects-heading">精選專案</SectionHeading>
          <p className="section-description">從經營模擬到解謎互動，透過實際遊戲認識我的開發工作。</p><div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading">
          <SectionHeading id="experience-heading">工作經驗</SectionHeading>
          {experience.length > 0 ? (
            <ul>
              {experience.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          ) : (
            <p className="muted">詳細工作經歷待補充；專案中的實際開發職責可於上方作品查看。</p>
          )}
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <SectionHeading id="contact-heading">聯絡方式</SectionHeading><p className="contact-heading">讓下一個遊戲想法，<br />開始成形。</p><p className="section-description">歡迎透過 Email 聯繫，討論工作機會或專案合作。</p>
          <p>
            <a className="contact-link" href={'mailto:' + profile.contact.email}>{profile.contact.email}</a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>{profile.displayName} 的個人作品集</p><a href="#home">回到頂端 ↑</a>
      </footer>
    </div>
  )
}

export default PortfolioApp
