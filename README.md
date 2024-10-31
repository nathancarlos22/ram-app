Este é um projeto React para visualizar personagens do universo **Rick and Morty**, consumindo dados da [Rick and Morty API](https://rickandmortyapi.com). O projeto exibe uma listagem de personagens com informações principais e permite visualizar os detalhes completos de cada personagem em um modal. 

## Índice

- [Visão Geral](#visão-geral)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Bibliotecas Utilizadas](#bibliotecas-utilizadas)
- [Exemplo de Uso](#exemplo-de-uso)

## Visão Geral

Este projeto é uma aplicação simples em React que utiliza os conceitos de **Atomic Design** para organizar componentes e styled-components para estilização. O layout é responsivo, adaptando-se bem para diferentes dispositivos (desktop e mobile). Para listar os personagens e exibir seus detalhes, utilizamos o modal que permite fácil visualização e navegação.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/ram-app.git
   cd ram-app
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor local:

   ```bash
   npm start
   ```

4. Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## Estrutura do Projeto

O projeto segue o padrão **Atomic Design**, organizando componentes em átomos, moléculas e organismos. Além disso, o projeto possui a seguinte estrutura de pastas:

```plaintext
src/
 ├── components/
 │    ├── atoms/          # Elementos básicos e reutilizáveis
 │    ├── molecules/      # Conjunto de componentes menores
 │    └── organisms/      # Componentes complexos com lógica interna
 ├── pages/
 │    ├── Home.js         # Página principal com a listagem de personagens
 │    └── CharacterDetails.js # Modal de detalhes do personagem
 ├── services/
 │    └── api.js          # Funções de chamada da API
 ├── styles/
 │    └── GlobalStyle.js   # Estilos globais para a aplicação
 ├── App.js               # Componente principal
 └── index.js             # Entrada da aplicação
```

## Funcionalidades

- **Listagem de Personagens**: Exibe todos os personagens em formato de cards com imagem, nome e status.
- **Modal de Detalhes**: Ao clicar em um personagem, abre-se um modal com:
  - Imagem do personagem
  - Nome do personagem
  - Lista de episódios em que ele aparece
- **Responsividade**: O layout adapta-se para diferentes dispositivos com um breakpoint em 768px.
- **Tratamento de Erros**: Mensagens de erro amigáveis são exibidas caso haja falha na requisição da API.

## Bibliotecas Utilizadas

- **React**: Biblioteca principal para a interface de usuário.
- **Styled-Components**: Utilizado para estilização de componentes com suporte a temas e responsividade.
- **Axios**: Para requisições HTTP à API de Rick and Morty.

## Exemplo de Uso

1. **Listagem de Personagens**: A página principal mostra uma lista de personagens em formato de cards, exibindo sua imagem, status e nome.
2. **Visualizar Detalhes**: Ao clicar em qualquer personagem, um modal é aberto com detalhes adicionais, incluindo todos os episódios em que o personagem apareceu.
3. **Navegação**: A qualquer momento, você pode fechar o modal para retornar à listagem de personagens.
