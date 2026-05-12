const today = new Date("2026-05-12T12:00:00-03:00");

const leads = [
  {
    id: "lead-001",
    name: "Mariana Lopes",
    phone: "+55 11 98765-4321",
    phoneE164: "5511987654321",
    email: "mariana.lopes@email.com",
    channel: "whatsapp",
    baseNumber: "+55 11 4002-8922",
    crmStatus: "quente",
    serviceStatus: "followup_pendente",
    interest: "Lente multifocal",
    owner: "Lucas SDR",
    createdAt: "2026-05-12T08:45:00-03:00",
    firstResponseAt: "2026-05-12T08:56:00-03:00",
    lastInteractionAt: "2026-05-12T10:08:00-03:00",
    nextActionAt: "2026-05-12T15:30:00-03:00",
    estimatedValue: 2380,
    enteredFlow: true,
    flowStep: "Orcamento enviado",
    lastDirection: "outbound",
    note: "Quer lente multifocal premium com armacao discreta.",
  },
  {
    id: "lead-002",
    name: "Rafael Antunes",
    phone: "+55 21 99888-1212",
    phoneE164: "5521998881212",
    email: "rafael@email.com",
    channel: "whatsapp",
    baseNumber: "+55 21 3003-4455",
    crmStatus: "engajado",
    serviceStatus: "em_atendimento",
    interest: "Exame e armacao",
    owner: "Renata",
    createdAt: "2026-05-12T09:05:00-03:00",
    firstResponseAt: "2026-05-12T09:10:00-03:00",
    lastInteractionAt: "2026-05-12T11:40:00-03:00",
    nextActionAt: "2026-05-12T16:00:00-03:00",
    estimatedValue: 1850,
    enteredFlow: true,
    flowStep: "Qualificacao",
    lastDirection: "inbound",
    note: "Perguntou sobre agenda para exame hoje.",
  },
  {
    id: "lead-003",
    name: "Camila Torres",
    phone: "+55 11 97654-1188",
    phoneE164: "5511976541188",
    email: "camila.t@email.com",
    channel: "instagram",
    baseNumber: "+55 11 4002-8922",
    crmStatus: "novo",
    serviceStatus: "sem_resposta",
    interest: "Oculos de sol",
    owner: "Aguardando",
    createdAt: "2026-05-12T10:52:00-03:00",
    firstResponseAt: null,
    lastInteractionAt: "2026-05-12T10:52:00-03:00",
    nextActionAt: "2026-05-12T11:07:00-03:00",
    estimatedValue: 690,
    enteredFlow: false,
    flowStep: "Entrada",
    lastDirection: "inbound",
    note: "Veio de campanha de Dia das Maes.",
  },
  {
    id: "lead-004",
    name: "Eduardo Martins",
    phone: "+55 31 98801-3309",
    phoneE164: "5531988013309",
    email: "eduardo.m@email.com",
    channel: "site",
    baseNumber: "+55 11 4002-8922",
    crmStatus: "convertido",
    serviceStatus: "concluido",
    interest: "Lente antirreflexo",
    owner: "Lucas SDR",
    createdAt: "2026-05-10T14:12:00-03:00",
    firstResponseAt: "2026-05-10T14:28:00-03:00",
    lastInteractionAt: "2026-05-11T16:12:00-03:00",
    nextActionAt: null,
    estimatedValue: 1440,
    enteredFlow: true,
    flowStep: "Compra confirmada",
    lastDirection: "outbound",
    note: "Compra confirmada na unidade Jardins.",
  },
  {
    id: "lead-005",
    name: "Bianca Reis",
    phone: "+55 11 99122-8430",
    phoneE164: "5511991228430",
    email: "bianca.reis@email.com",
    channel: "whatsapp",
    baseNumber: "+55 11 4002-8922",
    crmStatus: "quente",
    serviceStatus: "aguardando_cliente",
    interest: "Armacao acetato",
    owner: "Paula",
    createdAt: "2026-05-09T13:20:00-03:00",
    firstResponseAt: "2026-05-09T13:26:00-03:00",
    lastInteractionAt: "2026-05-10T09:45:00-03:00",
    nextActionAt: "2026-05-12T13:00:00-03:00",
    estimatedValue: 920,
    enteredFlow: true,
    flowStep: "Proposta enviada",
    lastDirection: "outbound",
    note: "Gostou de duas armacoes e pediu condicoes.",
  },
  {
    id: "lead-006",
    name: "Otavio Nunes",
    phone: "+55 41 98877-2211",
    phoneE164: "5541988772211",
    email: "otavio.nunes@email.com",
    channel: "indicacao",
    baseNumber: "+55 11 4002-8922",
    crmStatus: "perdido",
    serviceStatus: "concluido",
    interest: "Garantia",
    owner: "Renata",
    createdAt: "2026-05-04T16:30:00-03:00",
    firstResponseAt: "2026-05-04T16:50:00-03:00",
    lastInteractionAt: "2026-05-06T10:15:00-03:00",
    nextActionAt: null,
    estimatedValue: 0,
    enteredFlow: false,
    flowStep: "Encerrado",
    lastDirection: "outbound",
    note: "Caso resolvido sem compra.",
  },
  {
    id: "lead-007",
    name: "Fernanda Maia",
    phone: "+55 11 94440-1122",
    phoneE164: "5511944401122",
    email: "fernanda.maia@email.com",
    channel: "whatsapp",
    baseNumber: "+55 11 4002-8922",
    crmStatus: "quente",
    serviceStatus: "followup_pendente",
    interest: "Lente ocupacional",
    owner: "Lucas SDR",
    createdAt: "2026-05-08T11:05:00-03:00",
    firstResponseAt: "2026-05-08T11:17:00-03:00",
    lastInteractionAt: "2026-05-09T08:30:00-03:00",
    nextActionAt: "2026-05-12T09:00:00-03:00",
    estimatedValue: 1680,
    enteredFlow: true,
    flowStep: "Follow-up humano",
    lastDirection: "outbound",
    note: "Usa computador o dia todo e pediu opcao premium.",
  },
  {
    id: "lead-008",
    name: "Joao Pereira",
    phone: "+55 11 95555-0192",
    phoneE164: "5511955550192",
    email: "joao.pereira@email.com",
    channel: "site",
    baseNumber: "+55 11 4002-8922",
    crmStatus: "engajado",
    serviceStatus: "agendado",
    interest: "Exame",
    owner: "Paula",
    createdAt: "2026-05-11T17:42:00-03:00",
    firstResponseAt: "2026-05-11T17:54:00-03:00",
    lastInteractionAt: "2026-05-12T08:10:00-03:00",
    nextActionAt: "2026-05-13T10:00:00-03:00",
    estimatedValue: 780,
    enteredFlow: true,
    flowStep: "Agendamento",
    lastDirection: "outbound",
    note: "Agendado para avaliacao amanha.",
  },
  {
    id: "lead-009",
    name: "Patricia Salles",
    phone: "+55 21 97770-4412",
    phoneE164: "5521977704412",
    email: "patricia.salles@email.com",
    channel: "instagram",
    baseNumber: "+55 21 3003-4455",
    crmStatus: "novo",
    serviceStatus: "sem_resposta",
    interest: "Lentes de contato",
    owner: "Aguardando",
    createdAt: "2026-05-12T11:32:00-03:00",
    firstResponseAt: null,
    lastInteractionAt: "2026-05-12T11:32:00-03:00",
    nextActionAt: "2026-05-12T11:47:00-03:00",
    estimatedValue: 520,
    enteredFlow: false,
    flowStep: "Entrada",
    lastDirection: "inbound",
    note: "Perguntou preco de lentes mensais.",
  },
  {
    id: "lead-010",
    name: "Gustavo Rocha",
    phone: "+55 11 93331-7755",
    phoneE164: "5511933317755",
    email: "gustavo.rocha@email.com",
    channel: "whatsapp",
    baseNumber: "+55 11 4002-8922",
    crmStatus: "convertido",
    serviceStatus: "concluido",
    interest: "Oculos completo",
    owner: "Renata",
    createdAt: "2026-05-07T10:10:00-03:00",
    firstResponseAt: "2026-05-07T10:18:00-03:00",
    lastInteractionAt: "2026-05-08T18:20:00-03:00",
    nextActionAt: null,
    estimatedValue: 2120,
    enteredFlow: true,
    flowStep: "Compra confirmada",
    lastDirection: "outbound",
    note: "Conversao apos follow-up manual.",
  },
];

