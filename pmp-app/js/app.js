/* ============================================================
   PMP Study — app.js
   App offline de estudo para a certificação PMP.
   Sem dependências. Progresso salvo em localStorage.
   ============================================================ */
(function () {
  "use strict";

  const EXAM_DATE = new Date("2026-08-28T09:00:00");
  const STORE_KEY = "pmp_study_progress_v1";
  const THEME_KEY = "pmp_study_theme";

  const app = document.getElementById("app");

  /* ---------- Estado / persistência ---------- */
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {}
  }
  let progress = loadProgress();
  // Estrutura: { topics: { [topicId]: { read: bool, best: number, attempts: number } } }
  if (!progress.topics) progress.topics = {};

  function topicState(id) {
    return progress.topics[id] || { read: false, best: 0, attempts: 0 };
  }
  function setTopicState(id, patch) {
    progress.topics[id] = Object.assign(topicState(id), patch);
    saveProgress(progress);
  }

  /* ---------- Helpers de conteúdo ---------- */
  const allTopics = [];
  CONTENT.domains.forEach(function (d) {
    d.topics.forEach(function (t) {
      allTopics.push(Object.assign({ domainId: d.id, domainTitle: d.title }, t));
    });
  });
  function findTopic(id) { return allTopics.find(function (t) { return t.id === id; }); }
  function topicsOfDomain(domainId) {
    const d = CONTENT.domains.find(function (x) { return x.id === domainId; });
    return d ? d.topics : [];
  }

  function totalQuestions() {
    return allTopics.reduce(function (s, t) { return s + (t.questions ? t.questions.length : 0); }, 0);
  }
  function topicsRead() {
    return allTopics.filter(function (t) { return topicState(t.id).read; }).length;
  }
  function overallPercent() {
    if (allTopics.length === 0) return 0;
    return Math.round((topicsRead() / allTopics.length) * 100);
  }

  /* ---------- Countdown ---------- */
  function updateCountdown() {
    const el = document.getElementById("exam-countdown");
    if (!el) return;
    const now = new Date();
    const diff = EXAM_DATE - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days > 1) el.textContent = "🗓️ " + days + " dias p/ prova";
    else if (days === 1) el.textContent = "🗓️ Falta 1 dia!";
    else if (days === 0) el.textContent = "🗓️ É hoje! 🍀";
    else el.textContent = "🗓️ Prova realizada";
  }

  function updateGlobalBar() {
    const bar = document.querySelector("#progress-bar-global > span");
    if (bar) bar.style.width = overallPercent() + "%";
  }

  /* ---------- Tema ---------- */
  function applyTheme(t) {
    if (t === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
  }
  applyTheme(localStorage.getItem(THEME_KEY) || "light");
  document.getElementById("btn-theme").addEventListener("click", function () {
    const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = cur === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });

  /* ---------- Roteador simples ---------- */
  function go(view, param) {
    window.scrollTo(0, 0);
    setActiveNav(view === "topic" ? "domains" : view);
    if (view === "home") renderHome();
    else if (view === "domains") renderDomains();
    else if (view === "topic") renderTopic(param);
    else if (view === "quiz") renderQuiz(param);
    else if (view === "quiz-all") renderQuizAllIntro();
    else if (view === "doubts") renderDoubts();
    updateGlobalBar();
  }

  function setActiveNav(view) {
    document.querySelectorAll(".nav-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-view") === view);
    });
  }
  document.querySelectorAll(".nav-btn").forEach(function (b) {
    b.addEventListener("click", function () { go(b.getAttribute("data-view")); });
  });
  document.getElementById("btn-home").addEventListener("click", function () { go("home"); });

  /* ---------- Views ---------- */
  function domainProgressPct(domainId) {
    const ts = topicsOfDomain(domainId);
    if (!ts.length) return 0;
    const read = ts.filter(function (t) { return topicState(t.id).read; }).length;
    return Math.round((read / ts.length) * 100);
  }

  function renderHome() {
    const readCount = topicsRead();
    const next = allTopics.find(function (t) { return !topicState(t.id).read; }) || allTopics[0];
    const avgScore = (function () {
      const attempted = allTopics.filter(function (t) { return topicState(t.id).attempts > 0; });
      if (!attempted.length) return "—";
      const sum = attempted.reduce(function (s, t) { return s + topicState(t.id).best; }, 0);
      return Math.round(sum / attempted.length) + "%";
    })();

    let html = "";
    html += '<div class="card hero">';
    html += "<h2>Bom estudo, Weslley! 👋</h2>";
    if (next) {
      html += "<p>" + (readCount === 0 ? "Vamos começar pelo primeiro tópico:" : "Continue de onde parou:") + " <strong>" + esc(next.title) + "</strong></p>";
      html += '<button class="btn" data-goto-topic="' + next.id + '">▶ Continuar estudando</button>';
    }
    html += "</div>";

    html += '<div class="stats">';
    html += stat(readCount + "/" + allTopics.length, "Tópicos lidos");
    html += stat(overallPercent() + "%", "Progresso");
    html += stat(avgScore, "Média nas questões");
    html += "</div>";

    html += '<h2 class="section-title">Domínios do exame (ECO)</h2>';
    CONTENT.domains.forEach(function (d) {
      html += domainCard(d);
    });

    html += '<div class="card" style="border-style:dashed">';
    html += '<strong>💬 Tem dúvida?</strong><p class="small muted" style="margin:6px 0 12px">Traga qualquer pergunta pro chat aqui do Claude — eu te explico do jeito mais didático e ligo com as questões.</p>';
    html += '<button class="btn btn-ghost btn-block" data-goto="doubts">Ver como tirar dúvidas</button>';
    html += "</div>";

    app.innerHTML = html;
    bindGoto();
  }

  function stat(num, lbl) {
    return '<div class="stat"><div class="stat-num">' + num + '</div><div class="stat-lbl">' + lbl + "</div></div>";
  }

  function weightLabel(d) {
    return d.weightLabel ? d.weightLabel : d.weight + "%";
  }

  function domainCard(d) {
    const pct = domainProgressPct(d.id);
    const icon = { fundamentos: "🧭", people: "🧑‍🤝‍🧑", process: "⚙️", business: "🏢" }[d.id] || "📘";
    let h = '<div class="card card-clickable domain-card" data-goto-domain="' + d.id + '">';
    h += '<div class="domain-badge ' + d.id + '">' + icon + "</div>";
    h += '<div class="domain-info">';
    h += "<h3>" + esc(d.title) + ' <span class="weight-pill">' + weightLabel(d) + "</span></h3>";
    h += '<div class="topic-meta">' + d.topics.length + " tópicos · " + pct + "% concluído</div>";
    h += '<div class="mini-bar"><span style="width:' + pct + '%"></span></div>';
    h += "</div>";
    h += '<div class="topic-arrow">›</div>';
    h += "</div>";
    return h;
  }

  function renderDomains() {
    let html = '<h2 class="section-title">Trilha de estudo</h2>';
    html += '<p class="muted small" style="margin-top:-8px">Organizado pelos 3 domínios oficiais do PMI. Comece pelos Fundamentos.</p>';
    CONTENT.domains.forEach(function (d) {
      html += '<div class="card">';
      html += '<h3 style="margin:2px 0 10px">' + esc(d.title) + ' <span class="weight-pill">' + weightLabel(d) + "</span></h3>";
      d.topics.forEach(function (t) {
        html += topicRow(t);
      });
      html += "</div>";
    });
    app.innerHTML = html;
    bindGoto();
  }

  function topicRow(t) {
    const st = topicState(t.id);
    const qn = t.questions ? t.questions.length : 0;
    let tags = "";
    (t.tags || []).forEach(function (tg) {
      tags += '<span class="tag ' + tg.cls + '">' + tg.label + "</span>";
    });
    let h = '<div class="topic-row" data-goto-topic="' + t.id + '">';
    h += '<div class="topic-check ' + (st.read ? "done" : "") + '">' + (st.read ? "✓" : "") + "</div>";
    h += '<div style="flex:1">';
    h += '<div class="topic-title">' + esc(t.title) + "</div>";
    h += '<div class="topic-meta">' + tags + qn + " questões" + (st.attempts ? " · melhor: " + st.best + "%" : "") + "</div>";
    h += "</div>";
    h += '<div class="topic-arrow">›</div>';
    h += "</div>";
    return h;
  }

  let currentTab = "teoria";
  function renderTopic(id, tab) {
    const t = findTopic(id);
    if (!t) { go("domains"); return; }
    currentTab = tab || "teoria";
    let html = '<button class="back-link" data-goto="domains">‹ Voltar</button>';
    html += '<h2 class="section-title" style="margin-bottom:4px">' + esc(t.title) + "</h2>";
    html += '<p class="muted small" style="margin-top:0">' + esc(t.domainTitle) + "</p>";
    html += '<div class="tabs">';
    html += '<button class="tab ' + (currentTab === "teoria" ? "active" : "") + '" data-tab="teoria">📖 Teoria</button>';
    html += '<button class="tab ' + (currentTab === "questoes" ? "active" : "") + '" data-tab="questoes">📝 Questões (' + (t.questions ? t.questions.length : 0) + ")</button>";
    html += "</div>";
    html += '<div id="tab-content"></div>';
    app.innerHTML = html;

    app.querySelectorAll(".tab").forEach(function (b) {
      b.addEventListener("click", function () {
        currentTab = b.getAttribute("data-tab");
        app.querySelectorAll(".tab").forEach(function (x) { x.classList.remove("active"); });
        b.classList.add("active");
        renderTopicTab(t);
      });
    });
    bindGoto();
    renderTopicTab(t);
  }

  function renderTopicTab(t) {
    const box = document.getElementById("tab-content");
    if (currentTab === "teoria") {
      box.innerHTML = '<div class="theory card">' + t.theory + "</div>" +
        '<button class="btn btn-block" id="mark-read">' + (topicState(t.id).read ? "✓ Tópico lido — reler questões" : "Marcar como lido e ir às questões") + "</button>";
      document.getElementById("mark-read").addEventListener("click", function () {
        setTopicState(t.id, { read: true });
        updateGlobalBar();
        currentTab = "questoes";
        app.querySelectorAll(".tab").forEach(function (x) { x.classList.toggle("active", x.getAttribute("data-tab") === "questoes"); });
        renderTopicTab(t);
      });
    } else {
      renderQuizInline(t, box);
    }
  }

  /* ---------- Quiz ---------- */
  function renderQuizInline(t, box) {
    const questions = t.questions || [];
    if (!questions.length) { box.innerHTML = '<p class="muted">Sem questões neste tópico ainda.</p>'; return; }
    const quiz = { list: questions, idx: 0, answers: [], topic: t };
    runQuiz(quiz, box, function () { setTopicState(t.id, { read: true }); });
  }

  function renderQuiz(id) {
    const t = findTopic(id);
    if (!t) { go("domains"); return; }
    let html = '<button class="back-link" data-goto-topic="' + id + '">‹ Voltar ao tópico</button>';
    html += '<h2 class="section-title">Questões — ' + esc(t.title) + "</h2>";
    html += '<div id="quiz-box"></div>';
    app.innerHTML = html;
    bindGoto();
    renderQuizInline(t, document.getElementById("quiz-box"));
  }

  function runQuiz(quiz, box, onFinishTopic) {
    function render() {
      if (quiz.idx >= quiz.list.length) { renderResult(); return; }
      const q = quiz.list[quiz.idx];
      const chosen = quiz.answers[quiz.idx];
      const answered = chosen !== undefined && chosen !== null;
      let html = '<div class="quiz-progress"><span>Questão ' + (quiz.idx + 1) + " de " + quiz.list.length + "</span>";
      html += "<span>Acertos: " + quiz.answers.filter(function (a, i) { return a === quiz.list[i].correct; }).length + "</span></div>";
      html += '<div class="card">';
      html += '<div class="q-stem">' + esc(q.q) + "</div>";
      html += '<div class="options">';
      q.options.forEach(function (opt, i) {
        let cls = "option";
        if (answered) {
          if (i === q.correct) cls += " correct";
          else if (i === chosen) cls += " wrong";
        } else if (i === chosen) cls += " selected";
        html += '<button class="' + cls + '" data-opt="' + i + '"' + (answered ? " disabled" : "") + ">";
        html += '<span class="option-letter">' + "ABCDE"[i] + "</span><span>" + esc(opt) + "</span></button>";
      });
      html += "</div>";
      if (answered) {
        const ok = chosen === q.correct;
        html += '<div class="explanation">';
        html += '<div class="exp-verdict ' + (ok ? "ok" : "no") + '">' + (ok ? "✓ Correto!" : "✗ Resposta correta: " + "ABCDE"[q.correct]) + "</div>";
        html += "<div>" + esc(q.explanation) + "</div>";
        html += "</div>";
        html += '<div class="quiz-actions">';
        html += '<button class="btn btn-block" id="next-q">' + (quiz.idx + 1 >= quiz.list.length ? "Ver resultado" : "Próxima questão ›") + "</button>";
        html += "</div>";
      }
      html += "</div>";
      box.innerHTML = html;

      box.querySelectorAll(".option").forEach(function (b) {
        b.addEventListener("click", function () {
          if (quiz.answers[quiz.idx] !== undefined && quiz.answers[quiz.idx] !== null) return;
          quiz.answers[quiz.idx] = parseInt(b.getAttribute("data-opt"), 10);
          render();
        });
      });
      const nb = document.getElementById("next-q");
      if (nb) nb.addEventListener("click", function () { quiz.idx++; render(); });
    }

    function renderResult() {
      const correct = quiz.answers.filter(function (a, i) { return a === quiz.list[i].correct; }).length;
      const pct = Math.round((correct / quiz.list.length) * 100);
      const st = topicState(quiz.topic.id);
      setTopicState(quiz.topic.id, { attempts: st.attempts + 1, best: Math.max(st.best, pct), read: true });
      if (onFinishTopic) onFinishTopic();
      updateGlobalBar();
      let msg = pct >= 80 ? "Excelente! Você domina esse tópico. 🎯" :
                pct >= 60 ? "Bom! Revise os erros e tente de novo. 💪" :
                "Vale reler a teoria antes de seguir. 📖";
      let html = '<div class="card center">';
      html += '<div class="result-ring"><div class="result-score">' + pct + "%</div>";
      html += '<div class="muted">' + correct + " de " + quiz.list.length + " corretas</div>";
      html += '<div class="result-msg">' + msg + "</div></div>";
      html += '<div class="quiz-actions">';
      html += '<button class="btn btn-ghost" id="retry">↻ Refazer</button>';
      html += '<button class="btn" data-goto="domains">Escolher outro tópico</button>';
      html += "</div></div>";
      box.innerHTML = html;
      document.getElementById("retry").addEventListener("click", function () {
        quiz.idx = 0; quiz.answers = []; render();
      });
      bindGoto();
    }

    render();
  }

  /* ---------- Simulado geral ---------- */
  function renderQuizAllIntro() {
    const pool = [];
    allTopics.forEach(function (t) { (t.questions || []).forEach(function (q) { pool.push(q); }); });
    let html = '<h2 class="section-title">Simulado geral</h2>';
    html += '<div class="card"><p>Reúne questões de todos os tópicos disponíveis, em ordem aleatória — como na prova real.</p>';
    html += '<p class="muted small">No momento há <strong>' + pool.length + " questões</strong> no banco. Conforme adicionarmos mais tópicos, o simulado cresce.</p>";
    html += '<div class="mt"><label class="small muted">Quantas questões?</label><br/>';
    html += '<select id="sim-count" style="padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--surface);color:var(--text);margin-top:6px;font-size:15px;width:100%">';
    [10, 20, 30, pool.length].filter(function (n, i, a) { return n <= pool.length && a.indexOf(n) === i && n > 0; }).forEach(function (n) {
      html += "<option value='" + n + "'>" + n + " questões" + (n === pool.length ? " (todas)" : "") + "</option>";
    });
    html += "</select></div>";
    html += '<button class="btn btn-block mt" id="start-sim">▶ Iniciar simulado</button></div>';
    app.innerHTML = html;
    document.getElementById("start-sim").addEventListener("click", function () {
      const n = parseInt(document.getElementById("sim-count").value, 10);
      const shuffled = shuffle(pool.slice()).slice(0, n);
      let h = '<h2 class="section-title">Simulado (' + n + " questões)</h2><div id='quiz-box'></div>";
      app.innerHTML = h;
      const quiz = { list: shuffled, idx: 0, answers: [], topic: { id: "__sim__" } };
      // Simulado não grava progresso por tópico:
      const box = document.getElementById("quiz-box");
      runSimQuiz(quiz, box);
    });
  }

  function runSimQuiz(quiz, box) {
    // Igual ao runQuiz mas sem persistência por tópico
    const fakeTopic = { id: "__sim__" };
    quiz.topic = fakeTopic;
    const origSet = progress.topics["__sim__"];
    runQuiz(quiz, box, null);
    if (origSet === undefined) delete progress.topics["__sim__"];
  }

  /* ---------- Dúvidas ---------- */
  function renderDoubts() {
    let html = '<h2 class="section-title">💬 Tire suas dúvidas</h2>';
    html += '<div class="card"><p>O app tem a <strong>teoria</strong> e as <strong>questões</strong>. Para <strong>dúvidas</strong>, fale comigo (Claude) direto no chat — eu explico do jeito mais didático, com exemplos, e conecto com as questões que você errou.</p>';
    html += '<p class="muted small">Copie um destes modelos de pergunta pra começar:</p></div>';
    const prompts = [
      "Não entendi a diferença entre <strong>CV e SV</strong> no valor agregado. Me explica com um exemplo prático.",
      "Errei uma questão sobre <strong>conflito</strong>. Qual a lógica PMP pra escolher a melhor resposta nesses casos?",
      "Me explica <strong>quando usar preditivo x ágil x híbrido</strong> como se eu fosse iniciante.",
      "Quais são os <strong>papéis e cerimônias do Scrum</strong> e o que mais cai na prova sobre isso?",
      "Me dá um <strong>macete</strong> pra decorar as fórmulas de EVM sem enlouquecer."
    ];
    prompts.forEach(function (p) {
      html += '<div class="doubt-prompt">' + p + "</div>";
    });
    html += '<div class="callout tip mt"><div class="callout-title">Dica de estudo</div>Sempre que errar uma questão aqui, leia a explicação. Se ainda ficar dúvida, traz pro chat. É assim que a gente fecha os buracos antes de 28/08.</div>';
    app.innerHTML = html;
  }

  /* ---------- Utils ---------- */
  function esc(s) {
    // Permite HTML já presente nas teorias/perguntas (confiável, é conteúdo local).
    return s;
  }
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom() * (i + 1));
      const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  // Random simples baseado em tempo (ok para embaralhar simulado)
  let _seed = (new Date().getTime()) % 2147483647;
  function seededRandom() {
    _seed = (_seed * 16807) % 2147483647;
    return (_seed - 1) / 2147483646;
  }

  function bindGoto() {
    app.querySelectorAll("[data-goto]").forEach(function (el) {
      el.addEventListener("click", function () { go(el.getAttribute("data-goto")); });
    });
    app.querySelectorAll("[data-goto-topic]").forEach(function (el) {
      el.addEventListener("click", function () { go("topic", el.getAttribute("data-goto-topic")); });
    });
    app.querySelectorAll("[data-goto-domain]").forEach(function (el) {
      el.addEventListener("click", function () { go("domains"); });
    });
  }

  /* ---------- Init ---------- */
  updateCountdown();
  updateGlobalBar();
  setInterval(updateCountdown, 60000);
  go("home");
})();
