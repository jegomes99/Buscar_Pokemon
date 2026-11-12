# 🔥 Buscar Pokémon

Projeto feito em aula para praticar o consumo de uma **API** com JavaScript. Você digita o número (ID) de um Pokémon e a página busca as informações dele na [PokéAPI](https://pokeapi.co/) e mostra tudo em um **card colorido**, parecido com uma carta de Pokémon.

<!-- Coloque aqui um print do projeto funcionando: -->
<!-- ![Card do Charmander](print.png) -->

## ✨ Funcionalidades

- 🔎 Busca de Pokémon pelo ID
- 🃏 Resultado em formato de card, com cor de acordo com o tipo (Fogo, Água, Planta...)
- 📋 Mostra os dados do Pokémon:
  - Nome
  - Imagem (arte oficial)
  - Experiência base
  - Altura (em metros)
  - Peso (em kg)
  - Número, PS (vida) e tipo
- 🔊 Toca o som do Pokémon quando ele é encontrado, com botão para ouvir de novo
- ⚠️ Mensagem de erro quando o Pokémon não existe

## 🛠️ Tecnologias

- **HTML5**: estrutura da página
- **CSS3**: estilo do card, com Flexbox, degradês e variáveis CSS
- **JavaScript**: `fetch`, `async/await` e manipulação do DOM
- **[PokéAPI](https://pokeapi.co/)**: API gratuita com os dados dos Pokémon

## 🚀 Como rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/jegomes99/Pokemon.git
   ```
2. Abra a pasta no VS Code.
3. Abra o `index.html` com a extensão **Live Server** (botão direito → *Open with Live Server*) ou com dois cliques no arquivo.
4. Digite um ID (exemplos: `1`, `4`, `7`, `25`) e clique em **Buscar**.

## 📁 Estrutura

```
📦 projeto
 ┣ 📜 index.html   → estrutura da página e do card
 ┣ 📜 styles.css   → visual do card e cores por tipo
 ┣ 📜 main.js      → busca na API e preenche o card
 ┗ 📜 README.md
```

## 🧠 Como funciona

1. O usuário digita um ID e envia o formulário.
2. O JavaScript faz uma requisição para `https://pokeapi.co/api/v2/pokemon/{id}`.
3. A resposta vem em JSON, e os dados são colocados no HTML com `textContent` e `src`.
4. Uma classe como `tipo-fire` é adicionada ao card, e o CSS troca a cor pelo tipo.

Alguns dados vêm em outras unidades e são convertidos no código:

| Dado   | Vem da API em | Conversão     |
|--------|---------------|---------------|
| Altura | decímetros    | ÷ 10 → metros |
| Peso   | hectogramas   | ÷ 10 → kg     |

## 📝 Observações

- O som do Pokémon é um arquivo `.ogg`, que funciona no Chrome, Edge e Firefox, mas pode não tocar no Safari.
- Pokémon e todos os nomes relacionados são marcas registradas da Nintendo, Game Freak e Creatures. Projeto sem fins comerciais, feito só para estudo.