const dailyVolume = [
  9, 11, 8, 12, 15, 13, 17, 14, 19, 18, 22, 20, 24, 21, 26, 23, 25, 29, 28, 31,
  27, 33, 30, 35, 34, 38, 36, 41, 39, 44,
];

const agentConfig = {
  name: "Clara",
  tone: "premium",
  coldTriggerHours: 24,
  handoffScore: 72,
  scripts: {
    welcome:
      "Ola, {nome}. Sou a Clara, assistente da OpticFlow. Vou te ajudar a encontrar a melhor solucao visual antes de passar para uma consultora.",
    qualification:
      "Voce procura exame, armacao, lentes ou uma cotacao completa? Se puder, me conte tambem quando foi sua ultima avaliacao.",
    cold:
      "{nome}, se ainda estiver comparando opcoes, posso te mandar uma sugestao por perfil de uso: trabalho no computador, leitura, direcao ou uso diario.",
    handoff:
      "Perfeito. Pela sua necessidade, vou chamar uma consultora para finalizar valores, disponibilidade e melhor horario de atendimento.",
  },
  nurtureSequence: [
    {
      delayHours: 2,
      goal: "Recuperar contexto",
      message: "Ainda quer ajuda com {interesse}? Posso separar uma opcao premium e uma opcao custo-beneficio.",
    },
    {
      delayHours: 24,
      goal: "Educar",
      message:
        "Uma dica rapida: a escolha da lente muda muito conforme rotina, tela, direcao e sensibilidade a luz. Quer que eu te indique o melhor caminho?",
    },
    {
      delayHours: 48,
      goal: "Criar proxima acao",
      message:
        "Posso deixar uma consultora pronta para te atender hoje. Prefere receber valores por WhatsApp ou agendar visita na loja?",
    },
  ],
};

