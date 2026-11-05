# Compras Mercado

App web (PWA) de lista de compras com o mascote Moranguito. Feito por **DomDevLabs** · domdevlabs@gmail.com · v2.0.0

## Como usar
1. **Cadastro de 1 tela:** seu nome e quantas pessoas moram na casa.
2. **+ Nova lista** (botão fixo embaixo): escolha os itens da sua relação, ou toque em *Marcar a compra do mês inteira* (quantidades pelo número de pessoas). A lista sai com a data.
3. A lista guia você em **3 etapas**:
   - **Montar:** adicionar (digitando, colando ou falando), ajustar quantidade e preço.
   - **No mercado:** toque no item quando colocar no carrinho.
   - **Cupom:** foto do cupom fiscal → salva preços, acerta quantidades e marca o que faltou → *Concluir compra*.
4. **Tela inicial:** listas abertas em cima, compras concluídas embaixo (data e total). Uma compra concluída pode ser *Usada de novo hoje*.

## Outras funções
- **Gastos:** gasto do mês, 6 meses, quanto cada produto subiu e alerta de embalagem que encolheu
- **Itens e categorias:** 11 categorias editáveis com % do orçamento (na Nova lista e em Ajustes)
- **Enviar lista (📤):** link para ir marcando ou arquivo HTML "Lista de Compras - data - mercado"
- **Ajustes:** você, itens e categorias, aparência, preferências da casa, backup, instalar, sobre
- Instalável no celular (Android e iPhone), funciona offline; dados só no aparelho (localStorage + IndexedDB) com backup por código

Arquivos: `index.html`, `manifest.webmanifest`, `sw.js`, `icons/`. Sem build.
