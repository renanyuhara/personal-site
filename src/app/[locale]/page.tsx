import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/data/profile";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);
  const alternateLocale = locale === "en" ? "pt" : "en";

  return (
    <main id="top">
      <header className="site-header shell">
        <Link className="wordmark" href={`/${locale}`} aria-label="Renan Yuhara, home">ry<span>.</span></Link>
        <nav aria-label="Main navigation">
          <a href="#about">{t.nav.about}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#contact">{t.nav.contact}</a>
          <Link href={`/${alternateLocale}`} lang={alternateLocale} hrefLang={alternateLocale} aria-label={`Switch language to ${alternateLocale === "en" ? "English" : "Português"}`} className="language-switch">
            {alternateLocale.toUpperCase()}
          </Link>
        </nav>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="eyebrow"><span className="status-dot" /> {t.hero.eyebrow}</div>
        <h1 id="hero-title">{t.hero.titlePrefix} <span>Renan.</span><br />{t.hero.titleSuffix}</h1>
        <p className="hero-copy">{t.profile.intro}</p>
        <div className="actions">
          <a className="button primary" href="#projects">{t.hero.explore} <span aria-hidden="true">↗</span></a>
          <a className="button secondary" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-bottom"><span>{profile.headline}</span><span>{t.hero.scroll}</span></div>
      </section>

      <section className="about shell section" id="about" aria-labelledby="about-title">
        <div className="section-heading"><span>{t.about.label}</span><h2 id="about-title">{t.about.title}</h2></div>
        <div className="about-content">
          <p>{t.profile.description}</p>
          <div className="pill-row" aria-label={t.about.interests}>
            <span>.NET &amp; C#</span><span>SQL Server</span><span>Web Development</span>
            <span>Data Engineering</span><span>RPG &amp; Games</span>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="shell">
          <div className="section-heading"><span>{t.projects.label}</span><h2 id="projects-title">{t.projects.title}<span className="accent">.</span></h2></div>
          <p className="section-lead">{t.projects.intro}</p>
          <div className="project-grid">
            {projects.map((project, i) => (
              <a className="project-card" href={project.href} target="_blank" rel="noopener noreferrer" key={project.key}>
                <div className="project-top"><span>{String(i + 1).padStart(2, "0")} / {project.category}</span><span aria-hidden="true" className="arrow">↗</span></div>
                <div><h3>{project.name}</h3><p>{t.projectDescriptions[project.key]}</p></div>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact shell" id="contact" aria-labelledby="contact-title">
        <div className="section-heading"><span>{t.contact.label}</span><h2 id="contact-title">{t.contact.title}</h2></div>
        <p>{t.contact.description}</p>
        <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">github.com/renanyuhara ↗</a>
      </section>

      <footer className="footer shell"><span>© {new Date().getFullYear()} {profile.name}</span><span>{t.footer.madeWith}</span><a href="#top">{t.footer.backToTop}</a></footer>
    </main>
  );
}