let agentEvents = [
  { id: "evt-001", leadId: "lead-001", type: "pre_atendimento", createdAt: "2026-05-12T08:46:00-03:00", scoreDelta: 12 },
  { id: "evt-002", leadId: "lead-001", type: "qualificacao", createdAt: "2026-05-12T08:48:00-03:00", scoreDelta: 24 },
  { id: "evt-003", leadId: "lead-002", type: "pre_atendimento", createdAt: "2026-05-12T09:06:00-03:00", scoreDelta: 10 },
  { id: "evt-004", leadId: "lead-003", type: "nutricao_frio", createdAt: "2026-05-12T11:07:00-03:00", scoreDelta: 8 },
  { id: "evt-005", leadId: "lead-005", type: "nutricao_frio", createdAt: "2026-05-10T13:00:00-03:00", scoreDelta: 11 },
  { id: "evt-006", leadId: "lead-007", type: "handoff_humano", createdAt: "2026-05-08T11:24:00-03:00", scoreDelta: 18 },
  { id: "evt-007", leadId: "lead-009", type: "nutricao_frio", createdAt: "2026-05-12T11:47:00-03:00", scoreDelta: 7 },
];

const statusLabels = {
  novo: "Novo",
  engajado: "Engajado",
  quente: "Quente",
  convertido: "Convertido",
  perdido: "Perdido",
  sem_resposta: "Sem resposta",
  em_atendimento: "Em atendimento",
  aguardando_cliente: "Aguardando cliente",
  followup_pendente: "Follow-up pendente",
  agendado: "Agendado",
  concluido: "Concluido",
  nova: "Nova",
  convertida: "Convertida",
};

const channelLabels = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  site: "Site",
  indicacao: "Indicacao",
};

const icons = {
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-9"/></svg>',
  messages: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-6a8 8 0 1 1 18-5Z"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  bot: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="5" y="7" width="14" height="11" rx="3"/><path d="M12 7V3"/><path d="M8 12h.01"/><path d="M16 12h.01"/><path d="M9 16h6"/><path d="M3 11v3"/><path d="M21 11v3"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.04.04a2 2 0 1 1-2.83 2.83l-.04-.04a1.8 1.8 0 0 0-1.98-.36 1.8 1.8 0 0 0-1.08 1.65V21a2 2 0 1 1-4 0v-.06A1.8 1.8 0 0 0 8.8 19.3a1.8 1.8 0 0 0-1.98.36l-.04.04a2 2 0 1 1-2.83-2.83l.04-.04a1.8 1.8 0 0 0 .36-1.98 1.8 1.8 0 0 0-1.65-1.08H2.6a2 2 0 1 1 0-4h.06A1.8 1.8 0 0 0 4.3 8.8a1.8 1.8 0 0 0-.36-1.98l-.04-.04a2 2 0 1 1 2.83-2.83l.04.04a1.8 1.8 0 0 0 1.98.36 1.8 1.8 0 0 0 1.08-1.65V2.6a2 2 0 1 1 4 0v.06A1.8 1.8 0 0 0 15.2 4.3a1.8 1.8 0 0 0 1.98-.36l.04-.04a2 2 0 1 1 2.83 2.83l-.04.04a1.8 1.8 0 0 0-.36 1.98 1.8 1.8 0 0 0 1.65 1.08h.06a2 2 0 1 1 0 4h-.06A1.8 1.8 0 0 0 19.4 15Z"/></svg>',
};

const state = {
  view: "dashboard",
  period: "30",
  channel: "all",
  search: "",
  crmStatus: "all",
  serviceStatus: "all",
  conversationStatus: "all",
};

const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

function init() {
  document.querySelectorAll(".nav-icon").forEach((icon) => {
    icon.innerHTML = icons[icon.dataset.icon] || "";
  });

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.jump));
  });

  bindFilter("periodFilter", "period");
  bindFilter("channelFilter", "channel");
  bindFilter("searchInput", "search", "input");
  bindFilter("crmStatusFilter", "crmStatus");
  bindFilter("serviceStatusFilter", "serviceStatus");
  bindFilter("conversationStatusFilter", "conversationStatus");

  document.getElementById("drawerClose").addEventListener("click", closeDrawer);
  document.getElementById("saveAgentConfig").addEventListener("click", saveAgentConfig);
  document.getElementById("simulateColdLead").addEventListener("click", simulateColdLeadNurture);
  hydrateAgentForm();

  render();
}

function bindFilter(id, key, eventName = "change") {
  const element = document.getElementById(id);
  if (!element) return;
  element.addEventListener(eventName, (event) => {
    state[key] = event.target.value;
    render();
  });
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((panel) => {
    panel.classList.remove("active-view");
  });
  document.getElementById(`${view}View`).classList.add("active-view");
  document.getElementById("pageTitle").textContent = pageTitle(view);
  closeDrawer();
  render();
}

