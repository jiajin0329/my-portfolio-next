import Navbar from './Navbar.jsx'
import AdventureHero from './AdventureHero.jsx'
import ProjectCard from './ProjectCard.jsx'
import SectionHeading from './SectionHeading.jsx'
import { portfolio } from '../data/portfolio.js'

export default function PortfolioApp() {
  const { experience, navigation, profile, projects } = portfolio

  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#main-content">跳至主要內容</a>
      <Navbar displayName={profile.displayName} items={navigation} />
      <main id="main-content">
        <AdventureHero profile={profile} projects={projects} />
        <div className="portfolio-content">
          <section className="about-section" id="about" aria-labelledby="about-heading">
            <div className="section-intro">
              <p className="eyebrow">MEET THE DEVELOPER</p>
              <SectionHeading id="about-heading">關於我</SectionHeading>
              <p className="section-caption">每一段冒險，<br />從一個想法開始。</p>
            </div>
            <div className="about-section__body pixel-panel">
              <p className="about-section__greeting">{profile.introduction}</p>
              <p>使用 Unity 與 C# 開發 2D、3D 遊戲，參與核心玩法、系統整合與行動平台上架。</p>
              <p className="section-description">作品涵蓋經營與益智遊戲，開發內容包括核心遊戲邏輯、美術整合、第三方 SDK 串接，以及 Android 與 iOS 發布維護。</p>
              <a className="text-link" href="#projects">查看我的開發作品 <span aria-hidden="true">→</span></a>
            </div>
          </section>

          <section className="skills-section" id="skills" aria-labelledby="skills-heading">
            <div className="section-intro">
              <p className="eyebrow">DEVELOPER TOOLKIT</p>
              <SectionHeading id="skills-heading">技能與技術</SectionHeading>
            </div>
            <ul className="skill-list">
              {profile.skills.map((skill) => <li key={skill}><span aria-hidden="true">◆</span>{skill}</li>)}
            </ul>
          </section>

          <section id="projects" aria-labelledby="projects-heading">
            <div className="projects-intro">
              <div className="section-intro">
                <p className="eyebrow">THE PROJECT GALLERY</p>
                <SectionHeading id="projects-heading">作品展示館</SectionHeading>
              </div>
              <p className="section-description">從經營模擬到解謎互動，<br />透過實際遊戲認識我的開發工作。</p>
            </div>
            <div className="project-list">
              {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          </section>

          <section className="experience-section" id="experience" aria-labelledby="experience-heading">
            <div className="section-intro">
              <p className="eyebrow">THE JOURNEY SO FAR</p>
              <SectionHeading id="experience-heading">工作經驗</SectionHeading>
            </div>
            {experience.length > 0 ? (
              <ul>{experience.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
            ) : (
              <div><p className="muted">詳細工作經歷待補充。</p><a className="text-link" href="#projects">先從作品中的實際開發職責認識我 <span aria-hidden="true">↑</span></a></div>
            )}
          </section>

          <section className="contact-section pixel-panel" id="contact" aria-labelledby="contact-heading">
            <div className="contact-section__stamp" aria-hidden="true">✉</div>
            <p className="eyebrow">YOU HAVE A NEW ADVENTURE?</p>
            <SectionHeading id="contact-heading">聯絡我</SectionHeading>
            <p className="contact-heading">讓下一個遊戲想法，<br />開始成形。</p>
            <p className="section-description">歡迎透過 Email 聯繫，討論工作機會或專案合作。</p>
            <a className="contact-link" href={'mailto:' + profile.contact.email}>{profile.contact.email}<span aria-hidden="true"> ↗</span></a>
          </section>
        </div>
      </main>
      <footer className="site-footer">
        <p><span aria-hidden="true">◆</span> {profile.displayName} 的個人作品集</p>
        <a href="#home">回到地圖 <span aria-hidden="true">↑</span></a>
      </footer>
    </div>
  )
}
