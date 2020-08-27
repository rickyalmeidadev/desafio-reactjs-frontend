<h1 align="center">Desafio Navedex</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/rickyalmeidadev/desafio-reactjs-frontend">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rickyalmeidadev/desafio-reactjs-frontend">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/rickyalmeidadev/desafio-reactjs-frontend">
  <a href="https://github.com/rickyalmeidadev/desafio-reactjs-frontend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rickyalmeidadev/desafio-reactjs-frontend">
  </a>
</p>

![Screenshot from 2020-08-26 23-46-33](https://user-images.githubusercontent.com/60705947/91378364-9ff7a700-e7f6-11ea-865e-1fa5134c1a38.png)

>You can access the English documentation by clicking [here](https://github.com/rickyalmeidadev/desafio-reactjs-frontend/blob/master/README.en.md).

## Sobre o desafio

O sistema consiste em uma web app com fluxo de autenticação e CRUD dos navers, possuindo informações como: nomes, idades, cargos, tempo de empresa e projetos que participou. 

## Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/) - TypeScript é um superconjunto tipado de JavaScript que compila para JavaScript simples.
- [React](https://pt-br.reactjs.org/) - Uma biblioteca JavaScript para criar interfaces de usuário.
- [Styled Components](https://styled-components.com/) - Primitivos visuais para a idade do componente. Use os melhores bits de ES6 e CSS para estilizar seus aplicativos sem estresse.
- [Formik](https://formik.org/) - Formik é a biblioteca de formulários de código aberto mais popular do mundo para React e React Native.
- [Yup](https://www.npmjs.com/package/yup) - Yup é um construtor de esquema JavaScript para análise e validação de valor.
- [Moment.js](https://momentjs.com/) - Analisar, validar, manipular,
e exibir datas e horas em JavaScript.

## Utilização

Credenciais para acesso:
```
email: ricky@nave.rs
password: nave1234
```

O projeto está hospedado e pode ser acessado em https://navedex-rickyalmeida.vercel.app

## Inicializando

### Pré-requisitos

Para executar este projeto localmente, você precisará:

- Clonar este repositório - https://github.com/rickyalmeidadev/desafio-reactjs-frontend.

### Instalação

1. Clone o repositório:

```sh
git clone https://github.com/rickyalmeidadev/desafio-reactjs-frontend
```

2. Instale os pacotes:

```sh
yarn install

or

npm install
```

3. Execute a aplicação:

```sh
yarn start

or

npm start
```

4. Certifique-se de que a seguinte porta esteja disponível:

```sh
PORT: 3000.
```

5. Acesse a aplicação por meio do link a seguir após executar as etapas de 1 a 4:

```sh
http://localhost:3000/
```

## Recursos (bônus)

- Para navers sem imagem ou imagem quebrada, foi implementado um placeholder como alternativa;
- Durante os carregamentos foram usados loaders e esqueletos com efeito shimmer;
- Design responsivo para resoluções a partir 320px de largura;
- Campos de idade e tempo de empresa foram alterados para campos de data, afim de causar uma melhor experiência do usuário;
- Validação de todos os inputs com messagens personalizadas de feedback utilizando a biblioteca Yup.
- Uso da Context API para gerenciamento de estado.


## Autor

Feito com :heart: por Ricky Almeida - [email](mailto:ricky.almeida.dev@gmail.com) - [linkedin](https://www.linkedin.com/in/rickyalmeidadev)
