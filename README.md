# Compras Mercado

App web (PWA) de lista de compras com o mascote Moranguito.

- **Lista padrão do mês:** compra de 30 dias montada pela *Divisão do mês* (11 categorias: proteínas, hortifrúti, mercearia, laticínios e frios, padaria e matinais, bebidas, congelados, limpeza, higiene pessoal, utilidades do lar, pets/bebê), calculada pelo número de pessoas e ajustada às preferências
- **Divisão do mês editável:** em Ajustes, mude categorias, itens sugeridos e a % do orçamento de cada uma; com orçamento definido, a lista mostra gasto x previsto por categoria
- **Nova lista de compras com data:** escolha os itens da sua relação (divisão do mês + itens já usados), a lista sai com a data da compra; no mercado é só ir marcando, e a foto do cupom salva os preços, ajusta as quantidades e marca os itens encontrados
- **Foto do cupom fiscal:** lê o cupom (OCR no próprio aparelho, Tesseract.js), mostra os itens para conferir e salva os preços no histórico e nas listas
- **Instalável no celular:** botão "Instalar" no Android; passo a passo no iPhone (Safari → Compartilhar → Adicionar à Tela de Início); funciona offline
- Listas coloridas: digitar, colar receita ou falar a lista (voz em pt-BR)
- "Quanto sua cesta subiu": gasto do mês, variação por produto e alerta de embalagem que encolheu
- Dados salvos só no aparelho (localStorage + cópia no IndexedDB), com backup por código em Ajustes

Arquivos: `index.html`, `manifest.webmanifest`, `sw.js`, `icons/`. Sem build.

Feito por **DomDevLabs** · domdevlabs@gmail.com · v1.8.0

Logo oficial em `icons/domdevlabs-logo.png`.
