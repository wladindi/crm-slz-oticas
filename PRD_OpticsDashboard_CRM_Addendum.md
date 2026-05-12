# Adendo ao PRD - CRM, Conversas e Lista de Leads | OpticFlow Dashboard

> **Produto:** OpticFlow Dashboard  
> **Modulo adicionado:** CRM Operacional de Leads e WhatsApp  
> **Objetivo:** complementar o dashboard executivo com uma area pratica para acompanhamento de conversas, leads por periodo, status de atendimento e acionamento direto via WhatsApp.

---

## 1. Novas Areas de Navegacao

### Sidebar Principal

A sidebar deve deixar o dashboard mais navegavel e separar a visao executiva da operacao diaria.

Itens obrigatorios:

| Item | Descricao |
|---|---|
| Dashboard | KPIs principais, graficos e funil |
| Fluxo de conversas | Visao das conversas originadas pelo WhatsApp, Instagram, site e automacoes |
| Leads | Lista completa de leads com filtros, status, periodo e acao para WhatsApp |
| Follow-ups | Leads que precisam de retorno manual |
| Metas e CRM | Metas de conversao, SLA e performance da equipe |
| Configuracoes | Numero base de WhatsApp, usuarios, permissoes e integracoes |

Comportamento esperado:
- A sidebar deve mostrar o item ativo.
- Deve funcionar em desktop como menu fixo lateral.
- Em telas menores, deve virar menu recolhivel.
- O item "Fluxo de conversas" deve exibir um indicador quando houver conversas novas ou sem resposta.
- O item "Leads" deve exibir a quantidade de leads do periodo filtrado.

---

## 2. F07 - Fluxo de Conversas

### Objetivo

Permitir que gerente e atendentes visualizem o caminho do lead dentro dos canais de conversa, principalmente WhatsApp.

### Requisitos Funcionais

| Codigo | Requisito |
|---|---|
| F07.1 | Exibir conversas em formato de lista operacional |
| F07.2 | Permitir filtro por periodo: Hoje, 7 dias, 30 dias, mes atual e personalizado |
| F07.3 | Permitir filtro por origem: WhatsApp, Instagram, site, indicacao, campanha |
| F07.4 | Permitir filtro por status da conversa: nova, em atendimento, aguardando cliente, follow-up, convertida, perdida |
| F07.5 | Exibir responsavel atual pelo atendimento |
| F07.6 | Exibir tempo desde a ultima mensagem |
| F07.7 | Exibir se o lead entrou no fluxo automatizado |
| F07.8 | Exibir etapa atual do fluxo automatizado |
| F07.9 | Permitir abrir WhatsApp diretamente pelo telefone completo do lead |

### Campos Visiveis na Lista de Conversas

| Campo | Exemplo |
|---|---|
| Nome do lead | Mariana Lopes |
| Telefone completo | +55 11 98765-4321 |
| Canal de entrada | WhatsApp |
| Numero base recebido | +55 11 4002-8922 |
| Status da conversa | Aguardando cliente |
| Etapa do fluxo | Orcamento enviado |
| Responsavel | Lucas SDR |
| Ultima mensagem | 2h 14min atras |
| Proxima acao | Follow-up hoje |
| Botao WhatsApp | Abrir conversa |

### Botao de Acesso ao WhatsApp

Cada lead deve ter um botao de acao direta para WhatsApp.

Formato recomendado:

```text
https://wa.me/{telefone_em_e164}
```

Exemplo:

```text
https://wa.me/5511987654321
```

Regras:
- O telefone deve ser armazenado e exibido em formato completo, incluindo DDI e DDD.
- O link deve remover caracteres como espacos, parenteses, hifens e sinal de "+".
- O botao deve abrir em nova aba.
- O texto do botao pode ser "Abrir WhatsApp".
- O botao deve estar disponivel apenas para usuarios autorizados.

---

## 3. F08 - Lista Completa de Leads com Periodo

### Objetivo

Criar uma area completa de CRM para o gestor acompanhar todos os leads que entraram em contato com o numero base de WhatsApp da optica, alem dos demais canais.

### Requisitos Funcionais

