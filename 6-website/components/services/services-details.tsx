export interface ServiceDetail {
  id: string
  title: string
  subtitle: string
  description: string
  benefits: string[]
}

export const servicesDetails: Record<string, ServiceDetail> = {
  websites: {
    id: "websites",
    title: "Websites Profissionais",
    subtitle: "Presença digital que converte visitantes em clientes",
    description:
      "Desenvolvemos websites responsivos, otimizados para SEO e com alto desempenho, garantindo que sua marca tenha uma presença digital impactante. Nossos sites são projetados para oferecer a melhor experiência ao usuário em qualquer dispositivo, com foco em conversão e resultados.",
    benefits: [
      "Design responsivo e personalizado para sua marca",
      "Otimização para mecanismos de busca (SEO)",
      "Carregamento rápido e performance otimizada",
      "Painel administrativo intuitivo para gestão de conteúdo",
    ],
  },
  aplicativos: {
    id: "aplicativos",
    title: "Aplicativos Mobile",
    subtitle: "Soluções móveis que transformam ideias em realidade",
    description:
      "Criamos aplicativos nativos e híbridos para iOS e Android que oferecem experiências excepcionais aos usuários. Nosso processo de desenvolvimento é focado em criar interfaces intuitivas, garantir alta performance e implementar funcionalidades que realmente agregam valor ao seu negócio.",
    benefits: [
      "Design de interface (UI) e experiência do usuário (UX) de alta qualidade",
      "Desenvolvimento para iOS e Android (multiplataforma)",
      "Integração com APIs e serviços externos",
      "Suporte contínuo e atualizações de segurança",
    ],
  },
  sistemas: {
    id: "sistemas",
    title: "Sistemas Web Personalizados",
    subtitle: "Automatize processos e aumente a eficiência do seu negócio",
    description:
      "Desenvolvemos sistemas web sob medida para automatizar e otimizar os processos do seu negócio. Nossas soluções são escaláveis, seguras e adaptadas às necessidades específicas da sua empresa, permitindo maior produtividade e redução de custos operacionais.",
    benefits: [
      "Automação de processos manuais e repetitivos",
      "Interfaces administrativas intuitivas e personalizadas",
      "Segurança avançada e proteção de dados",
      "Escalabilidade para crescer junto com seu negócio",
    ],
  },
  ecommerce: {
    id: "ecommerce",
    title: "E-commerce Completo",
    subtitle: "Venda online com segurança e eficiência",
    description:
      "Criamos plataformas de e-commerce completas e personalizadas, focadas em proporcionar uma experiência de compra excepcional. Nossas soluções incluem integração com diversos meios de pagamento, gestão de estoque, logística e tudo o que você precisa para vender online com sucesso.",
    benefits: [
      "Experiência de compra otimizada para conversão",
      "Integração com múltiplos gateways de pagamento",
      "Gestão de estoque e logística automatizada",
      "Relatórios detalhados de vendas e comportamento do cliente",
    ],
  },
  consultoria: {
    id: "consultoria",
    title: "Consultoria Técnica Especializada",
    subtitle: "Orientação estratégica para decisões tecnológicas assertivas",
    description:
      "Oferecemos consultoria técnica especializada para ajudar sua empresa a tomar as melhores decisões tecnológicas. Nossa equipe analisa suas necessidades, propõe soluções personalizadas e acompanha a implementação, garantindo que você obtenha o máximo retorno sobre seu investimento em tecnologia.",
    benefits: [
      "Análise técnica aprofundada e diagnóstico de necessidades",
      "Estratégias práticas e personalizadas para seu negócio",
      "Acompanhamento próximo durante todo o processo",
      "Otimização de recursos e redução de custos tecnológicos",
    ],
  },
  suporte: {
    id: "suporte",
    title: "Suporte Técnico Contínuo",
    subtitle: "Mantenha seus sistemas funcionando perfeitamente",
    description:
      "Nosso serviço de suporte técnico garante que suas soluções digitais estejam sempre funcionando perfeitamente. Oferecemos monitoramento constante, manutenção preventiva e corretiva, além de um atendimento rápido e humanizado para resolver qualquer problema que possa surgir.",
    benefits: [
      "Suporte proativo com monitoramento constante",
      "Tempo de resposta rápido para solução de problemas",
      "Manutenção preventiva para evitar falhas",
      "Atendimento humanizado e personalizado",
    ],
  },
}
