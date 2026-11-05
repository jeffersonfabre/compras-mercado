# Compras Mercado

App web (PWA) de lista de compras Feito por **DomDevLabs** · domdevlabs@gmail.com · v2.1.1

## Como usar
1. **Cadastro de 1 tela:** seu nome e quantas pessoas moram na casa.
2. **+ Nova lista** (botão fixo embaixo): busque ou toque nos itens (⭐ Mais comprados no topo, categorias recolhidas), ou use *Marcar a compra do mês*. Data e nome são automáticos.
3. A lista guia você em **3 etapas**:
   - **Montar:** um campo só para adicionar (digitando ou falando); toque no item para mudar a quantidade.
   - **No mercado:** toque no item quando colocar no carrinho.
   - **Cupom:** foto do cupom fiscal → salva preços, acerta quantidades e marca o que faltou → *Concluir compra*.
4. **Tela inicial:** listas abertas em cima, compras concluídas embaixo (data e total). Uma compra concluída pode ser *Usada de novo hoje*.

## Outras funções
- **Gastos:** gasto do mês, 6 meses, quanto cada produto subiu e alerta de embalagem que encolheu
- **Itens e categorias:** 11 categorias editáveis; orçamento por categoria só se ligar *Controlar orçamento* em Ajustes
- **Enviar lista (📤):** link pelo WhatsApp para ir marcando
- **Ajustes:** você, itens e categorias, aparência, backup, instalar, sobre
- Dicas curtas na primeira vez em cada tela; quantidades por extenso (1 pacote, 2 dúzias, 1½ kg)
- Instalável no celular (Android e iPhone), funciona offline; dados só no aparelho (localStorage + IndexedDB) com backup por código

Arquivos: `index.html`, `manifest.webmanifest`, `sw.js`, `icons/`. Sem build.

## Publicar
- **Cloudflare Pages:** Workers & Pages → Create → Pages → Connect to Git → `compras-mercado`; Framework preset *None*, build command vazio, output directory `/`. O arquivo `_headers` já configura o service worker.
- **Vercel:** também funciona (`vercel.json`).
