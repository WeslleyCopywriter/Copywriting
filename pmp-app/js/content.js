/* ============================================================
   PMP Study — content.js
   Conteúdo de estudo (teoria + questões).
   Idioma: Português com termos-chave em inglês (marcados <span class="en">).
   Estrutura por domínio do ECO (Examination Content Outline) do PMI.

   Modelo de dados:
   CONTENT.domains[] = { id, title, weight, weightLabel?, topics[] }
   topic = { id, title, tags[{cls,label}], theory: "<html>", questions[] }
   question = { q, options[], correct(indice), explanation }
   ============================================================ */

const CONTENT = {
  domains: [
    /* =====================================================
       DOMÍNIO 0 — FUNDAMENTOS E MINDSET
       ===================================================== */
    {
      id: "fundamentos",
      title: "Fundamentos e Mindset PMP",
      weight: 0,
      weightLabel: "Base",
      topics: [
        {
          id: "fund-mindset",
          title: "Mindset PMP: como escolher a melhor resposta",
          tags: [{ cls: "mindset", label: "MINDSET" }],
          theory: `
            <h2>Por que "mindset" é o que mais derruba gente</h2>
            <p>Na prova do PMP, quase nenhuma questão é de decorar definição. Elas são <strong>situacionais</strong>: descrevem um problema e apresentam 4 alternativas em que <em>2 ou 3 parecem certas</em>. O que separa quem passa de quem reprova é pensar como o PMI espera — o chamado <span class="en">"PMP mindset"</span>.</p>

            <div class="callout tip">
              <div class="callout-title">A regra de ouro</div>
              O gerente de projetos é um <strong>líder servidor</strong> (<span class="en">servant leader</span>) que é <strong>proativo</strong>, resolve a <strong>causa-raiz</strong> do problema e <strong>empodera o time</strong> — em vez de mandar, culpar ou escalar.
            </div>

            <h3>Os 7 princípios que resolvem 80% das questões situacionais</h3>
            <ul>
              <li><strong>1. Seja proativo, não reativo.</strong> O PM antecipa e previne. "Prevenção é melhor que inspeção" (<span class="en">prevention over inspection</span>).</li>
              <li><strong>2. Vá à causa-raiz.</strong> Antes de agir, <strong>entenda o problema</strong> (analise, reúna dados, converse com o envolvido). Raramente a resposta certa é agir por impulso.</li>
              <li><strong>3. Fale com as pessoas diretamente primeiro.</strong> Conflito com um membro do time? Converse com <em>ele</em> antes de escalar pro patrocinador ou funcional.</li>
              <li><strong>4. Não escale cedo demais.</strong> Escalar (<span class="en">escalate</span>) para o sponsor ou gerente funcional quase nunca é a <em>primeira</em> ação. É o último recurso.</li>
              <li><strong>5. Empodere o time.</strong> Deixe a equipe se auto-organizar e decidir. O PM facilita e remove impedimentos, não microgerencia.</li>
              <li><strong>6. Nada de ignorar ou "deixar pra depois".</strong> Alternativas com "ignore", "não faça nada", "espere o problema piorar" quase sempre estão erradas.</li>
              <li><strong>7. Siga o plano, mas atualize-o.</strong> Mudança apareceu? Use o <strong>controle integrado de mudanças</strong> (<span class="en">Integrated Change Control</span>) — nada de fazer a mudança "por fora".</li>
            </ul>

            <h3>Palavras-armadilha nas alternativas</h3>
            <table>
              <tr><th>Costuma estar ERRADA se aparece…</th><th>Costuma estar CERTA se aparece…</th></tr>
              <tr><td>"Ignore o problema"</td><td>"Investigue / analise a causa"</td></tr>
              <tr><td>"Escale imediatamente ao sponsor"</td><td>"Converse com a pessoa/time envolvido"</td></tr>
              <tr><td>"Force / imponha a decisão"</td><td>"Colabore / facilite / negocie"</td></tr>
              <tr><td>"Faça a mudança direto"</td><td>"Submeta ao controle de mudanças"</td></tr>
              <tr><td>"Culpe / puna o responsável"</td><td>"Entenda o contexto e apoie o time"</td></tr>
            </table>

            <div class="callout warn">
              <div class="callout-title">Cuidado com o "certo demais"</div>
              Quando duas respostas parecem boas, escolha a que é <strong>mais proativa e resolve a raiz</strong>, não a que só "apaga o incêndio". E prefira a ação que um <strong>facilitador</strong> tomaria, não a de um "chefe".
            </div>

            <h3>Um método de 3 passos pra ler qualquer questão</h3>
            <ol>
              <li><strong>Qual é o problema real?</strong> Ignore o ruído e ache a dor central.</li>
              <li><strong>Em que fase/contexto estou?</strong> É ágil ou preditivo? Já aconteceu ou vou prevenir?</li>
              <li><strong>O que um líder servidor proativo faria PRIMEIRO?</strong> Elimine as 2 alternativas extremas (não fazer nada / medida drástica) e decida entre as 2 do meio.</li>
            </ol>
          `,
          questions: [
            {
              q: "Um membro do time entrega consistentemente tarefas com atraso, impactando o cronograma. Qual deve ser a PRIMEIRA ação do gerente de projetos?",
              options: [
                "Reportar o membro ao gerente funcional para substituição.",
                "Conversar em particular com o membro para entender a causa dos atrasos.",
                "Reatribuir todas as tarefas dele para outros membros do time.",
                "Registrar uma advertência formal no relatório de desempenho."
              ],
              correct: 1,
              explanation: "O mindset PMP manda ir à causa-raiz e falar diretamente com a pessoa antes de escalar ou tomar medidas drásticas. Só depois de entender o motivo é que se decide o próximo passo."
            },
            {
              q: "Durante a execução, um stakeholder solicita uma mudança de escopo que parece simples. O que o gerente de projetos deve fazer?",
              options: [
                "Implementar a mudança imediatamente, já que é pequena.",
                "Recusar a mudança para proteger a linha de base.",
                "Registrar a solicitação e submetê-la ao controle integrado de mudanças.",
                "Escalar a solicitação diretamente ao patrocinador."
              ],
              correct: 2,
              explanation: "Toda mudança — por menor que pareça — passa pelo controle integrado de mudanças (Integrated Change Control). Nem implementar por fora, nem recusar de cara, nem escalar sem antes avaliar o impacto."
            },
            {
              q: "Dois membros do time discordam fortemente sobre uma solução técnica e o clima ficou tenso. Qual é a melhor atitude do gerente de projetos?",
              options: [
                "Decidir ele mesmo qual solução usar para acabar com a discussão.",
                "Ignorar, pois conflitos técnicos se resolvem sozinhos.",
                "Facilitar uma conversa para que cheguem juntos à melhor solução.",
                "Escalar o conflito para o patrocinador decidir."
              ],
              correct: 2,
              explanation: "O PM atua como facilitador e busca colaboração (win-win). Impor decisão é 'forçar', ignorar é evitar, e escalar é prematuro — todos contrários ao mindset de líder servidor."
            },
            {
              q: "O gerente de projetos percebe um risco que ainda não ocorreu, mas que pode atrasar o projeto. Qual comportamento reflete o mindset PMP?",
              options: [
                "Esperar o risco se concretizar para então agir.",
                "Agir proativamente, registrando o risco e planejando respostas.",
                "Aumentar a reserva de contingência sem informar ninguém.",
                "Remover o risco do registro para não alarmar o time."
              ],
              correct: 1,
              explanation: "Proatividade é o núcleo do mindset PMP: identificar, registrar e planejar a resposta ao risco antes que ele vire problema. Esperar ou esconder são atitudes reativas/erradas."
            }
          ]
        },
        {
          id: "fund-approaches",
          title: "Abordagens de projeto: Preditivo, Ágil e Híbrido",
          tags: [{ cls: "agile", label: "ÁGIL/HÍBRIDO" }],
          theory: `
            <h2>Por que isso é decisivo na prova nova</h2>
            <p>Cerca de <strong>metade da prova</strong> é sobre contextos <strong>ágeis ou híbridos</strong>. Entender <em>quando</em> usar cada abordagem é o alicerce de tudo.</p>

            <h3>As três abordagens (<span class="en">development approaches</span>)</h3>
            <table>
              <tr><th>Abordagem</th><th>Como funciona</th><th>Melhor quando…</th></tr>
              <tr><td><strong>Preditiva</strong><br/><span class="en">Predictive / Waterfall</span></td><td>Escopo, prazo e custo definidos no início. Fases sequenciais (plan → build → test).</td><td>Requisitos claros e estáveis, pouca incerteza, entregas previsíveis (ex.: construção).</td></tr>
              <tr><td><strong>Ágil</strong><br/><span class="en">Agile / Adaptive</span></td><td>Entregas iterativas e incrementais em ciclos curtos, com feedback frequente do cliente.</td><td>Alta incerteza, requisitos que mudam, necessidade de aprender rápido (ex.: software novo).</td></tr>
              <tr><td><strong>Híbrida</strong><br/><span class="en">Hybrid</span></td><td>Combina os dois: partes estáveis em preditivo, partes incertas em ágil.</td><td>Parte do projeto é bem definida e parte é exploratória.</td></tr>
            </table>

            <div class="callout">
              <div class="callout-title">Iterativo x Incremental</div>
              <strong>Iterativo</strong> = refinar a mesma coisa em ciclos (melhorar o protótipo). <strong>Incremental</strong> = entregar pedaços funcionais que somam ao produto. O ágil usa os <strong>dois juntos</strong>.
            </div>

            <h3>O que empurra a escolha para o ágil?</h3>
            <ul>
              <li>Requisitos <strong>incertos ou que mudam</strong> com frequência.</li>
              <li>Necessidade de <strong>entregar valor cedo</strong> e receber feedback.</li>
              <li>Cliente disponível para colaborar de forma contínua.</li>
              <li>Time pequeno, colaborativo e <strong>auto-organizável</strong>.</li>
            </ul>

            <h3>O que empurra para o preditivo?</h3>
            <ul>
              <li>Escopo <strong>claro e estável</strong>, com baixa probabilidade de mudança.</li>
              <li>Ambiente regulado, com <strong>conformidade</strong> e documentação rígidas.</li>
              <li>Custo de mudança alto ao longo do tempo.</li>
            </ul>

            <div class="callout tip">
              <div class="callout-title">Continuum, não caixinhas</div>
              Pense numa régua: de 100% preditivo, passando por vários graus de híbrido, até 100% ágil. A pergunta certa nunca é "qual é a melhor?", e sim <strong>"qual serve melhor a ESTE contexto?"</strong>.
            </div>

            <h3>Termos ágeis que você precisa reconhecer</h3>
            <ul>
              <li><strong>Manifesto Ágil</strong> — 4 valores e 12 princípios. Valoriza <em>indivíduos e interações</em>, <em>software/produto funcionando</em>, <em>colaboração com o cliente</em> e <em>responder a mudanças</em>.</li>
              <li><strong>Backlog</strong> — lista priorizada de tudo que pode ser feito.</li>
              <li><strong>Timebox</strong> — período fixo (ex.: uma sprint de 2 semanas).</li>
              <li><strong>Velocidade</strong> (<span class="en">velocity</span>) — quanto o time entrega por iteração; usada pra previsão, não pra cobrança.</li>
            </ul>
          `,
          questions: [
            {
              q: "Uma empresa vai desenvolver um produto de software inovador, cujos requisitos ainda não estão claros e devem mudar conforme o mercado responde. Qual abordagem é mais adequada?",
              options: [
                "Preditiva, para travar o escopo desde o início.",
                "Ágil, para entregar incrementos e ajustar com base no feedback.",
                "Preditiva com uma única fase de testes ao final.",
                "Qualquer uma, pois a abordagem não afeta o resultado."
              ],
              correct: 1,
              explanation: "Alta incerteza + requisitos que mudam + necessidade de feedback frequente = ágil. Travar o escopo no início (preditivo) seria arriscado num contexto exploratório."
            },
            {
              q: "Em um projeto, a infraestrutura física segue requisitos regulatórios fixos, enquanto o aplicativo que roda nela precisa evoluir com testes de usuário. Qual abordagem faz mais sentido?",
              options: [
                "100% preditiva para todo o projeto.",
                "100% ágil para todo o projeto.",
                "Híbrida: preditiva na infraestrutura e ágil no aplicativo.",
                "Adiar o aplicativo até a infraestrutura terminar."
              ],
              correct: 2,
              explanation: "Quando parte do projeto é estável/regulada e parte é incerta/exploratória, a abordagem híbrida combina o melhor dos dois mundos."
            },
            {
              q: "Qual afirmação reflete corretamente o Manifesto Ágil?",
              options: [
                "Documentação abrangente vale mais que software funcionando.",
                "Seguir o plano vale mais que responder a mudanças.",
                "Indivíduos e interações valem mais que processos e ferramentas.",
                "Negociação de contrato vale mais que colaboração com o cliente."
              ],
              correct: 2,
              explanation: "O Manifesto valoriza indivíduos e interações, produto funcionando, colaboração com o cliente e responder a mudanças — sem descartar os itens da direita, mas priorizando os da esquerda."
            },
            {
              q: "O que caracteriza uma entrega 'incremental'?",
              options: [
                "Refinar repetidamente o mesmo protótipo até ficar perfeito.",
                "Entregar partes funcionais do produto que vão se somando ao longo do tempo.",
                "Entregar tudo de uma vez ao final do projeto.",
                "Documentar todos os requisitos antes de qualquer entrega."
              ],
              correct: 1,
              explanation: "Incremental = somar pedaços funcionais do produto. Refinar o mesmo item em ciclos é 'iterativo'. O ágil combina os dois."
            }
          ]
        }
      ]
    },

    /* =====================================================
       DOMÍNIO 1 — PESSOAS (People) — 42%
       ===================================================== */
    {
      id: "people",
      title: "Pessoas (People)",
      weight: 42,
      topics: [
        {
          id: "people-conflict",
          title: "Gestão de conflitos",
          tags: [{ cls: "mindset", label: "MINDSET" }],
          theory: `
            <h2>Conflito não é vilão</h2>
            <p>O PMI enxerga conflito como algo <strong>natural e até saudável</strong> quando bem conduzido — ele revela pontos de vista e melhora decisões. O papel do PM é <strong>resolver</strong>, não suprimir.</p>

            <h3>As 5 técnicas de resolução de conflito</h3>
            <p>Baseadas no modelo Thomas-Kilmann. Decore da <strong>pior para a melhor</strong> (em geral):</p>
            <table>
              <tr><th>Técnica</th><th>O que é</th><th>Resultado</th></tr>
              <tr><td><strong>Retirar / Evitar</strong><br/><span class="en">Withdraw / Avoid</span></td><td>Adiar ou fugir do conflito.</td><td>Perde-perde. Não resolve.</td></tr>
              <tr><td><strong>Suavizar / Acomodar</strong><br/><span class="en">Smooth / Accommodate</span></td><td>Enfatizar concordâncias, ceder para manter a harmonia.</td><td>Temporário. Trata o sintoma.</td></tr>
              <tr><td><strong>Comprometer / Conciliar</strong><br/><span class="en">Compromise / Reconcile</span></td><td>Cada lado cede um pouco.</td><td>Ganha-perde parcial (lose-lose). Ninguém fica 100%.</td></tr>
              <tr><td><strong>Forçar / Impor</strong><br/><span class="en">Force / Direct</span></td><td>Impor a própria visão ("faça do meu jeito").</td><td>Ganha-perde. Gera ressentimento. Só em emergências.</td></tr>
              <tr><td><strong>Colaborar / Resolver o problema</strong><br/><span class="en">Collaborate / Problem Solve</span></td><td>Buscar juntos a solução que atende todos, olhando fatos.</td><td><strong>Ganha-ganha (win-win). A PREFERIDA do PMI.</strong></td></tr>
            </table>

            <div class="callout tip">
              <div class="callout-title">Resposta padrão na prova</div>
              Na dúvida, a resposta certa costuma ser <strong>Colaborar / Resolver o problema</strong> (<span class="en">confronting / problem solving</span>) — enfrentar o problema de frente, com fatos, buscando o ganha-ganha.
            </div>

            <div class="callout warn">
              <div class="callout-title">Exceções que caem na prova</div>
              <ul>
                <li><strong>Forçar</strong> pode ser certo numa <strong>emergência</strong> ou questão de segurança, quando não há tempo.</li>
                <li><strong>Comprometer</strong> pode servir quando os dois lados têm poder igual e o prazo aperta.</li>
                <li><strong>Suavizar</strong> serve para manter a relação enquanto se busca solução, quando o tema é menor.</li>
              </ul>
            </div>

            <h3>Quem resolve o conflito?</h3>
            <p>Primeiro, os <strong>próprios envolvidos</strong> devem tentar resolver. O PM entra como <strong>facilitador</strong> se eles não conseguirem. Escalar é o último recurso.</p>

            <h3>Fontes comuns de conflito em projetos</h3>
            <p>As maiores causas costumam ser: <strong>cronogramas</strong>, <strong>prioridades</strong> e <strong>recursos</strong> — e não "personalidade", que é uma das menores.</p>
          `,
          questions: [
            {
              q: "Dois membros do time discordam sobre a abordagem de um entregável. O gerente de projetos reúne os dois, analisa os fatos com eles e busca uma solução que atenda a ambos. Qual técnica ele usou?",
              options: [
                "Suavizar (Smooth)",
                "Comprometer (Compromise)",
                "Colaborar / Resolver o problema (Collaborate)",
                "Forçar (Force)"
              ],
              correct: 2,
              explanation: "Reunir as partes, olhar os fatos e buscar solução que atenda a todos é Colaborar/Resolver o problema — a técnica ganha-ganha preferida pelo PMI."
            },
            {
              q: "Há um incêndio no laboratório e dois técnicos discutem sobre o procedimento correto de evacuação. O que o gerente de projetos deve fazer?",
              options: [
                "Facilitar uma reunião colaborativa para decidirem juntos.",
                "Impor imediatamente o procedimento correto (forçar).",
                "Evitar o conflito e deixar que resolvam depois.",
                "Propor que cada um ceda um pouco (comprometer)."
              ],
              correct: 1,
              explanation: "Em emergências de segurança, sem tempo para deliberar, Forçar é aceitável. É a exceção clássica em que a técnica normalmente 'pior' se torna a certa."
            },
            {
              q: "Segundo o PMI, qual é geralmente a MAIOR fonte de conflito em projetos?",
              options: [
                "Diferenças de personalidade.",
                "Cronogramas, prioridades e recursos.",
                "Diferenças culturais.",
                "Estilo de comunicação."
              ],
              correct: 1,
              explanation: "As maiores fontes de conflito são cronogramas, prioridades e recursos. Personalidade costuma estar entre as menores causas."
            },
            {
              q: "Dois desenvolvedores começam a discordar. Qual é a abordagem inicial mais alinhada ao PMI?",
              options: [
                "O gerente decide pelos dois para poupar tempo.",
                "Incentivar que os próprios envolvidos tentem resolver primeiro.",
                "Escalar imediatamente para o patrocinador.",
                "Separar os dois em times diferentes."
              ],
              correct: 1,
              explanation: "O ideal é que os envolvidos resolvam entre si primeiro; o PM facilita se necessário. Escalar e decidir por eles são reações prematuras."
            }
          ]
        },
        {
          id: "people-leadership",
          title: "Liderança servidora e formação de equipes (Tuckman)",
          tags: [{ cls: "agile", label: "ÁGIL/HÍBRIDO" }, { cls: "mindset", label: "MINDSET" }],
          theory: `
            <h2>Líder servidor (<span class="en">Servant Leadership</span>)</h2>
            <p>É o estilo de liderança que o PMI mais valoriza, sobretudo em contextos ágeis. O líder servidor <strong>serve o time</strong>: remove impedimentos, protege a equipe de distrações e cria as condições para ela entregar.</p>
            <ul>
              <li><strong>Remove impedimentos</strong> (<span class="en">removes blockers</span>).</li>
              <li><strong>Facilita</strong>, não comanda.</li>
              <li><strong>Empodera</strong> o time a se auto-organizar e tomar decisões.</li>
              <li><strong>Desenvolve</strong> as pessoas (mentoria, crescimento).</li>
              <li>Faz a pergunta: <em>"como posso ajudar?"</em>, não <em>"por que não terminou?"</em>.</li>
            </ul>

            <div class="callout tip">
              <div class="callout-title">Liderança x Gestão</div>
              <strong>Gestão</strong> lida com <em>tarefas e processos</em> (fazer certo as coisas). <strong>Liderança</strong> lida com <em>pessoas e visão</em> (fazer as coisas certas, inspirar). O PMP quer você forte nas duas, com peso na liderança.
            </div>

            <h2>As 5 fases da formação de equipes — Tuckman</h2>
            <p>Todo time atravessa estágios até performar. Decore a ordem:</p>
            <table>
              <tr><th>Fase</th><th>O que acontece</th></tr>
              <tr><td><strong>1. Formação</strong> <span class="en">(Forming)</span></td><td>Time se conhece, é educado e cauteloso. Depende muito do líder.</td></tr>
              <tr><td><strong>2. Confronto</strong> <span class="en">(Storming)</span></td><td>Surgem conflitos, disputas de ideias e ego. Fase mais difícil.</td></tr>
              <tr><td><strong>3. Normatização</strong> <span class="en">(Norming)</span></td><td>Time cria acordos, confiança e formas de trabalhar juntos.</td></tr>
              <tr><td><strong>4. Desempenho</strong> <span class="en">(Performing)</span></td><td>Time maduro, autônomo e produtivo. Auge da entrega.</td></tr>
              <tr><td><strong>5. Encerramento</strong> <span class="en">(Adjourning)</span></td><td>Projeto acaba, time se dispersa.</td></tr>
            </table>

            <div class="callout warn">
              <div class="callout-title">Pegadinha clássica</div>
              Se o time está em conflito aberto e improdutivo, ele está em <strong>Storming (Confronto)</strong> — e o papel do líder é ajudá-lo a atravessar essa fase, não puni-lo. Adicionar um novo membro pode <strong>voltar</strong> o time ao Forming.
            </div>

            <h3>Equipes de alto desempenho e ágil</h3>
            <ul>
              <li>Times ágeis são <strong>pequenos</strong> (ideal ~3 a 9 pessoas), <strong>colocalizados</strong> ou bem conectados, <strong>multifuncionais</strong> e <strong>auto-organizáveis</strong>.</li>
              <li><strong>Osmótica</strong> comunicação: informação flui pelo ambiente quando o time está junto.</li>
              <li>Motivação vem mais de <strong>autonomia, maestria e propósito</strong> do que de dinheiro (Teoria da motivação — Daniel Pink; ligada à Teoria Y de McGregor).</li>
            </ul>
          `,
          questions: [
            {
              q: "Um time recém-formado começa a ter discussões acaloradas, disputas de liderança e resistência às ideias uns dos outros. Em qual fase de Tuckman o time está?",
              options: [
                "Formação (Forming)",
                "Confronto (Storming)",
                "Normatização (Norming)",
                "Desempenho (Performing)"
              ],
              correct: 1,
              explanation: "Conflitos, disputas e resistência caracterizam o Storming (Confronto), a fase mais turbulenta. O líder deve ajudar o time a atravessá-la, não puni-lo."
            },
            {
              q: "Qual comportamento melhor descreve um líder servidor?",
              options: [
                "Distribuir tarefas detalhadas e cobrar prazos de perto.",
                "Remover impedimentos e criar condições para o time se auto-organizar.",
                "Tomar todas as decisões técnicas para poupar tempo do time.",
                "Escalar cada problema ao patrocinador rapidamente."
              ],
              correct: 1,
              explanation: "O líder servidor serve ao time: remove impedimentos, facilita e empodera a auto-organização — em vez de microgerenciar ou decidir tudo sozinho."
            },
            {
              q: "Um time de alto desempenho (fase Performing) recebe três novos integrantes. O que provavelmente acontece?",
              options: [
                "O time permanece em Performing sem alteração.",
                "O time pode regredir para a fase de Formação (Forming).",
                "O time pula direto para o Encerramento (Adjourning).",
                "O time deixa de precisar de liderança."
              ],
              correct: 1,
              explanation: "Mudanças significativas na composição — como novos membros — podem fazer o time voltar às fases iniciais (Forming/Storming) até se reajustar."
            },
            {
              q: "Segundo as teorias de motivação valorizadas no ágil, o que mais engaja profissionais do conhecimento?",
              options: [
                "Somente recompensas financeiras.",
                "Supervisão rígida e controle constante.",
                "Autonomia, maestria e propósito.",
                "Ausência total de metas."
              ],
              correct: 2,
              explanation: "Autonomia, maestria e propósito (Daniel Pink) são os grandes motivadores intrínsecos — mais eficazes que dinheiro isolado para trabalhadores do conhecimento."
            }
          ]
        }
      ]
    },

    /* =====================================================
       DOMÍNIO 2 — PROCESSOS (Process) — 50%
       ===================================================== */
    {
      id: "process",
      title: "Processos (Process)",
      weight: 50,
      topics: [
        {
          id: "process-evm",
          title: "Gerenciamento do Valor Agregado (EVM)",
          tags: [{ cls: "formula", label: "FÓRMULAS" }],
          theory: `
            <h2>EVM: medir custo e prazo ao mesmo tempo</h2>
            <p>O <strong>Gerenciamento do Valor Agregado</strong> (<span class="en">Earned Value Management — EVM</span>) responde: <em>"o projeto está adiantado ou atrasado? Acima ou abaixo do orçamento?"</em> — com números, não achismo.</p>

            <h3>Os 3 valores-base</h3>
            <table>
              <tr><th>Sigla</th><th>Nome</th><th>Significado</th></tr>
              <tr><td><strong>PV</strong></td><td>Valor Planejado <span class="en">(Planned Value)</span></td><td>Quanto de trabalho você <em>planejou</em> ter feito até agora (em $).</td></tr>
              <tr><td><strong>EV</strong></td><td>Valor Agregado <span class="en">(Earned Value)</span></td><td>Quanto de trabalho você <em>realmente entregou</em> até agora (em $). EV = % concluído × BAC.</td></tr>
              <tr><td><strong>AC</strong></td><td>Custo Real <span class="en">(Actual Cost)</span></td><td>Quanto você <em>gastou de verdade</em> até agora (em $).</td></tr>
            </table>
            <p><strong>BAC</strong> (<span class="en">Budget at Completion</span>) = orçamento total planejado do projeto.</p>

            <div class="callout tip">
              <div class="callout-title">O macete que resolve tudo</div>
              <strong>EV vem sempre primeiro.</strong><br/>
              • <strong>Variação</strong> (Variance) = <strong>subtração</strong> (menos).<br/>
              • <strong>Índice</strong> (Index) = <strong>divisão</strong>.<br/>
              • Usa <strong>AC</strong> quando o assunto é <strong>Custo</strong>; usa <strong>PV</strong> quando é <strong>Prazo/Cronograma</strong>.<br/>
              • <strong>Positivo ou &gt; 1 = bom.</strong> Negativo ou &lt; 1 = ruim.
            </div>

            <h3>Variações e Índices</h3>
            <div class="formula-box">
              Variação de Custo: <code>CV = EV − AC</code><br/>
              Variação de Prazo: <code>SV = EV − PV</code>
            </div>
            <div class="formula-box">
              Índice de Desempenho de Custo: <code>CPI = EV ÷ AC</code><br/>
              Índice de Desempenho de Prazo: <code>SPI = EV ÷ PV</code>
            </div>
            <ul>
              <li><strong>CV &gt; 0</strong> ou <strong>CPI &gt; 1</strong> → gastando menos que o previsto (bom).</li>
              <li><strong>SV &gt; 0</strong> ou <strong>SPI &gt; 1</strong> → adiantado no cronograma (bom).</li>
              <li>Negativo / abaixo de 1 → estourou custo ou está atrasado.</li>
            </ul>

            <h3>Previsões (<span class="en">Forecasting</span>)</h3>
            <div class="formula-box">
              Estimativa na Conclusão: <code>EAC = BAC ÷ CPI</code> (quando a tendência atual continua)<br/>
              Estimativa para Terminar: <code>ETC = EAC − AC</code><br/>
              Variação na Conclusão: <code>VAC = BAC − EAC</code>
            </div>
            <p><strong>TCPI</strong> (índice de desempenho para terminar) = <code>(BAC − EV) ÷ (BAC − AC)</code> — o ritmo de eficiência necessário para fechar dentro do orçamento.</p>

            <h3>Exemplo prático</h3>
            <p>Projeto de $100.000 (BAC), planejado para 10 meses. No mês 5:</p>
            <ul>
              <li>Você deveria ter entregue 50% → <strong>PV = $50.000</strong></li>
              <li>Entregou de fato 40% → <strong>EV = $40.000</strong> (0,40 × 100.000)</li>
              <li>Gastou <strong>AC = $60.000</strong></li>
            </ul>
            <p>Então: <strong>CV</strong> = 40.000 − 60.000 = <strong>−$20.000</strong> (estourou custo). <strong>SV</strong> = 40.000 − 50.000 = <strong>−$10.000</strong> (atrasado). <strong>CPI</strong> = 40.000/60.000 = <strong>0,67</strong> (ruim). <strong>SPI</strong> = 40.000/50.000 = <strong>0,80</strong> (atrasado). <strong>EAC</strong> = 100.000/0,67 ≈ <strong>$150.000</strong> — no ritmo atual, o projeto custará ~$150 mil.</p>
          `,
          questions: [
            {
              q: "Um projeto tem EV = $40.000 e AC = $50.000. Qual é a Variação de Custo (CV) e o que ela indica?",
              options: [
                "CV = +$10.000; o projeto está economizando.",
                "CV = −$10.000; o projeto está acima do orçamento.",
                "CV = $90.000; o projeto está no prazo.",
                "CV = 0,8; o projeto está eficiente."
              ],
              correct: 1,
              explanation: "CV = EV − AC = 40.000 − 50.000 = −$10.000. Valor negativo significa que gastou mais do que agregou: acima do orçamento (estouro de custo)."
            },
            {
              q: "Se o CPI de um projeto é 1,25, o que isso significa?",
              options: [
                "O projeto está gastando mais do que o planejado.",
                "Para cada $1 gasto, o projeto agrega $1,25 de valor (eficiente).",
                "O projeto está atrasado no cronograma.",
                "O projeto vai estourar o orçamento."
              ],
              correct: 1,
              explanation: "CPI = EV/AC. Um CPI de 1,25 (>1) indica eficiência de custo: para cada real gasto, agrega-se R$1,25 de trabalho — abaixo do orçamento."
            },
            {
              q: "Um projeto tem SPI = 0,90. O que podemos concluir sobre o cronograma?",
              options: [
                "O projeto está adiantado.",
                "O projeto está exatamente no prazo.",
                "O projeto está atrasado (fez 90% do que deveria ter feito).",
                "O projeto está acima do orçamento."
              ],
              correct: 2,
              explanation: "SPI = EV/PV. Um SPI de 0,90 (<1) significa que o trabalho realizado equivale a 90% do planejado: o projeto está atrasado no cronograma."
            },
            {
              q: "BAC = $200.000 e o CPI atual é 0,80. Assumindo que a tendência continue, qual é a Estimativa na Conclusão (EAC)?",
              options: [
                "$160.000",
                "$200.000",
                "$250.000",
                "$400.000"
              ],
              correct: 2,
              explanation: "EAC = BAC ÷ CPI = 200.000 ÷ 0,80 = $250.000. Como o CPI é menor que 1 (ineficiente), o custo final projetado supera o orçamento original."
            },
            {
              q: "Qual definição corresponde ao Valor Agregado (EV)?",
              options: [
                "O quanto foi gasto de verdade até o momento.",
                "O quanto se planejou entregar até o momento.",
                "O valor do trabalho realmente concluído até o momento.",
                "O orçamento total do projeto."
              ],
              correct: 2,
              explanation: "EV (Earned Value) é o valor do trabalho efetivamente concluído (% concluído × BAC). Gasto real é AC; planejado é PV; orçamento total é BAC."
            }
          ]
        },
        {
          id: "process-scrum",
          title: "Scrum: papéis, eventos e artefatos",
          tags: [{ cls: "agile", label: "ÁGIL/HÍBRIDO" }],
          theory: `
            <h2>Scrum: o framework ágil mais cobrado</h2>
            <p>Scrum organiza o trabalho em ciclos curtos chamados <strong>Sprints</strong>, com papéis, eventos e artefatos bem definidos. Cai muito na prova nova.</p>

            <h3>Os 3 papéis (o time Scrum)</h3>
            <table>
              <tr><th>Papel</th><th>Responsabilidade</th></tr>
              <tr><td><strong>Product Owner (PO)</strong><br/>Dono do Produto</td><td>Maximiza o valor. <strong>Prioriza e mantém o Product Backlog.</strong> Voz do cliente/negócio.</td></tr>
              <tr><td><strong>Scrum Master</strong></td><td><strong>Líder servidor</strong>. Facilita os eventos, remove impedimentos, protege o time e ensina o Scrum. Não é chefe.</td></tr>
              <tr><td><strong>Developers</strong><br/>Desenvolvedores</td><td>Constroem o incremento. <strong>Auto-organizáveis</strong> e multifuncionais. Estimam e decidem o "como".</td></tr>
            </table>

            <div class="callout warn">
              <div class="callout-title">Pegadinha de papéis</div>
              Quem <strong>prioriza</strong> o backlog é o <strong>PO</strong>. Quem <strong>remove impedimentos</strong> e facilita é o <strong>Scrum Master</strong>. Quem decide <strong>quanto cabe na Sprint</strong> são os <strong>Developers</strong>. Não confunda!
            </div>

            <h3>Os 5 eventos</h3>
            <table>
              <tr><th>Evento</th><th>Para quê</th><th>Timebox (Sprint de 1 mês)</th></tr>
              <tr><td><strong>Sprint</strong></td><td>O ciclo que contém todos os outros eventos.</td><td>≤ 1 mês</td></tr>
              <tr><td><strong>Planejamento da Sprint</strong> <span class="en">(Sprint Planning)</span></td><td>Define o que será feito e como (Meta da Sprint + Sprint Backlog).</td><td>até 8h</td></tr>
              <tr><td><strong>Daily Scrum</strong></td><td>Sincronização diária do time; planejar as próximas 24h.</td><td>15 min</td></tr>
              <tr><td><strong>Revisão da Sprint</strong> <span class="en">(Sprint Review)</span></td><td>Inspecionar o incremento COM os stakeholders; adaptar o backlog.</td><td>até 4h</td></tr>
              <tr><td><strong>Retrospectiva</strong> <span class="en">(Retrospective)</span></td><td>Time reflete sobre o PROCESSO e como melhorar.</td><td>até 3h</td></tr>
            </table>

            <div class="callout tip">
              <div class="callout-title">Review x Retrospectiva</div>
              <strong>Review</strong> = olha o <em>PRODUTO</em>, com stakeholders. <strong>Retrospectiva</strong> = olha o <em>PROCESSO/TIME</em>, só o time Scrum. Questão adora trocar os dois.
            </div>

            <h3>Os 3 artefatos (e seus compromissos)</h3>
            <ul>
              <li><strong>Product Backlog</strong> → compromisso: <strong>Meta do Produto</strong> (Product Goal). Lista priorizada de tudo que o produto precisa.</li>
              <li><strong>Sprint Backlog</strong> → compromisso: <strong>Meta da Sprint</strong> (Sprint Goal). O que o time escolheu fazer nesta Sprint + o plano.</li>
              <li><strong>Incremento</strong> (Increment) → compromisso: <strong>Definição de Pronto</strong> (Definition of Done). Soma de tudo que ficou realmente concluído.</li>
            </ul>

            <div class="callout">
              <div class="callout-title">Definição de Pronto x Critério de Aceitação</div>
              <strong>Definition of Done (DoD)</strong> vale para <em>todo</em> incremento (qualidade geral). <strong>Critério de aceitação</strong> é específico de <em>cada</em> item do backlog (história).
            </div>

            <h3>Conceitos que completam</h3>
            <ul>
              <li><strong>Refinamento do Backlog</strong> (<span class="en">grooming</span>): detalhar e reordenar itens — atividade contínua, não é um evento formal.</li>
              <li><strong>Velocidade</strong>: média de pontos entregues por Sprint; usada para previsão.</li>
              <li><strong>Burndown/Burnup chart</strong>: gráficos que mostram trabalho restante/concluído.</li>
            </ul>
          `,
          questions: [
            {
              q: "Durante a Sprint, um stakeholder pede diretamente aos desenvolvedores que incluam uma nova funcionalidade. Qual a atitude correta?",
              options: [
                "Os desenvolvedores incluem a funcionalidade imediatamente.",
                "O Scrum Master aprova a inclusão na hora.",
                "O pedido é levado ao Product Owner, que prioriza no Product Backlog.",
                "O time ignora o pedido até a próxima Sprint sem registrá-lo."
              ],
              correct: 2,
              explanation: "Quem prioriza e gerencia o Product Backlog é o Product Owner. Novas demandas passam por ele, que decide a prioridade — não entram direto na Sprint em andamento."
            },
            {
              q: "Qual evento do Scrum tem como foco o time refletir sobre o PROCESSO de trabalho e como melhorar?",
              options: [
                "Revisão da Sprint (Sprint Review)",
                "Retrospectiva da Sprint (Sprint Retrospective)",
                "Daily Scrum",
                "Planejamento da Sprint (Sprint Planning)"
              ],
              correct: 1,
              explanation: "A Retrospectiva foca no processo e no time (o 'como trabalhamos'). A Review foca no produto/incremento com os stakeholders."
            },
            {
              q: "Quem é responsável por remover impedimentos e facilitar os eventos do Scrum?",
              options: [
                "Product Owner",
                "Scrum Master",
                "Patrocinador do projeto",
                "Gerente funcional"
              ],
              correct: 1,
              explanation: "O Scrum Master atua como líder servidor: facilita os eventos, remove impedimentos e protege o time — sem ser um chefe que dá ordens."
            },
            {
              q: "O que é a 'Definição de Pronto' (Definition of Done)?",
              options: [
                "Os critérios de aceitação específicos de uma única história de usuário.",
                "Um conjunto de condições de qualidade que todo incremento deve cumprir para ser considerado concluído.",
                "A lista priorizada de tudo que o produto precisa.",
                "O prazo máximo de uma Sprint."
              ],
              correct: 1,
              explanation: "A Definition of Done é o padrão de qualidade que TODO incremento precisa atender. Critério de aceitação é específico de cada item; backlog é a lista priorizada."
            },
            {
              q: "Qual é o timebox recomendado para o Daily Scrum?",
              options: [
                "15 minutos",
                "1 hora",
                "4 horas",
                "O tempo que for necessário"
              ],
              correct: 0,
              explanation: "O Daily Scrum é limitado a 15 minutos, para sincronizar o time e planejar as próximas 24 horas de forma objetiva."
            }
          ]
        }
      ]
    },

    /* =====================================================
       DOMÍNIO 3 — AMBIENTE DE NEGÓCIOS (Business Environment) — 8%
       ===================================================== */
    {
      id: "business",
      title: "Ambiente de Negócios (Business Environment)",
      weight: 8,
      topics: [
        {
          id: "biz-value",
          title: "Valor do negócio, benefícios e conformidade",
          tags: [{ cls: "mindset", label: "MINDSET" }],
          theory: `
            <h2>O projeto existe para gerar valor</h2>
            <p>Este domínio (menor, 8%, mas presente) conecta o projeto ao <strong>negócio</strong>: por que ele existe, que valor entrega e como se manter em conformidade com regras externas.</p>

            <h3>Business Case e valor</h3>
            <ul>
              <li><strong>Business Case</strong> (caso de negócio): documento que justifica o projeto — o "porquê", os benefícios esperados e a viabilidade. Base para iniciar.</li>
              <li><strong>Valor de negócio</strong> (<span class="en">business value</span>): o benefício líquido que o projeto traz (financeiro ou não: reputação, market share, conformidade).</li>
              <li>O ágil busca <strong>entregar valor cedo e com frequência</strong>, não só no fim.</li>
            </ul>

            <h3>Realização de benefícios (<span class="en">Benefits Realization</span>)</h3>
            <ul>
              <li><strong>Plano de gerenciamento de benefícios</strong>: descreve <em>quais</em> benefícios, <em>quando</em> serão realizados e <em>como</em> medi-los.</li>
              <li>Muitos benefícios só aparecem <strong>depois</strong> que o projeto termina (na operação). Por isso importa quem vai "receber" o produto.</li>
              <li><strong>ROI, VPL (NPV), Payback</strong>: métricas de seleção de projetos. Regra: maior NPV/ROI é melhor; menor payback é melhor.</li>
            </ul>

            <div class="callout tip">
              <div class="callout-title">Projeto x Produto x Operação</div>
              O <strong>projeto</strong> é temporário e cria o produto. O <strong>valor</strong> costuma ser colhido na <strong>operação</strong>, ao longo do tempo. O PM deve garantir uma transição (<span class="en">handover</span>) que permita colher esses benefícios.
            </div>

            <h3>Conformidade (<span class="en">Compliance</span>)</h3>
            <ul>
              <li>Identificar <strong>requisitos legais, regulatórios e de normas</strong> que se aplicam ao projeto.</li>
              <li>Conformidade <strong>não é opcional</strong>: quando há conflito entre acelerar e cumprir a lei/segurança, <strong>a conformidade vence</strong>.</li>
              <li>Classificar e priorizar riscos de não conformidade e planejar como atendê-los.</li>
            </ul>

            <h3>Ambiente organizacional e mudança</h3>
            <ul>
              <li><strong>OPAs</strong> (Ativos de Processos Organizacionais): processos, modelos, lições aprendidas da própria empresa.</li>
              <li><strong>EEFs</strong> (Fatores Ambientais da Empresa): cultura, mercado, leis, sistemas — coisas que o PM em geral <em>não controla</em>, mas deve considerar.</li>
              <li><strong>Gestão de mudança organizacional</strong>: preparar pessoas e a organização para adotar o que o projeto entrega (senão o valor não se realiza).</li>
            </ul>

            <div class="callout warn">
              <div class="callout-title">Mindset de valor</div>
              Se uma questão perguntar se vale continuar um projeto, a resposta gira em torno de <strong>"ele ainda entrega o valor de negócio esperado?"</strong>. Se o business case deixou de se justificar, considerar <strong>encerrar</strong> é válido — não é fracasso, é boa gestão.
            </div>
          `,
          questions: [
            {
              q: "Um projeto está atrasado e a equipe sugere pular uma etapa exigida por regulação ambiental para ganhar tempo. O que o gerente de projetos deve fazer?",
              options: [
                "Pular a etapa, pois o prazo é prioridade máxima.",
                "Manter a conformidade regulatória, mesmo que isso afete o prazo.",
                "Pular a etapa e regularizar depois da entrega.",
                "Deixar a decisão a cargo da equipe técnica."
              ],
              correct: 1,
              explanation: "Conformidade legal/regulatória não é negociável. Quando há conflito entre prazo e cumprir a norma, a conformidade prevalece — o PM deve protegê-la."
            },
            {
              q: "Durante a execução, mudanças no mercado fazem o business case do projeto deixar de se justificar. Qual a atitude mais alinhada ao valor de negócio?",
              options: [
                "Continuar até o fim de qualquer forma, pois já foi iniciado.",
                "Avaliar com o patrocinador a possibilidade de encerrar o projeto.",
                "Esconder a informação para não desmotivar o time.",
                "Reduzir a qualidade para terminar mais rápido."
              ],
              correct: 1,
              explanation: "Se o projeto não entrega mais o valor esperado, reavaliá-lo — inclusive encerrá-lo — é boa gestão. Insistir por insistir desperdiça recursos da organização."
            },
            {
              q: "O que descreve corretamente os Fatores Ambientais da Empresa (EEFs)?",
              options: [
                "Modelos, processos e lições aprendidas criados pela própria empresa.",
                "Condições como cultura, leis e mercado que o PM geralmente não controla, mas deve considerar.",
                "O documento que justifica financeiramente o projeto.",
                "A lista priorizada de requisitos do produto."
              ],
              correct: 1,
              explanation: "EEFs são fatores internos/externos fora do controle direto do PM (cultura, leis, mercado, sistemas). Processos e modelos internos são OPAs; a justificativa é o business case."
            },
            {
              q: "Por que o plano de gerenciamento de benefícios é importante mesmo após o encerramento do projeto?",
              options: [
                "Porque muitos benefícios só se concretizam durante a operação, depois da entrega.",
                "Porque ele substitui o cronograma do projeto.",
                "Porque define os papéis do time Scrum.",
                "Porque elimina a necessidade de business case."
              ],
              correct: 0,
              explanation: "Boa parte do valor de negócio é colhida na operação, após a entrega. O plano de benefícios define quais, quando e como medir — garantindo que o valor realmente se realize."
            }
          ]
        }
      ]
    }
  ]
};
