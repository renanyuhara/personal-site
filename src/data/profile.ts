export type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
  external?: boolean;
};

export const profile = {
  name: "Renan Yuhara",
  headline: "Software Engineer · .NET · Data & Web",
  intro:
    "Desenvolvo software, exploro novas tecnologias e transformo ideias em projetos que gosto de construir e partilhar.",
  description:
    "Profissional de desenvolvimento de software com experiência desde 2008, principalmente no ecossistema .NET e SQL Server. Também me interesso por aplicações web, automação, engenharia de dados e projetos pessoais.",
  github: "https://github.com/renanyuhara",
};

export const projects: Project[] = [
  {
    name: "RPG Codex",
    category: "Web · RPG",
    description: "Uma aplicação para organizar personagens, lugares e conhecimento de campanhas de RPG.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    href: "https://github.com/renanyuhara/rpg-codex",
    external: true,
  },
  {
    name: "Kickoff ERP",
    category: "Gestão · Desporto",
    description: "Projeto de gestão desportiva, pensado para apoiar operações de clubes.",
    tags: [".NET", "SQL Server", "Azure"],
    href: "https://github.com/renanyuhara/kickoff-erp",
    external: true,
  },
  {
    name: "Discord Cleaner",
    category: "Ferramentas · Automação",
    description: "Ferramenta para auxiliar a revisão e organização de mensagens e anexos do Discord.",
    tags: [".NET", "Discord API"],
    href: "https://github.com/renanyuhara/discord-cleaner",
    external: true,
  },
  {
    name: "Spark Scala Learning",
    category: "Estudos · Dados",
    description: "Exercícios e experimentos práticos de aprendizagem de Scala e Apache Spark.",
    tags: ["Scala", "Spark", "Docker"],
    href: "https://github.com/renanyuhara/spark-scala-learning",
    external: true,
  },
];
