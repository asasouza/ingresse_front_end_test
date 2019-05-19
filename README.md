# React TV Maze - Alex Sandro A. Souza @asasouza


## Configurando o ambiente de desenvolvimento
1. Acesse o repositório do projeto hospedado no <a href='https://github.com/asasouza/ingresse_front_end_test'>Github</a> e clone-o para o diretório desejada através do comando <code>git clone https://github.com/asasouza/ingresse_front_end_test.git</code>.
	- Obs: Caso opte por não realizar a operação anterior pelo <i>git</i> é possível realizar o download do projeto no formato <i>.zip</i> e descompacta-lo no diretório de preferência.
2. Com o prompt de comando de seu sistema operacional, vá a pasta onde o projeto foi salvo e execute o comando <code>npm install</code>. Este comando instalará todas as dependências listadas na aplicação.
	- Caso não possua, é necessária a instalação do npm, disponível através deste <a href="https://www.npmjs.com/get-npm">link</a>
3. Com as dependências instaladas, execute o comando <code>npm start</code> dentro do diretório do projeto. Isto deve iniciar um servidor local de testes da aplicação. Assim abra o navegador no endereço <code>localhost:8080</code> e teste-a.

## Estrutura de arquivos
A aplicação é divida na seguinte hierarquia de diretórios:

	|-src
		|- assets
		|- components
			|- css
		|- constants
		|- ducks
		|- providers
		|- routers
		|- views
		App.js
		index.js

No desenvolvimento da aplicação foi utilizado o design pattern <a href="https://github.com/erikras/ducks-modular-redux">Ducks</a> e estilização com <a href='https://cssinjs.org/'>css-in-js</a> utilizando o módulo ReactJSS. 
Os dados para teste e exibição foram todos coletados da API publica <a href="https://www.tvmaze.com/api">TV MAZE</a>.

## Gerando arquivos de produção
Para gerar os arquivos de produção é necessário executar no diretório do projeto o comando <code>npx webpack -p</code>. Este gerará a pasta contendo toda o código unificado e minificado da aplicação e importará as imagens, fontes e css necessários e utilizados pela aplicação.

## Tecnologias
Foram utilizadas as seguintes tecnologias para desenvolvimento desta aplicação de teste:

		- React JS;
		- Redux + Redux Thunk;
		- React Router;
		- ReactJSS;
		- Webpack;
		- Javascript ES6 + Babel;
		- HTML + CSS;
		- ESLint;
		- Aphrodite React;
