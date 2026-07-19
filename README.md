# 🍼 Diário de Introdução Alimentar

Aplicativo simples para acompanhar a introdução alimentar do bebê — feito para uso diário no celular, funciona **100% offline** e guarda tudo no próprio aparelho (não precisa de internet nem conta).

## Como usar

1. Abra o arquivo **`index.html`** no navegador do celular.
2. Toque em **Compartilhar → Adicionar à Tela de Início** — vira um ícone como qualquer app.
3. Pronto! Pode registrar as ofertas mesmo sem internet.

> 💡 Para ter um link fixo no celular, é possível ativar o **GitHub Pages** deste repositório (Settings → Pages → branch → `/root`). O app fica disponível numa URL como `https://<usuario>.github.io/<repo>/`.

## Funcionalidades

- **📝 Registrar oferta** — data, refeição (manhã / tarde / almoço / jantar), alimento, forma (papa/amassado ou inteiro/BLW), reação (gostou / neutro / não gostou), e marcadores de **engasgo** e **reação alérgica**, com campo de observações.
- **📔 Diário** — todos os registros organizados por dia, com resumo (total de registros, alimentos diferentes, quantos ela gostou).
- **🍎 Alimentos (regra das ofertas)** — contagem por alimento: quantas vezes foi ofertado, em quais dias, quantas vezes gostou/não gostou/neutro, engasgos, e uma **barra de progresso rumo às 17 ofertas** antes de concluir que ela realmente não gosta. Veredito automático: 🆕 Novo · 🔄 Em teste · ✅ Aceito · ❌ Recusado.
- **📆 Plano** — cronograma por idade (frutas aos 5 meses → almoço → jantar aos 7 meses), rastreio dos principais **alergênicos** introduzidos, e **dicas de segurança**.
- **⚙️ Ajustes** — nome e data de nascimento da bebê (calcula a idade e a fase automaticamente), meta de ofertas configurável e **backup** (exportar/importar arquivo) para nunca perder os dados e poder mostrar ao pediatra.

## Privacidade

Nenhum dado sai do aparelho. Tudo fica salvo localmente (localStorage) no navegador. Faça o **backup** de tempos em tempos pelos Ajustes.

---

*Este app é uma ferramenta de organização e não substitui a orientação do pediatra ou nutricionista.*