function pageTitle(view) {
  return {
    dashboard: "Dashboard",
    conversations: "Fluxo de conversas",
    agent: "Agente virtual",
    leads: "Leads",
    followups: "Follow-ups",
    goals: "Metas e CRM",
    settings: "Configuracoes",
  }[view];
}

function render() {
  const filtered = getFilteredLeads();
  renderBadges(filtered);
  renderMetrics(filtered);
  renderCharts(filtered);
  renderHotLeads(filtered);
  renderConversations(filtered);
  renderLeadTable(filtered);
  renderFollowups(filtered);
  renderGoals(filtered);
  renderAgent(filtered);
}

function getFilteredLeads() {
  const search = state.search.trim().toLowerCase();
  return leads.filter((lead) => {
    const inPeriod = isInPeriod(lead.createdAt, state.period);
    const matchesChannel = state.channel === "all" || lead.channel === state.channel;
    const matchesCrm = state.crmStatus === "all" || lead.crmStatus === state.crmStatus;
    const matchesService =
      state.serviceStatus === "all" || lead.serviceStatus === state.serviceStatus;
    const matchesSearch =
      !search ||
      [lead.name, lead.phone, lead.email, lead.interest, lead.owner]
        .join(" ")
        .toLowerCase()
        .includes(search);

    return inPeriod && matchesChannel && matchesCrm && matchesService && matchesSearch;
  });
}

function isInPeriod(dateValue, period) {
  const date = new Date(dateValue);
  if (period === "today") return sameDay(date, today);
  if (period === "month") {
    return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  }
  const days = Number(period);
  const diffMs = today.getTime() - date.getTime();
  return diffMs <= days * 24 * 60 * 60 * 1000;
}

function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function renderBadges(filtered) {
  document.getElementById("leadBadge").textContent = filtered.length;
  document.getElementById("conversationBadge").textContent = filtered.filter((lead) =>
    ["sem_resposta", "followup_pendente"].includes(lead.serviceStatus),
  ).length;
  document.getElementById("agentBadge").textContent = uniqueLeadIds(agentEvents).length;
}

