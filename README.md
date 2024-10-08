# Quiz App

## Descrição

Este é um aplicativo de quiz desenvolvido em **React** que permite aos usuários testar seus conhecimentos em diferentes categorias. O aplicativo oferece funcionalidades como a seleção de categorias, perguntas e respostas, dicas, eliminação de respostas erradas e exibição da pontuação ao final do jogo. O projeto foi desenvolvido para aprimorar os conceitos de **React**, **Context API**, **useReducer**, **hooks**, e design responsivo.

## Funcionalidades

- **Seleção de Categorias**: Os usuários podem escolher a categoria de perguntas antes de iniciar o quiz.
- **Perguntas e Respostas**: O usuário recebe perguntas com várias opções e deve escolher a correta.
- **Dicas**: O usuário pode usar uma dica para ajudar a responder a uma pergunta, mas com limite de uso.
- **Eliminar Resposta Errada**: O usuário pode eliminar uma opção errada durante a resposta, mas também com limite de uso.
- **Pontuação Final**: No final do quiz, a pontuação final é exibida com o número de acertos e erros.
- **Responsividade**: O layout é adaptado para diferentes tamanhos de tela, incluindo dispositivos móveis.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **useState** e **useReducer**: Hooks do React para gerenciar o estado local e o estado global do quiz.
- **Context API**: Utilizado para gerenciar o estado global da aplicação, permitindo compartilhar o estado entre os componentes sem a necessidade de prop drilling.
- **CSS Responsivo**: Estilização responsiva utilizando CSS puro para garantir uma boa experiência em dispositivos móveis e desktop.

## Estrutura do Projeto

- **src/components/**: Contém todos os componentes da aplicação (e.g., `Welcome`, `Category`, `StartQuiz`, `EndQuiz`).
- **src/context/**: Contém o `QuizContext`, que gerencia o estado global do quiz.
- **src/data/**: Contém os dados das perguntas do quiz.
- **src/App.js**: Componente principal da aplicação que gerencia o fluxo entre os diferentes estágios do quiz.
- **src/index.js**: Ponto de entrada da aplicação, onde o `QuizProvider` envolve a aplicação.
- **src/styles/**: Estilização dos componentes e responsividade.

## Como Executar o Projeto

1.  Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/quiz-app.git
    ```

2.  Navegue até a pasta do projeto:

    ```bash
    cd quiz-app
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```

4.  Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

5.  Acesse a aplicação no navegador em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir **issues** ou enviar **pull requests**.

### Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/xyz`).
3. Faça suas alterações e commite-as (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o branch remoto (`git push origin feature/xyz`).
5. Crie um pull request.
