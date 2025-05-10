"use client"

export interface StepDetail {
    id: string
    title: string
    subtitle: string
    description: string
    benefits: string[]
  }
  
  /**
   * Dados detalhados de cada etapa
   * Usado para exibir informações completas no modal
   */
  export const stepsDetails: Record<string, StepDetail> = {
    discovery: {
      id: "definition",
      title: "Descoberta e Planejamento",
      subtitle: "Entendendo suas necessidades e definindo o caminho",
      description:
        "Na fase de descoberta, realizamos uma análise aprofundada das suas necessidades e objetivos de negócio. Trabalhamos em conjunto para definir o escopo do projeto, identificar requisitos técnicos e funcionais, e estabelecer métricas de sucesso. O resultado é um plano de projeto detalhado que servirá como guia para todas as etapas seguintes.",
      benefits: [
        "Análise de requisitos e objetivos de negócio",
        "Definição de escopo e cronograma",
        "Identificação de tecnologias e ferramentas necessárias",
        "Elaboração de orçamento detalhado",
      ],
    },
    design: {
      id: "design",
      title: "Design e Prototipagem",
      subtitle: "Visualizando a solução antes do desenvolvimento",
      description:
        "Nesta etapa, transformamos conceitos em elementos visuais tangíveis. Criamos wireframes, mockups e protótipos interativos que permitem visualizar a solução antes do desenvolvimento. Trabalhamos na arquitetura da informação, experiência do usuário (UX) e interface do usuário (UI), garantindo que o produto final seja não apenas funcional, mas também intuitivo e agradável de usar.",
      benefits: [
        "Criação de wireframes e mockups de alta fidelidade",
        "Desenvolvimento de protótipos interativos",
        "Design de interface focado na experiência do usuário",
        "Validação do conceito com stakeholders",
      ],
    },
    development: {
      id: "development",
      title: "Desenvolvimento",
      subtitle: "Transformando design em código funcional",
      description:
        "Com o design aprovado, nossa equipe de desenvolvimento transforma os protótipos em código funcional. Utilizamos metodologias ágeis para garantir entregas incrementais e feedback contínuo. Seguimos as melhores práticas de programação e padrões de código, garantindo que a solução seja robusta, escalável e de fácil manutenção. Durante esta fase, realizamos reuniões regulares para apresentar o progresso e ajustar o curso conforme necessário.",
      benefits: [
        "Desenvolvimento frontend e backend com tecnologias modernas",
        "Implementação de funcionalidades conforme especificações",
        "Integração com sistemas e APIs externas",
        "Reuniões regulares de acompanhamento e demonstração",
      ],
    },
    testing: {
      id: "testing",
      title: "Testes e Validação",
      subtitle: "Garantindo qualidade e performance",
      description:
        "A qualidade é uma prioridade em nosso processo. Realizamos testes rigorosos em múltiplos níveis para garantir que a solução funcione conforme esperado e esteja livre de bugs. Isso inclui testes unitários, de integração, funcionais e de aceitação do usuário. Também realizamos testes de performance, segurança e compatibilidade com diferentes dispositivos e navegadores. O feedback coletado nesta fase é incorporado para refinar e aprimorar a solução.",
      benefits: [
        "Testes automatizados e manuais para garantir qualidade",
        "Verificação de segurança e performance",
        "Testes de compatibilidade cross-browser e responsividade",
        "Validação com usuários reais para feedback",
      ],
    },
    launch: {
      id: "launch",
      title: "Lançamento e Suporte",
      subtitle: "Implementando a solução e garantindo seu sucesso",
      description:
        "O lançamento marca a transição da solução para o ambiente de produção. Realizamos a implantação com cuidado para minimizar qualquer impacto nos usuários e sistemas existentes. Após o lançamento, oferecemos suporte contínuo para garantir que tudo funcione conforme esperado e para resolver rapidamente quaisquer problemas que possam surgir. Também fornecemos treinamento para sua equipe e documentação detalhada para facilitar a adoção e uso da nova solução.",
      benefits: [
        "Implantação cuidadosa em ambiente de produção",
        "Monitoramento contínuo de performance e estabilidade",
        "Suporte técnico e manutenção preventiva",
        "Treinamento e documentação para sua equipe",
      ],
    },
  }
  