function renderMetrics(filtered) {
  const total = filtered.length;
  const whatsapp = count(filtered, (lead) => lead.channel === "whatsapp");
  const unanswered = count(filtered, (lead) => lead.serviceStatus === "sem_resposta");
  const hotWithoutFollowup = count(
    filtered,
    (lead) => lead.crmStatus === "quente" && lead.serviceStatus === "followup_pendente",
  );
  const conversions = count(filtered, (lead) => lead.crmStatus === "convertido");
  const contacted = count(filtered, (lead) => Boolean(lead.firstResponseAt));
  const responseMinutes = average(
    filtered
      .filter((lead) => lead.firstResponseAt)
      .map((lead) => minutesBetween(lead.createdAt, lead.firstResponseAt)),
  );
  const withinSla = filtered.filter(
    (lead) => lead.firstResponseAt && minutesBetween(lead.createdAt, lead.firstResponseAt) <= 15,
  ).length;
  const potential = filtered
    .filter((lead) => !["convertido", "perdido"].includes(lead.crmStatus))
    .reduce((sum, lead) => sum + lead.estimatedValue, 0);
  const agentData = getAgentMetrics(filtered);

  const metrics = [
    {
      label: "Leads no periodo",
      value: total,
      helper: `${percent(total, leads.length)} da base exibida`,
    },
    {
      label: "WhatsApp base",
      value: whatsapp,
      helper: `${percent(whatsapp, total)} dos leads filtrados`,
    },
    {
      label: "Sem resposta",
      value: unanswered,
      helper: unanswered > 0 ? "Acao imediata recomendada" : "Fila em dia",
      danger: unanswered > 0,
    },
    {
      label: "SLA ate 15min",
      value: `${percent(withinSla, contacted)}`,
      helper: `${formatNumber(responseMinutes)} min de primeira resposta`,
    },
    {
      label: "Quentes sem follow-up",
      value: hotWithoutFollowup,
      helper: "Prioridade comercial",
      warning: hotWithoutFollowup > 0,
    },
    {
      label: "Taxa de contato",
      value: percent(contacted, total),
      helper: "Leads com resposta humana",
    },
    {
      label: "Conversao",
      value: percent(conversions, total),
      helper: `${conversions} convertidos no filtro`,
    },
    {
      label: "Receita potencial",
      value: moneyFormatter.format(potential),
      helper: "Carteira aberta",
    },
    {
      label: "Atendidos pelo agente",
      value: agentData.handled,
      helper: `${agentData.events} interacoes automatizadas`,
    },
    {
      label: "Leads frios nutridos",
      value: agentData.coldNurtured,
      helper: "Entraram na regua automatica",
    },
    {
      label: "Qualificados pelo agente",
      value: agentData.qualified,
      helper: `${agentData.avgScore} pontos de score medio`,
    },
    {
      label: "Repasse ao humano",
      value: agentData.handoffs,
      helper: `Score minimo ${agentConfig.handoffScore}`,
    },
  ];

  document.getElementById("metricGrid").innerHTML = metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <span>${metric.label}</span>
          <strong>${metric.value}</strong>
          <small class="${metric.danger ? "negative" : metric.warning ? "delta amber" : ""}">
            ${metric.helper}
          </small>
        </article>
      `,
    )
    .join("");
}

function renderCharts(filtered) {
  const maxVolume = Math.max(...dailyVolume);
  document.getElementById("volumeChart").innerHTML = dailyVolume
    .map((value) => `<span class="chart-bar" style="height:${(value / maxVolume) * 100}%"></span>`)
    .join("");

  const total = filtered.length || 1;
  const funnel = [
    ["Lead", filtered.length],
    ["Engajado", count(filtered, (lead) => lead.enteredFlow || lead.crmStatus !== "novo")],
    ["Quente", count(filtered, (lead) => lead.crmStatus === "quente")],
    ["Convertido", count(filtered, (lead) => lead.crmStatus === "convertido")],
  ];
  document.getElementById("funnelChart").innerHTML = funnel
    .map(
      ([label, value]) => `
      <div class="funnel-row">
        <div class="funnel-label"><span>${label}</span><strong>${value}</strong></div>
        <div class="funnel-track"><div class="funnel-fill" style="width:${Math.max(
          (value / total) * 100,
          3,
        )}%"></div></div>
      </div>
    `,
    )
    .join("");

  const engaged = count(filtered, (lead) => lead.enteredFlow);
  const engagement = percentNumber(engaged, filtered.length);
  const donut = document.getElementById("donutChart");
  donut.style.setProperty("--donut-angle", `${engagement * 3.6}deg`);
  donut.innerHTML = `<strong>${engagement}%</strong>`;
  document.getElementById("donutLegend").innerHTML = `
    <div class="legend-item"><span class="legend-dot"></span> ${engaged} entraram no fluxo</div>
    <div class="legend-item"><span class="legend-dot soft"></span> ${filtered.length - engaged} fora do fluxo</div>
  `;
}

function renderHotLeads(filtered) {
  const hot = filtered
    .filter((lead) => lead.crmStatus === "quente" || lead.serviceStatus === "followup_pendente")
    .sort((a, b) => new Date(a.lastInteractionAt) - new Date(b.lastInteractionAt))
    .slice(0, 5);

  document.getElementById("hotLeadList").innerHTML =
    hot.length === 0
      ? `<div class="hot-item"><div class="lead-name"><strong>Nenhum lead quente no filtro</strong><span>A carteira esta sem pendencias criticas.</span></div></div>`
      : hot.map((lead) => hotLeadTemplate(lead)).join("");
}

function hotLeadTemplate(lead) {
  return `
    <article class="hot-item">
      <div class="lead-name">
        <strong>${lead.name}</strong>
        <span>${lead.phone} - ${channelLabels[lead.channel]} - ${lead.owner}</span>
      </div>
      ${slaBadge(lead)}
      <a class="wa-button" href="${whatsappUrl(lead)}" target="_blank" rel="noreferrer">WhatsApp</a>
    </article>
  `;
}

function renderConversations(filtered) {
  const conversations = filtered.filter((lead) => {
    const status = conversationStatus(lead);
    return state.conversationStatus === "all" || status === state.conversationStatus;
  });

  document.getElementById("conversationBoard").innerHTML =
    conversations.length === 0
      ? emptyState("Nenhuma conversa encontrada", "Ajuste os filtros para ampliar a busca.")
      : conversations.map((lead) => conversationTemplate(lead)).join("");

  document.querySelectorAll("[data-open-lead]").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.openLead));
  });
}

function conversationTemplate(lead) {
  const status = conversationStatus(lead);
  return `
    <article class="conversation-card">
      <div>
        <div class="lead-name">
          <strong>${lead.name}</strong>
          <span class="mono">${lead.phone}</span>
          <span>${lead.email}</span>
        </div>
        <div class="conversation-meta">
          <span class="badge blue">${channelLabels[lead.channel]}</span>
          <span class="badge ${badgeTone(status)}">${statusLabels[status]}</span>
          <span class="badge gray">${lead.owner}</span>
        </div>
      </div>
      <div class="conversation-flow">
        ${flowTemplate(lead)}
      </div>
      <div class="row-actions">
        <button class="secondary-button" data-open-lead="${lead.id}" type="button">Detalhes</button>
        <a class="wa-button" href="${whatsappUrl(lead)}" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </article>
  `;
}

function flowTemplate(lead) {
  const steps = [
    "Entrada",
    "Qualificacao",
    "Nutricao automatica",
    "Orcamento enviado",
    "Follow-up humano",
    "Compra confirmada",
  ];
  const activeIndex = Math.max(0, steps.findIndex((step) => step === lead.flowStep));
  return steps
    .map((step, index) => {
      const stateClass =
        index < activeIndex || lead.crmStatus === "convertido"
          ? "done"
          : index === activeIndex
            ? "current"
            : "";
      return `<div class="flow-step ${stateClass}"><span>${step}</span></div>`;
    })
    .join("");
}

function renderLeadTable(filtered) {
  const sorted = [...filtered].sort((a, b) => priorityScore(b) - priorityScore(a));
  document.getElementById("leadTableBody").innerHTML =
    sorted.length === 0
      ? `<tr><td colspan="10">${emptyState("Nenhum lead encontrado", "Ajuste os filtros para ver mais contatos.")}</td></tr>`
      : sorted.map((lead) => leadRowTemplate(lead)).join("");

  document.querySelectorAll("[data-open-lead]").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.openLead));
  });
}

function leadRowTemplate(lead) {
  const priority = lead.serviceStatus === "sem_resposta" || lead.serviceStatus === "followup_pendente";
  return `
    <tr class="${priority ? "priority-row" : ""}">
      <td data-label="Lead">
        <div class="lead-name">
          <strong>${lead.name}</strong>
          <span class="mono">${lead.phone}</span>
          <span>${lead.email}</span>
        </div>
      </td>
      <td data-label="Entrada">${dateFormatter.format(new Date(lead.createdAt))}</td>
      <td data-label="Canal"><span class="badge blue">${channelLabels[lead.channel]}</span></td>
      <td data-label="Numero base" class="mono">${lead.baseNumber}</td>
      <td data-label="Status"><span class="badge ${badgeTone(lead.crmStatus)}">${statusLabels[lead.crmStatus]}</span></td>
      <td data-label="Atendimento"><span class="badge ${badgeTone(lead.serviceStatus)}">${statusLabels[lead.serviceStatus]}</span></td>
      <td data-label="Interesse">${lead.interest}</td>
      <td data-label="SLA">${slaBadge(lead)}</td>
      <td data-label="Valor" class="mono">${moneyFormatter.format(lead.estimatedValue)}</td>
      <td data-label="Acoes">
        <div class="row-actions">
          <button class="secondary-button" data-open-lead="${lead.id}" type="button">Ver</button>
          <a class="wa-button" href="${whatsappUrl(lead)}" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </td>
    </tr>
  `;
}

function renderAgent(filtered) {
  const metrics = getAgentMetrics(filtered);
  const coldLeads = filtered.filter(isColdLead);

  document.getElementById("agentMetricGrid").innerHTML = [
    ["Leads atendidos", metrics.handled, "Receberam pre-atendimento"],
    ["Frios em nutricao", metrics.coldNurtured, `${coldLeads.length} frios no filtro atual`],
    ["Qualificados", metrics.qualified, "Geraram dados para o CRM"],
    ["Repasses humanos", metrics.handoffs, `Score acima de ${agentConfig.handoffScore}`],
  ]
    .map(
      ([label, value, helper]) => `
        <article class="metric-card">
          <span>${label}</span>
          <strong>${value}</strong>
          <small>${helper}</small>
        </article>
      `,
    )
    .join("");

  document.getElementById("nurtureList").innerHTML = agentConfig.nurtureSequence
    .map(
      (step, index) => `
        <article class="nurture-step">
          <span class="step-number">${index + 1}</span>
          <div class="lead-name">
            <strong>${step.goal}</strong>
            <span>${step.message}</span>
          </div>
          <span class="badge blue">${step.delayHours}h</span>
        </article>
      `,
    )
    .join("");

  const previewLead = coldLeads[0] || filtered[0] || leads[0];
  document.getElementById("agentPreview").innerHTML = buildAgentPreview(previewLead);
}

function hydrateAgentForm() {
  document.getElementById("agentNameInput").value = agentConfig.name;
  document.getElementById("agentToneInput").value = agentConfig.tone;
  document.getElementById("coldTriggerInput").value = agentConfig.coldTriggerHours;
  document.getElementById("handoffScoreInput").value = agentConfig.handoffScore;
  document.getElementById("welcomeScriptInput").value = agentConfig.scripts.welcome;
  document.getElementById("qualificationScriptInput").value = agentConfig.scripts.qualification;
  document.getElementById("coldScriptInput").value = agentConfig.scripts.cold;
  document.getElementById("handoffScriptInput").value = agentConfig.scripts.handoff;
}

function saveAgentConfig() {
  agentConfig.name = document.getElementById("agentNameInput").value.trim() || "Clara";
  agentConfig.tone = document.getElementById("agentToneInput").value;
  agentConfig.coldTriggerHours = Number(document.getElementById("coldTriggerInput").value) || 24;
  agentConfig.handoffScore = Number(document.getElementById("handoffScoreInput").value) || 72;
  agentConfig.scripts.welcome = document.getElementById("welcomeScriptInput").value.trim();
  agentConfig.scripts.qualification = document.getElementById("qualificationScriptInput").value.trim();
  agentConfig.scripts.cold = document.getElementById("coldScriptInput").value.trim();
  agentConfig.scripts.handoff = document.getElementById("handoffScriptInput").value.trim();
  render();
}

function simulateColdLeadNurture() {
  const filtered = getFilteredLeads();
  const target = filtered.find(isColdLead) || leads.find(isColdLead) || filtered[0] || leads[0];
  const newEvent = {
    id: `evt-${String(agentEvents.length + 1).padStart(3, "0")}`,
    leadId: target.id,
    type: "nutricao_frio",
    createdAt: today.toISOString(),
    scoreDelta: 9,
  };

  agentEvents = [newEvent, ...agentEvents];
  target.enteredFlow = true;
  target.flowStep = "Nutricao automatica";
  target.lastDirection = "outbound";
  target.lastInteractionAt = today.toISOString();
  target.note = `${target.note} Agente enviou nutricao automatica para lead frio.`;
  render();
  setView("agent");
}

function buildAgentPreview(lead) {
  const replacements = {
    nome: lead.name.split(" ")[0],
    interesse: lead.interest.toLowerCase(),
  };
  const welcome = interpolate(agentConfig.scripts.welcome, replacements);
  const qualification = interpolate(agentConfig.scripts.qualification, replacements);
  const cold = interpolate(agentConfig.scripts.cold, replacements);
  const handoff = interpolate(agentConfig.scripts.handoff, replacements);

  return `
    <div class="chat-bubble agent"><small>${agentConfig.name}</small>${welcome}</div>
    <div class="chat-bubble lead"><small>${lead.name}</small>Estou pesquisando melhor ainda.</div>
    <div class="chat-bubble agent"><small>${agentConfig.name}</small>${qualification}</div>
    <div class="chat-bubble agent"><small>Nutricao fria</small>${cold}</div>
    <div class="chat-bubble agent"><small>Repasse</small>${handoff}</div>
  `;
}

function getAgentMetrics(filtered) {
  const leadIds = new Set(filtered.map((lead) => lead.id));
  const events = agentEvents.filter((event) => leadIds.has(event.leadId));
  const handled = uniqueLeadIds(events.filter((event) => event.type === "pre_atendimento")).length;
  const coldNurtured = uniqueLeadIds(events.filter((event) => event.type === "nutricao_frio")).length;
  const qualified = uniqueLeadIds(events.filter((event) => event.type === "qualificacao")).length;
  const handoffs = uniqueLeadIds(events.filter((event) => event.type === "handoff_humano")).length;
  const avgScore = events.length
    ? Math.round(events.reduce((sum, event) => sum + event.scoreDelta, 0) / events.length)
    : 0;

  return {
    events: events.length,
    handled,
    coldNurtured,
    qualified,
    handoffs,
    avgScore,
  };
}

function isColdLead(lead) {
  return ["novo", "engajado"].includes(lead.crmStatus) && !["convertido", "perdido"].includes(lead.crmStatus);
}

function renderFollowups(filtered) {
  const followups = filtered.filter((lead) => lead.serviceStatus === "followup_pendente");
  document.getElementById("followupGrid").innerHTML =
    followups.length === 0
      ? emptyState("Nenhum follow-up pendente", "A rotina comercial esta sob controle.")
      : followups
          .map(
            (lead) => `
              <article class="followup-card">
                <div class="lead-name">
                  <strong>${lead.name}</strong>
                  <span>${lead.interest} - ${lead.owner} - proxima acao ${formatRelative(lead.nextActionAt)}</span>
                </div>
                <div class="row-actions">
                  <button class="secondary-button" data-open-lead="${lead.id}" type="button">Detalhes</button>
                  <a class="wa-button" href="${whatsappUrl(lead)}" target="_blank" rel="noreferrer">WhatsApp</a>
                </div>
              </article>
            `,
          )
          .join("");

  document.querySelectorAll("[data-open-lead]").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.openLead));
  });
}

function renderGoals(filtered) {
  const total = filtered.length || 1;
  const goals = [
    {
      label: "Conversao do periodo",
      value: percentNumber(count(filtered, (lead) => lead.crmStatus === "convertido"), total),
      target: 22,
    },
    {
      label: "SLA de primeira resposta",
      value: percentNumber(
        count(
          filtered,
          (lead) => lead.firstResponseAt && minutesBetween(lead.createdAt, lead.firstResponseAt) <= 15,
        ),
        count(filtered, (lead) => lead.firstResponseAt),
      ),
      target: 80,
    },
    {
      label: "Contato efetivo",
      value: percentNumber(count(filtered, (lead) => lead.firstResponseAt), total),
      target: 90,
    },
    {
      label: "Engajamento no fluxo",
      value: percentNumber(count(filtered, (lead) => lead.enteredFlow), total),
      target: 75,
    },
  ];

  document.getElementById("goalGrid").innerHTML = goals
    .map(
      (goal) => `
        <article class="goal-card">
          <div class="panel-head">
            <div>
              <p class="eyebrow">Meta ${goal.target}%</p>
              <h2>${goal.label}</h2>
            </div>
            <span class="badge ${goal.value >= goal.target ? "green" : "amber"}">${goal.value}%</span>
          </div>
          <div class="goal-bar"><span style="width:${Math.min(goal.value, 100)}%"></span></div>
        </article>
      `,
    )
    .join("");
}

function openDrawer(leadId) {
  const lead = leads.find((item) => item.id === leadId);
  if (!lead) return;

  document.getElementById("drawerContent").innerHTML = `
    <p class="eyebrow">Detalhes do lead</p>
    <h2>${lead.name}</h2>
    <p class="mono">${lead.phone}</p>
    <a class="wa-button" href="${whatsappUrl(lead)}" target="_blank" rel="noreferrer">Abrir WhatsApp</a>

    <div class="drawer-section">
      <div class="drawer-row"><span>Email</span><strong>${lead.email}</strong></div>
      <div class="drawer-row"><span>Canal</span><strong>${channelLabels[lead.channel]}</strong></div>
      <div class="drawer-row"><span>Numero base</span><strong>${lead.baseNumber}</strong></div>
      <div class="drawer-row"><span>Status CRM</span><strong>${statusLabels[lead.crmStatus]}</strong></div>
      <div class="drawer-row"><span>Atendimento</span><strong>${statusLabels[lead.serviceStatus]}</strong></div>
      <div class="drawer-row"><span>Responsavel</span><strong>${lead.owner}</strong></div>
      <div class="drawer-row"><span>Valor estimado</span><strong>${moneyFormatter.format(lead.estimatedValue)}</strong></div>
    </div>

    <div class="drawer-section">
      <h3>Historico resumido</h3>
      <div class="drawer-row"><span>Entrada</span><strong>${dateFormatter.format(new Date(lead.createdAt))}</strong></div>
      <div class="drawer-row"><span>Primeira resposta</span><strong>${lead.firstResponseAt ? `${minutesBetween(lead.createdAt, lead.firstResponseAt)} min` : "Pendente"}</strong></div>
      <div class="drawer-row"><span>Ultima interacao</span><strong>${formatRelative(lead.lastInteractionAt)}</strong></div>
      <div class="drawer-row"><span>Proxima acao</span><strong>${lead.nextActionAt ? formatRelative(lead.nextActionAt) : "Sem pendencia"}</strong></div>
    </div>

    <div class="drawer-section">
      <h3>Observacao CRM</h3>
      <p>${lead.note}</p>
    </div>
  `;
  document.getElementById("detailDrawer").classList.add("open");
}

function closeDrawer() {
  document.getElementById("detailDrawer").classList.remove("open");
}

function conversationStatus(lead) {
  if (lead.crmStatus === "convertido") return "convertida";
  if (lead.serviceStatus === "sem_resposta") return "nova";
  return lead.serviceStatus;
}

function badgeTone(status) {
  if (["convertido", "concluido", "agendado", "convertida"].includes(status)) return "green";
  if (["quente", "followup_pendente"].includes(status)) return "amber";
  if (["perdido", "sem_resposta", "nova"].includes(status)) return "red";
  if (["engajado", "em_atendimento"].includes(status)) return "blue";
  return "gray";
}

function slaBadge(lead) {
  if (lead.serviceStatus === "sem_resposta") {
    return `<span class="badge red">SLA vencido</span>`;
  }
  if (lead.serviceStatus === "followup_pendente") {
    return `<span class="badge amber">Prioridade</span>`;
  }
  if (lead.nextActionAt && sameDay(new Date(lead.nextActionAt), today)) {
    return `<span class="badge blue">Hoje</span>`;
  }
  return `<span class="badge gray">${formatRelative(lead.lastInteractionAt)}</span>`;
}

function priorityScore(lead) {
  let score = 0;
  if (lead.serviceStatus === "sem_resposta") score += 100;
  if (lead.serviceStatus === "followup_pendente") score += 80;
  if (lead.crmStatus === "quente") score += 50;
  score += Math.min(hoursSince(lead.lastInteractionAt), 72);
  return score;
}

function whatsappUrl(lead) {
  return `https://wa.me/${lead.phoneE164}`;
}

function minutesBetween(start, end) {
  return Math.max(0, Math.round((new Date(end).getTime() - new Date(start).getTime()) / 60000));
}

function hoursSince(dateValue) {
  return Math.max(0, Math.round((today.getTime() - new Date(dateValue).getTime()) / 3600000));
}

function formatRelative(dateValue) {
  if (!dateValue) return "sem data";
  const hours = hoursSince(dateValue);
  if (hours < 1) return "agora";
  if (hours < 24) return `${hours}h atras`;
  return `${Math.round(hours / 24)}d atras`;
}

function count(items, predicate) {
  return items.filter(predicate).length;
}

function uniqueLeadIds(events) {
  return [...new Set(events.map((event) => event.leadId))];
}

function interpolate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] || "");
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function percentNumber(value, total) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}

function percent(value, total) {
  return `${percentNumber(value, total)}%`;
}

function formatNumber(value) {
  return Number.isFinite(value) ? value.toFixed(1).replace(".0", "") : "0";
}

function emptyState(title, detail) {
  return `
    <div class="panel">
      <p class="eyebrow">Sem resultados</p>
      <h2>${title}</h2>
      <p>${detail}</p>
    </div>
  `;
}

init();
