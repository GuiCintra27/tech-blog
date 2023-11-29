# Versão Brasileira 🇧🇷

<div style="text-align: center;">
  <img  style="border-radius: 8px;" src="./public/banner.png" width="90%"/>
  <br/>
  <br/>
  <a href="https://tech-blog-cintra.vercel.app/"><strong>Link do Deploy »</strong></a>
  <br/>
  <br/>
</div>
<div align="center">
  <a href="https://www.figma.com/file/esJ75DiHt6C0JPaV5ufdSJ/Tech-Blog?type=design&mode=design&t=i8306vKEQjkKnRTe-1">Figma</a> •
  <a href="#about">Sobre</a> •
  <a href="#technologies">Tecnologias</a> •
  <a href="#run">Como Rodar?</a> •
  <a href="#links">Links</a> 
</div>

### Página Inicial

  <img src="./public/GIFs/home.gif"/>

### Página de Post

  <img src="./public/GIFs/post.gif"/>

### Contato

  <img src="./public/GIFs/contact.gif"/>

## <span id="about">🌐 Sobre o Projeto</span>

Seu principal objetivo é aprofundar os conhecimentos em métodos de renderização, que são possíveis de se utilizar no Next.js, para melhorar a experiência do usuário e os métodos de SEO, além de reduzir o tempo de carregamento da página e permitir ações mesmo que o usuário tenha uma conexão lenta.

É exibido um skeleton loading para reduzir a percepção de um longo tempo de carregamento, e é utilizado o local storage para salvar a escolha de tema feita pelo usuário.

O CMS utilizado foi o Hygraph, possui uma boa velocidade de resposta e pode ser utilizado gratuitamente. Além de possuir uma navegação bem intuitiva, sua API se comunica pelo protocolo GraphQL, que era um dos objetivos deste projeto.

A comunicação com o servidor foi feita com o Apollo Client utilizando GraphQL. Os hooks de comunicação com o servidor foram gerados automaticamente, utilizando o GraphQL Codegen. Ele analisa as queries GraphQL produzidas, verifica se o formato é compatível com a API, e então produz o código em uma pasta designada.

Foram gerados diversos testes unitários, abordando temas como: rerender, firing events, custom render function, mock de dados, faker para geração de dados falsos.

Abaixo segue a lista de algumas das funcionalidades implementadas:

- Hygraph como CMS para criação e gerenciamento do conteúdo da API GraphQL
- Apollo Client para comunicação GraphQL com a API
- GraphQL Codegen para geração de código automático a partir de queries GraphQL
- Redux para compartilhamento dos dados entre componentes
- Mudança de tema a partir do Theme Provider (Styled-Components)
- Skeleton Loading como animação de carregamento
- Local Storage para persistência dos dados
- Testes utilizando a React Testing Library, Jest e Faker
- Design Patterns
- Arquitechture Patterns

## <span id="technologies">🛠 Tecnologias</span>

Abaixo seguem as ferramentas e frameworks utilizados no projeto: <br/>

<div style="display: inline_block"> 
  <img alt="Gui-Next" height="30" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
  <img alt="Gui-React" height="30" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Gui-Redux" height="30" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white">
  <img alt="Gui-Jest" height="30" src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white">
  <img alt="Gui-GraphQL" height="30" src="https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white">
  <img alt="Gui-Apollo" height="30" src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white">
  <img alt="Gui-React-Testing-Library" height="30" src="https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red">  
  <img alt="Gui-Ts" height="30" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="Gui-Styled-Components" height="30" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">  
  <img alt="Gui-Figma" height="30" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>

## <span id="run">⚙️ Como Rodar</span>

1. Clone este repositório
2. Adicione a URL da API HYGRAPH nas variáveis de ambiente (exemplo no arquivo .env.example)
3. Instale as dependências

```bash
npm i
```

4. Rode a aplicação com

```bash
npm run dev
```

5. Você pode opcionalmente buildar o projeto

```bash
npm run build
```

6. E executar a versão de produção

```bash
npm start
```

7. Por último, acesse http://localhost:3000 no seu navegador para vizualizar a aplicação

### 🧪 Testes

Para rodar os testes execute o comando

```bash
npm test
```

<br/>

## <span id="links">🚀 Links</span>

- [Deploy](https://tech-blog-cintra.vercel.app/)
- [Figma](https://www.figma.com/file/esJ75DiHt6C0JPaV5ufdSJ/Tech-Blog?type=design&mode=design&t=i8306vKEQjkKnRTe-1)