| Codigo | Requisito |
|---|---|
| F08.1 | Exibir lista completa de leads por periodo |
| F08.2 | Exibir telefone completo do lead |
| F08.3 | Exibir numero base de WhatsApp pelo qual o lead entrou em contato |
| F08.4 | Exibir origem/canal do lead |
| F08.5 | Exibir status comercial e status de atendimento |
| F08.6 | Exibir data e hora do primeiro contato |
| F08.7 | Exibir data e hora da ultima interacao |
| F08.8 | Exibir atendente responsavel |
| F08.9 | Permitir busca por nome, telefone, email e observacao |
| F08.10 | Permitir ordenacao por prioridade, data de entrada, tempo sem resposta e valor estimado |
| F08.11 | Permitir abrir WhatsApp direto pelo telefone do lead |
| F08.12 | Exibir tags de interesse: exame, armação, lente, orçamento, garantia, retorno |

### Colunas Obrigatorias

| Coluna | Descricao |
|---|---|
| Lead | Nome, telefone completo e email quando existir |
| Periodo/entrada | Data e hora do primeiro contato |
| Canal | WhatsApp, Instagram, site, indicacao ou campanha |
| Numero base | Numero da optica que recebeu o contato |
| Status CRM | Novo, engajado, quente, convertido, perdido |
| Status atendimento | Sem resposta, em atendimento, aguardando cliente, follow-up pendente, concluido |
| Interesse | Categoria principal do lead |
| Responsavel | Atendente ou SDR |
| SLA | Tempo desde a ultima resposta ou proxima acao |
| Valor estimado | Potencial de compra quando houver informacao |
| Acoes | Abrir WhatsApp, ver detalhes, registrar follow-up |

### Status CRM

| Status | Uso |
|---|---|
| Novo | Lead recem-chegado, ainda sem qualificacao |
| Engajado | Entrou no fluxo automatizado ou respondeu mensagens |
| Quente | Demonstrou interesse claro e precisa de abordagem humana |
| Convertido | Realizou compra |
| Perdido | Nao respondeu, desistiu ou comprou em outro lugar |

### Status de Atendimento

| Status | Uso |
|---|---|
| Sem resposta | Lead entrou, mas ainda nao recebeu contato humano |
| Em atendimento | Atendente esta conduzindo conversa |
| Aguardando cliente | Ultima mensagem foi da optica |
| Follow-up pendente | Precisa de novo contato manual |
| Agendado | Cliente marcou visita, exame ou retirada |
| Concluido | Atendimento encerrado sem pendencia operacional |

---

## 4. Metricas de CRM Recomendadas

Alem das metricas originais do dashboard, a area de CRM deve entregar indicadores operacionais importantes.

### KPIs Principais

| Metrica | Calculo | Por que importa |
|---|---|---|
| Leads recebidos no periodo | Total de leads criados entre data inicial e final | Mede volume real de demanda |
| Leads via WhatsApp base | Total de leads cujo canal = WhatsApp e numero_base preenchido | Mede efetividade do numero principal |
| Tempo medio de primeira resposta | Media entre primeiro contato e primeira resposta humana | Mede velocidade comercial |
| SLA de resposta em ate 15min | % de leads respondidos em ate 15min | Mede disciplina operacional |
| Leads sem resposta | Leads novos sem resposta humana | Evita perda por atraso |
| Leads quentes sem follow-up | Leads quentes sem contato recente | Prioriza receita provavel |
| Taxa de contato efetivo | Leads com pelo menos uma resposta humana / total de leads | Mede capacidade de atendimento |
| Taxa de qualificacao | Leads qualificados / total de leads | Mede qualidade do processo |
| Taxa de conversao por canal | Convertidos por canal / total por canal | Mostra canais mais rentaveis |
| Conversao por atendente | Convertidos por responsavel / leads atendidos | Mede performance individual |
| Receita potencial em aberto | Soma de valor_estimado dos leads nao convertidos | Ajuda a priorizar carteira |
| Aging de leads | Distribuicao por tempo sem interacao: 0-24h, 24-48h, 48h+ | Mostra risco de esfriamento |

### Cards Recomendados para a Tela de Leads

1. Leads no periodo
2. WhatsApp base
3. Sem resposta
4. Tempo medio de primeira resposta
5. SLA dentro da meta
6. Quentes sem follow-up
7. Conversao do periodo
8. Receita potencial

---

