# PMP Study — App de preparação para a certificação PMP

App **offline** de estudo para o exame PMP (People 42% · Process 50% · Business Environment 8%), com **teoria didática + questões** baseadas naquela teoria. Feito em HTML/CSS/JS puro, sem build e sem login. O progresso fica salvo no próprio aparelho (localStorage).

## Como usar

Como o navegador bloqueia abrir `file://` direto, rode um servidor local simples dentro da pasta `pmp-app/`:

```bash
cd pmp-app
python3 -m http.server 8099
```

Depois abra **http://localhost:8099** no navegador (celular ou PC).

> No celular: rode o comando no PC e, se estiver na mesma rede Wi‑Fi, acesse `http://IP-DO-PC:8099`. Ou publique a pasta em qualquer host estático (GitHub Pages, Netlify, Vercel) e acesse pelo link.

## Estrutura

```
pmp-app/
├── index.html        # casca do app + navegação
├── css/styles.css    # estilos (tema claro/escuro, mobile-first)
└── js/
    ├── content.js    # TODO o conteúdo de estudo (teoria + questões)
    └── app.js        # lógica: navegação, quiz, progresso
```

## Como adicionar/editar conteúdo

Todo o material vive em **`js/content.js`**, num único objeto `CONTENT`. Para acrescentar um tópico, adicione um item em `topics[]` do domínio desejado:

```js
{
  id: "process-risco",                       // id único
  title: "Gerenciamento de Riscos",
  tags: [{ cls: "formula", label: "FÓRMULAS" }],   // opcional (cls: agile|formula|mindset)
  theory: `<h2>...</h2><p>...</p>`,          // HTML da teoria
  questions: [
    {
      q: "Enunciado da questão?",
      options: ["A", "B", "C", "D"],
      correct: 2,                             // índice da correta (0 = A)
      explanation: "Por que essa é a certa..."
    }
  ]
}
```

Convenções de teoria: use `<span class="en">termo em inglês</span>` para os termos-chave, e blocos `<div class="callout tip|warn">` / `<div class="formula-box">` para destaques.

## Domínios já cobertos (v1)

- **Fundamentos e Mindset** — como pensar/escolher a melhor resposta; abordagens preditivo/ágil/híbrido
- **Pessoas (42%)** — gestão de conflitos; liderança servidora e Tuckman
- **Processos (50%)** — valor agregado (EVM) com fórmulas; Scrum (papéis, eventos, artefatos)
- **Ambiente de Negócios (8%)** — valor de negócio, benefícios e conformidade

Próximos tópicos a acrescentar: cronograma, custos, riscos, qualidade, aquisições, stakeholders, Kanban/métricas ágeis, e um banco maior de simulados.
