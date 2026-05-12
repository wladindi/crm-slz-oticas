# OpticFlow CRM

CRM operacional baseado no PRD do OpticFlow Dashboard para oticas premium.

## Como abrir

Opcao direta:

```text
Abra o arquivo index.html no navegador.
```

Opcao com servidor local:

```powershell
node server.mjs
```

Depois acesse:

```text
http://127.0.0.1:4173
```

## O que esta incluido

- Dashboard com metricas de CRM.
- Sidebar com Dashboard, Fluxo de conversas, Leads, Follow-ups, Metas e Configuracoes.
- Agente virtual de pre-atendimento com configuracao de fluxo.
- Lista completa de leads por periodo.
- Telefone completo do lead e numero base de WhatsApp.
- Botao direto para WhatsApp usando `https://wa.me/{telefoneE164}`.
- Filtros por periodo, canal, status CRM, status de atendimento e busca.
- Painel lateral com detalhes do lead.
- Fluxo de conversas com etapas comerciais.
- Cards de SLA, leads sem resposta, conversao, follow-up e receita potencial.
- Metricas geradas por eventos do agente: pre-atendimento, qualificacao, nutricao de lead frio e repasse para humano.

## Agente virtual

A tela `Agente virtual` permite customizar:

- Nome do agente.
- Tom de conversa.
- Tempo para nutrir leads frios.
- Score minimo para repasse humano.
- Script de boas-vindas.
- Script de qualificacao.
- Script de nutricao para lead frio.
- Script de passagem para atendente.

O botao `Simular nutricao` cria um evento novo do agente, atualiza o fluxo do lead frio e recalcula as metricas do CRM.

## Arquivos principais

- `index.html`: estrutura da aplicacao.
- `styles.css`: layout visual e responsividade.
- `app.js`: dados mockados, filtros, metricas e interacoes.
- `server.mjs`: servidor estatico local opcional.
