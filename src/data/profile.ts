export type Project = {
  key: "rpgCodex" | "kickoffErp" | "discordCleaner" | "sparkScalaLearning";
  name: string;
  category: string;
  tags: string[];
  href: string;
};

export const profile = {
  name: "Renan Yuhara",
  headline: "Software Engineer · .NET · Data & Web",
  github: "https://github.com/renanyuhara",
};

export const projects: Project[] = [
  {
    key: "rpgCodex",
    name: "RPG Codex",
    category: "Web · RPG",
    tags: ["Next.js", "Supabase", "TypeScript"],
    href: "https://github.com/renanyuhara/rpg-codex",
  },
  {
    key: "kickoffErp",
    name: "Kickoff ERP",
    category: "Management · Sports",
    tags: [".NET", "SQL Server", "Azure"],
    href: "https://github.com/renanyuhara/kickoff-erp",
  },
  {
    key: "discordCleaner",
    name: "Discord Cleaner",
    category: "Tools · Automation",
    tags: [".NET", "Discord API"],
    href: "https://github.com/renanyuhara/discord-cleaner",
  },
  {
    key: "sparkScalaLearning",
    name: "Spark Scala Learning",
    category: "Learning · Data",
    tags: ["Scala", "Spark", "Docker"],
    href: "https://github.com/renanyuhara/spark-scala-learning",
  },
];