## 5. Atualizacao do Modelo de Dados

### Campos Adicionais em `leads`

```sql
ALTER TABLE leads
ADD COLUMN telefone_e164 VARCHAR(20),
ADD COLUMN whatsapp_base VARCHAR(20),
ADD COLUMN canal_entrada VARCHAR(50),
ADD COLUMN status_atendimento VARCHAR(40),
ADD COLUMN interesse VARCHAR(80),
ADD COLUMN valor_estimado NUMERIC(12,2),
ADD COLUMN primeira_resposta_em TIMESTAMPTZ,
ADD COLUMN ultima_interacao_em TIMESTAMPTZ,
ADD COLUMN proxima_acao_em TIMESTAMPTZ,
ADD COLUMN observacao_crm TEXT;
```

### Nova Tabela `conversas`

```sql
CREATE TABLE conversas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES leads(id),
  canal VARCHAR(50) NOT NULL,
  telefone_lead VARCHAR(30) NOT NULL,
  telefone_lead_e164 VARCHAR(20) NOT NULL,
  whatsapp_base VARCHAR(20),
  status_conversa VARCHAR(40) NOT NULL,
  etapa_fluxo VARCHAR(80),
  ultima_mensagem_em TIMESTAMPTZ,
  ultima_mensagem_direcao VARCHAR(20), -- inbound, outbound
  atendente_id UUID REFERENCES users(id),
  criado_em TIMESTAMPTZ DEFAULT now(),
  atualizado_em TIMESTAMPTZ DEFAULT now()
);
```

### Nova Tabela `interacoes`

```sql
CREATE TABLE interacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversa_id UUID NOT NULL REFERENCES conversas(id),
  lead_id UUID NOT NULL REFERENCES leads(id),
  direcao VARCHAR(20) NOT NULL, -- inbound, outbound
  canal VARCHAR(50) NOT NULL,
  mensagem_resumo TEXT,
  enviada_em TIMESTAMPTZ NOT NULL,
  origem_evento VARCHAR(50), -- webhook, manual, automacao
  atendente_id UUID REFERENCES users(id)
);
```

---

## 6. Novos Endpoints REST

### Conversas

```http
GET /api/conversas?de=&ate=&status=&canal=&atendente=&page=&size=
```

Response:

```json
{
  "content": [
    {
      "id": "uuid",
      "leadId": "uuid",
      "nome": "Mariana Lopes",
      "telefone": "+55 11 98765-4321",
      "telefoneE164": "5511987654321",
      "whatsappBase": "+55 11 4002-8922",
      "canal": "whatsapp",
      "statusConversa": "aguardando_cliente",
      "etapaFluxo": "orcamento_enviado",
      "ultimaMensagemEm": "2026-05-12T14:20:00-03:00",
      "responsavel": "Lucas SDR",
      "whatsappUrl": "https://wa.me/5511987654321"
    }
  ],
  "totalElements": 128,
  "totalPages": 7
}
```

### Leads CRM

```http
GET /api/leads/crm?de=&ate=&status=&statusAtendimento=&canal=&atendente=&busca=&page=&size=
```

Response:

```json
{
  "content": [
    {
      "id": "uuid",
      "nome": "Rafael Antunes",
      "telefone": "+55 21 99888-1212",
      "telefoneE164": "5521998881212",
      "email": "rafael@email.com",
      "canalEntrada": "whatsapp",
      "whatsappBase": "+55 21 3003-4455",
      "statusCrm": "quente",
      "statusAtendimento": "followup_pendente",
      "interesse": "lente multifocal",
      "valorEstimado": 1850.00,
      "dataCriacao": "2026-05-12T09:05:00-03:00",
      "ultimaInteracaoEm": "2026-05-12T11:40:00-03:00",
      "proximaAcaoEm": "2026-05-12T16:00:00-03:00",
      "responsavel": "Renata",
      "whatsappUrl": "https://wa.me/5521998881212"
    }
  ],
  "totalElements": 242,
  "totalPages": 13
}
```

### Metricas de CRM

```http
GET /api/crm/metricas?de=&ate=&canal=&atendente=
```

Response:

