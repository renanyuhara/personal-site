import { profile, projects } from "@/data/profile";

export default function Home() {
  return (
    <main id="top">
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Renan Yuhara, início">ry<span>.</span></a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contacto</a>
        </nav>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEERING · PROJECTS · CURIOSITY</div>
        <h1 id="hero-title">Olá, sou o <span>Renan.</span><br />Gosto de construir coisas.</h1>
        <p className="hero-copy">{profile.intro}</p>
        <div className="actions">
          <a className="button primary" href="#projetos">Explorar projetos <span aria-hidden="true">↗</span></a>
          <a className="button secondary" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-bottom"><span>{profile.headline}</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="about shell section" id="sobre" aria-labelledby="about-title">
        <div className="section-heading"><span>01 / SOBRE</span><h2 id="about-title">Um pouco sobre mim</h2></div>
        <div className="about-content">
          <p>{profile.description}</p>
          <div className="pill-row" aria-label="Áreas de interesse">
            <span>.NET &amp; C#</span><span>SQL Server</span><span>Web Development</span>
            <span>Data Engineering</span><span>RPG &amp; Games</span>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projetos" aria-labelledby="projects-title">
        <div className="shell">
          <div className="section-heading"><span>02 / PROJETOS</span><h2 id="projects-title">Do código à prática<span className="accent">.</span></h2></div>
          <p className="section-lead">Alguns projetos pessoais, ferramentas e experiências de aprendizagem.</p>
          <div className="project-grid">
            {projects.map((project, i) => (
              <a className="project-card" href={project.href} target={project.external ? "_blank" : undefined} rel={project.external ? "noopener noreferrer" : undefined} key={project.name}>
                <div className="project-top"><span>{String(i + 1).padStart(2, "0")} / {project.category}</span><span aria-hidden="true" className="arrow">↗</span></div>
                <div><h3>{project.name}</h3><p>{project.description}</p></div>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact shell" id="contato" aria-labelledby="contact-title">
        <div className="section-heading"><span>03 / CONTACTO</span><h2 id="contact-title">Vamos conversar?</h2></div>
        <p>Interessado em tecnologia, projetos ou numa conversa sobre engenharia de software? Podes encontrar-me no GitHub.</p>
        <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">github.com/renanyuhara ↗</a>
      </section>

      <footer className="footer shell"><span>© {new Date().getFullYear()} {profile.name}</span><span>Feito com curiosidade e atenção aos detalhes.</span><a href="#top">Voltar ao topo ↑</a></footer>
    </main>
  );
}
