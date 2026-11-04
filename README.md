# Compras Mercado

App web (PWA) de lista de compras com o mascote Tomé.

- **Lista padrão do mês:** compra base de 30 dias por setor do mercado, calculada pelo número de pessoas e ajustada às preferências (vegano, sem lactose, pet, bebê…)
- **Foto do cupom fiscal:** lê o cupom (OCR no próprio aparelho, Tesseract.js), mostra os itens para conferir e salva os preços no histórico e nas listas
- **Instalável no celular:** botão "Instalar" no Android; passo a passo no iPhone (Safari → Compartilhar → Adicionar à Tela de Início); funciona offline
- Listas coloridas: digitar, colar receita ou falar a lista (voz em pt-BR)
- "Quanto sua cesta subiu": gasto do mês, variação por produto e alerta de embalagem que encolheu
- Dados salvos só no aparelho (localStorage)

Arquivos: `index.html`, `manifest.webmanifest`, `sw.js`, `icons/`. Sem build.

Feito por **DomDevLabs** · v1.3.0
