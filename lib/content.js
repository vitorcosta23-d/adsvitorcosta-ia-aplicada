export const topics = [
  {
    slug: "modelos",
    number: "01",
    label: "Modelos",
    title: "Modelos de IA",
    description: "Entenda as famílias, compare capacidade, custo e velocidade e escolha o modelo certo para cada tarefa.",
    status: "1 guia publicado",
    accent: "beige",
    planned: [
      "GPT-5.6: qual modelo usar para vender melhor com IA?",
      "Como comparar modelos sem cair em hype",
      "Qual modelo usar em cada etapa da operação",
    ],
  },
  {
    slug: "ferramentas",
    number: "02",
    label: "Ferramentas",
    title: "Ferramentas de IA",
    description: "O que vale testar, onde encaixa e quais ferramentas realmente economizam trabalho no comércio digital.",
    status: "Em produção",
    accent: "blue",
    planned: [
      "Ferramentas para pesquisa de produto",
      "IA para criativos e páginas",
      "Stack essencial para uma agência enxuta",
    ],
  },
  {
    slug: "ecommerce",
    number: "03",
    label: "E-commerce",
    title: "IA no E-commerce",
    description: "Aplicações práticas em oferta, página, atendimento, retenção, relatórios e decisão comercial.",
    status: "Em produção",
    accent: "beige",
    planned: [
      "Cinco automações para tirar trabalho repetitivo",
      "Como criar uma página de produto com IA",
      "IA no pós-venda sem perder o toque humano",
    ],
  },
  {
    slug: "dropshipping",
    number: "04",
    label: "Dropshipping",
    title: "IA no Dropshipping",
    description: "Pesquisa, validação, criativos e operação com critério para evitar decisões baseadas apenas em respostas convincentes.",
    status: "Em produção",
    accent: "blue",
    planned: [
      "IA para validar produto: onde ajuda e onde engana",
      "Pesquisa de concorrentes com revisão humana",
      "Variações de anúncio sem perder a estratégia",
    ],
  },
  {
    slug: "automacoes",
    number: "05",
    label: "Automações",
    title: "Automações com IA",
    description: "Fluxos, agentes e integrações para reduzir tarefas manuais sem colocar a operação no piloto automático errado.",
    status: "Em produção",
    accent: "beige",
    planned: [
      "Atendimento com triagem inteligente",
      "Relatórios que chegam prontos para decidir",
      "Agentes para monitorar mercado e concorrentes",
    ],
  },
  {
    slug: "tutoriais",
    number: "06",
    label: "Tutoriais",
    title: "Tutoriais práticos",
    description: "Passos curtos, prompts testáveis e exemplos para aplicar a ferramenta no mesmo dia.",
    status: "Em produção",
    accent: "blue",
    planned: [
      "Seu primeiro teste comparando modelos",
      "Briefing que gera uma página melhor",
      "Como medir qualidade, tempo, custo e retrabalho",
    ],
  },
];

export const publishedArticles = [
  {
    slug: "gpt-5-6-guia",
    topic: "modelos",
    href: "/artigos/gpt-5-6-guia",
    title: "GPT-5.6: qual modelo usar para vender melhor com IA?",
    description: "Sol, Terra e Luna explicados por capacidade, custo, disponibilidade e aplicação em um fluxo real de e-commerce.",
    date: "11 jul 2026",
    read: "12 min",
    image: "/images/hero-operational-ai.png",
  },
];

export function getTopic(slug) {
  return topics.find((topic) => topic.slug === slug);
}

export function getArticlesByTopic(slug) {
  return publishedArticles.filter((article) => article.topic === slug);
}
