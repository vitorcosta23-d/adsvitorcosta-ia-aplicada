export const topics = [
  {
    slug: "modelos",
    number: "01",
    label: "Modelos",
    title: "Modelos de IA",
    description: "Entenda as familias, compare capacidade, custo e velocidade e escolha o modelo certo para cada tarefa.",
    status: "1 guia publicado",
    accent: "beige",
    planned: [
      "GPT-5.6: qual modelo usar para vender melhor com IA?",
      "Como comparar modelos sem cair em hype",
      "Qual modelo usar em cada etapa da operacao",
    ],
  },
  {
    slug: "ferramentas",
    number: "02",
    label: "Ferramentas",
    title: "Ferramentas de IA",
    description: "O que vale testar, onde encaixa e quais ferramentas realmente economizam trabalho no comercio digital.",
    status: "Em producao",
    accent: "blue",
    planned: [
      "Ferramentas para pesquisa de produto",
      "IA para criativos e paginas",
      "Stack essencial para uma agencia enxuta",
    ],
  },
  {
    slug: "ecommerce",
    number: "03",
    label: "E-commerce",
    title: "IA no E-commerce",
    description: "Aplicacoes praticas em oferta, pagina, atendimento, retencao, relatorios e decisao comercial.",
    status: "Em producao",
    accent: "beige",
    planned: [
      "Cinco automacoes para tirar trabalho repetitivo",
      "Como criar uma pagina de produto com IA",
      "IA no pos-venda sem perder o toque humano",
    ],
  },
  {
    slug: "dropshipping",
    number: "04",
    label: "Dropshipping",
    title: "IA no Dropshipping",
    description: "Pesquisa, validacao, criativos e operacao com criterio para evitar decisoes baseadas apenas em respostas convincentes.",
    status: "Em producao",
    accent: "blue",
    planned: [
      "IA para validar produto: onde ajuda e onde engana",
      "Pesquisa de concorrentes com revisao humana",
      "Variacoes de anuncio sem perder a estrategia",
    ],
  },
  {
    slug: "automacoes",
    number: "05",
    label: "Automacoes",
    title: "Automacoes com IA",
    description: "Fluxos, agentes e integracoes para reduzir tarefas manuais sem colocar a operacao no piloto automatico errado.",
    status: "Em producao",
    accent: "beige",
    planned: [
      "Atendimento com triagem inteligente",
      "Relatorios que chegam prontos para decidir",
      "Agentes para monitorar mercado e concorrentes",
    ],
  },
  {
    slug: "tutoriais",
    number: "06",
    label: "Tutoriais",
    title: "Tutoriais praticos",
    description: "Passos curtos, prompts testaveis e exemplos para aplicar a ferramenta no mesmo dia.",
    status: "Em producao",
    accent: "blue",
    planned: [
      "Seu primeiro teste comparando modelos",
      "Briefing que gera uma pagina melhor",
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
    description: "Sol, Terra e Luna explicados por capacidade, custo, disponibilidade e aplicacao em um fluxo real de e-commerce.",
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
