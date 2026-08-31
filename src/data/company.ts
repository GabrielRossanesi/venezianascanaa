export const company = {
  name: 'Venezianas Canaã',
  phoneDisplay: '(41) 9 9699-9794',
  phoneNumber: '+5541996999794',
  whatsappNumber: '5541996999794',
  email: 'persianascanaa@gmail.com',
  instagramDisplay: '@persianascanaa_',
  instagramUrl: 'https://www.instagram.com/persianascanaa_?igsi=bGRjbDYwbzBpajdu',
  location: 'Curitiba (PR)',
  developerName: 'Morales Soluções',
  developerUrl: 'https://moralesolucoes.com.br', // TODO: confirmar URL
} as const

export const navigation = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Trabalhos', href: '#trabalhos' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export const services = [
  { title: 'Manutenção', description: 'Avaliação e manutenção de mecanismos, componentes e funcionamento geral.' },
  { title: 'Conserto', description: 'Diagnóstico do problema e indicação do reparo mais adequado para cada caso.' },
  { title: 'Troca de peças', description: 'Substituição de componentes danificados, conforme modelo e disponibilidade.' },
  { title: 'Automação', description: 'Análise de possibilidade para motorização e modernização do acionamento.' },
  { title: 'Instalação', description: 'Preparação para instalação de venezianas compatíveis com o ambiente.' },
  { title: 'Regulagem e higienização', description: 'Ajustes de funcionamento e cuidados para conservar o conjunto.' },
] as const

export const problems = [
  'Não sobe ou não desce',
  'Fita rompida ou desgastada',
  'Travando durante o uso',
  'Lâminas fora do lugar',
  'Motor sem responder',
  'Abertura pesada ou irregular',
] as const

export const processSteps = [
  { title: 'Chame no WhatsApp', description: 'Inicie a conversa pelo botão de atendimento.' },
  { title: 'Conte o que aconteceu', description: 'Se puder, envie fotos ou um vídeo curto do problema.' },
  { title: 'Receba a orientação', description: 'Alinhamos as informações e a possibilidade de atendimento.' },
  { title: 'Realizamos o serviço', description: 'Após a avaliação e o combinado, executamos a solução adequada.' },
] as const

export const differentials = [
  { title: 'Conversa sem complicação', description: 'Você explica o problema e recebe uma orientação clara sobre o próximo passo.' },
  { title: 'Cuidado dentro do imóvel', description: 'Atenção ao ambiente e organização durante cada etapa do atendimento.' },
  { title: 'Solução pensada para o caso', description: 'Cada veneziana e cada mecanismo pedem uma avaliação própria.' },
  { title: 'Contato direto e prático', description: 'WhatsApp acessível para enviar detalhes e agilizar o primeiro diagnóstico.' },
] as const

export const portfolioSlots = [
  { category: 'Antes e depois', title: 'Recuperação do funcionamento' },
  { category: 'Manutenção', title: 'Ajuste de mecanismos' },
  { category: 'Automação', title: 'Modernização do acionamento' },
] as const

export const reviewSummary = {
  rating: 4.8,
  count: 41,
  source: 'Google',
} as const

export const reviews = [
  {
    name: 'Grace Filipak Torres',
    rating: 5,
    text: 'Ótimo atendimento, entenderam meu problema e tiveram agilidade para encontrar a solução. Técnicos preparados e pacientes, que cuidaram dos detalhes para o serviço ficar 100%. Recomendo!',
  },
  {
    name: 'Luiz Felipe Jacobs Vidolin',
    rating: 5,
    text: 'Ótimo atendimento, orçamento rápido e execução dos serviços também, cumprem os prazos. Persianas da empresa ficaram como novas com os consertos.',
  },
  {
    name: 'Leticia Melo',
    rating: 5,
    text: 'RECOMENDO, empresa com ótimo atendimento, pontuais com entrega dentro do prazo, e ótima qualidade. Estão de parabéns.',
  },
  {
    name: 'Simone Akipao',
    rating: 5,
    text: 'Parabéns pelo serviço, muito bom. A persiana ficou nova. Obrigada.',
  },
  {
    name: 'Marília Araújo',
    rating: 5,
    text: 'Ficou ótima a cortina, são bem atenciosos e responsáveis. Entregaram no combinado.',
  },
] as const

export const faqs = [
  {
    question: 'Quais tipos de venezianas vocês atendem?',
    answer: 'O atendimento depende do modelo, mecanismo e disponibilidade de peças. Envie uma foto pelo WhatsApp para uma avaliação inicial.',
  },
  {
    question: 'É possível consertar sem trocar toda a veneziana?',
    answer: 'Em muitos casos pode existir uma solução pontual, mas somente a avaliação do conjunto confirma o reparo mais adequado.',
  },
  {
    question: 'Vocês fazem automação ou motorização?',
    answer: 'A possibilidade de automação precisa ser analisada conforme o modelo e as condições da instalação. Fale conosco para verificar o seu caso.',
  },
  {
    question: 'Qual é o prazo para atendimento?',
    answer: 'O prazo varia conforme a região, agenda e tipo de serviço. Consulte a disponibilidade atual diretamente pelo WhatsApp.',
  },
  {
    question: 'Como funciona o orçamento?',
    answer: 'Envie uma descrição, fotos ou vídeo. A partir dessas informações orientamos o próximo passo e, quando necessário, a avaliação técnica.',
  },
  {
    question: 'Quais regiões são atendidas?',
    answer: 'A área de atendimento ainda será publicada. Informe seu bairro e cidade no primeiro contato para confirmarmos a disponibilidade.',
  },
] as const

export const whatsappUrl = (origin: string) => {
  const message = `Olá! Vim pelo site${origin ? ` (${origin})` : ''} e gostaria de solicitar atendimento para minha veneziana.`
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`
}