```json
{
  "leadsPeriodo": 242,
  "leadsWhatsappBase": 184,
  "semResposta": 17,
  "tempoMedioPrimeiraRespostaMin": 11.4,
  "slaResposta15minPercentual": 82.6,
  "quentesSemFollowup": 23,
  "taxaContatoEfetivoPercentual": 91.2,
  "taxaQualificacaoPercentual": 68.5,
  "taxaConversaoPercentual": 18.9,
  "receitaPotencialAberta": 128450.00
}
```

---

## 7. UX da Tela de Leads

### Layout Recomendado

Topo da tela:
- Titulo: "Leads"
- Filtros de periodo, canal, status CRM, status de atendimento e atendente.
- Campo de busca por nome, telefone ou email.
- Botao secundario para limpar filtros.

Primeira faixa:
- Cards de metricas de CRM.

Area principal:
- Tabela/lista densa e escaneavel.
- Linhas com prioridade visual para leads quentes, sem resposta ou com SLA vencido.
- Botao de WhatsApp sempre visivel na coluna de acoes.

Painel lateral de detalhes:
- Ao clicar em um lead, abrir um painel lateral com historico resumido.
- Mostrar dados do lead, status, etiquetas, follow-ups e ultimas interacoes.
- Permitir registrar follow-up.
- Permitir alterar status de atendimento.

### Regras Visuais de Prioridade

| Condicao | Indicador |
|---|---|
| Sem resposta ha mais de 15min | Badge vermelho "SLA vencido" |
| Lead quente sem follow-up | Badge ambar "Prioridade" |
| Convertido | Badge verde "Convertido" |
| Aguardando cliente | Badge cinza/azul "Aguardando" |
| Proxima acao hoje | Badge ciano "Hoje" |

---

## 8. Criterios de Aceite

### F07 - Fluxo de Conversas

- [ ] Sidebar possui item "Fluxo de conversas".
- [ ] Tela exibe lista de conversas filtravel por periodo.
- [ ] Cada conversa mostra telefone completo do lead.
- [ ] Cada conversa mostra o numero base de WhatsApp que recebeu o contato.
- [ ] Cada conversa possui botao "Abrir WhatsApp".
- [ ] Botao gera link `https://wa.me/{telefoneE164}` corretamente.
- [ ] Lista mostra status, etapa do fluxo, responsavel e ultima interacao.
- [ ] Conversas novas ou sem resposta aparecem com indicador na sidebar.

### F08 - Lista Completa de Leads

- [ ] Sidebar possui item "Leads".
- [ ] Tela de leads permite filtro por periodo.
- [ ] Lista mostra nome, telefone completo, canal, numero base, status CRM e status de atendimento.
- [ ] Lista permite busca por nome, telefone e email.
- [ ] Lista mostra responsavel, interesse, SLA e valor estimado.
- [ ] Cada lead possui botao para abrir WhatsApp direto.
- [ ] Leads com SLA vencido ou follow-up pendente recebem destaque visual.
- [ ] A tela exibe metricas de CRM no topo.

### F09 - Metricas CRM

- [ ] Cards mostram leads no periodo, leads via WhatsApp base, sem resposta e SLA.
- [ ] Cards mostram leads quentes sem follow-up e conversao do periodo.
- [ ] Metricas reagem aos filtros globais.
- [ ] Metricas podem ser segmentadas por canal e atendente.

---

## 9. Observacoes de Seguranca e LGPD

Como o numero completo do lead sera exibido, o sistema deve:

- Registrar logs de acesso a dados sensiveis.
- Exibir telefone completo apenas para roles autorizadas: ADMIN, GESTOR e ATENDENTE.
- Evitar expor telefone completo em exports publicos sem permissao explicita.
- Usar HTTPS obrigatoriamente em producao.
- Permitir mascaramento futuro por configuracao, caso a operacao precise limitar visualizacao por equipe.

---

## 10. Atualizacao Recomendada no Escopo MVP

Adicionar ao MVP:

| Feature | Nome | Prioridade |
|---|---|---|
| F07 | Fluxo de conversas | Alta |
| F08 | Lista completa de leads por periodo | Alta |
| F09 | Metricas operacionais de CRM | Alta |
| F10 | Acao direta para WhatsApp | Alta |

Essas features transformam o OpticFlow de um painel apenas analitico em uma ferramenta diaria de gestao comercial, mantendo a proposta premium e focada em performance de atendimento.
