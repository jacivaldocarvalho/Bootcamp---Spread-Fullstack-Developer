# ReactJs
## Conteúdo
- [ReactJs](#reactjs)
  - [Conteúdo](#conteúdo)
    - [Introdução ao ReactJs](#introdução-ao-reactjs)
      - [Conheça a tecnologia ReactJs](#conheça-a-tecnologia-reactjs)
      - [Configuração](#configuração)
      - [O que é JSX](#o-que-é-jsx)
      - [Renderização](#renderização)
      - [Componentes e Props](#componentes-e-props)
        - [Componentes de função e classe](#componentes-de-função-e-classe)
        - [Renderizando um componente](#renderizando-um-componente)
        - [Composição de Componentes](#composição-de-componentes)
        - [Extração de componentes](#extração-de-componentes)
      - [Estado e Ciclo de Vida](#estado-e-ciclo-de-vida)
      - [Integrando webpack ao desenvolvimento com ReactJS](#integrando-webpack-ao-desenvolvimento-com-reactjs)
        - [O que é webpack?](#o-que-é-webpack)
        - [Configuração](#configuração-1)
        - [O que é ESLint?](#o-que-é-eslint)
      - [Conceitos aplicados aos tipos de dados e condicional do React JS](#conceitos-aplicados-aos-tipos-de-dados-e-condicional-do-react-js)
        - [Renderização Condicional](#renderização-condicional)
          - [Variáveis de Elementos](#variáveis-de-elementos)
          - [If inline com o Operador Lógico &&](#if-inline-com-o-operador-lógico-)
          - [If-Else inline com Operador Condicional](#if-else-inline-com-operador-condicional)
        - [Listas e Chaves](#listas-e-chaves)
        - [Manipulando Eventos](#manipulando-eventos)
        - [Dicas](#dicas)

### Introdução ao ReactJs
#### Conheça a tecnologia ReactJs

- React Js é uma biblioteca JavaScript para criar interfaces de usuário;
- A principal função é a criação da interface para o usuário;
- React é uma linguagem declarativa;
- O React está preocupado apenas com o que é exibido na interface do usuário;
- React é baseado em componentes.

#### Configuração
- Ter o npm instalado.

```shell
# Criando projeto ReactJs

npx create-react-app my-app
cd my-app
npm start

```

#### O que é JSX

Não é HTML e nem uma String. React não separa as tecnologias colocando marcação em arquivos separados, e sim separa conceitos e mantém o código pouco acoplado chamando-os de componentes. Não é obrigatório a utilização do JSX. É uma Sintaxe Suggar para React.createElement. Facilita a renderização do código.

O browser não interpreta o JSX, para isso é necessário um transpilador para que a aplicação possa entender o código. O mais utilizado é o Babel.


#### Renderização

- Renderização de Elementos;
- React DOM;
- Nós Raiz.

React "pensa" em como a interface deve estar a cada momento ao invés de alterá-la com o tempo, o que faz ter ganho de performance e evita uma série de erros.

#### Componentes e Props
Os componentes permitem que você divida a interface do usuário em partes independentes e reutilizáveis ​​e pense em cada parte isoladamente. Conceitualmente, os componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React descrevendo o que deve aparecer na tela.


##### Componentes de função e classe
Definir um componente é escrever uma função JavaScript. Esta função é um componente React válido porque aceita um único argumento de objeto “props” (que significa propriedades) com dados e retorna um elemento React. Chamamos esses componentes de “componentes de função” porque são literalmente funções JavaScript.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

##### Renderizando um componente
Os elementos também podem representar componentes definidos pelo usuário. Quando o React vê um elemento representando um componente definido pelo usuário, ele passa atributos JSX e filhos para este componente como um único objeto. Chamamos esse objeto de “props”.

Por exemplo, este código renderiza “Hello, Sara” na página.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
```

##### Composição de Componentes
Os componentes podem se referir a outros componentes em sua saída. Isso nos permite usar a mesma abstração de componente para qualquer nível de detalhe. Um botão, um formulário, uma caixa de diálogo, uma tela: em aplicativos React, tudo isso é comumente expresso como componentes.

Por exemplo, podemos criar um Appcomponente que renderiza vários *Welcome* vezes:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

##### Extração de componentes

Divisão de componentes em componentes menores.

Por exemplo, no componente Comment.

```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Primeiro, extraindo Avatar.

```javascript
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

O Avatar não precisa saber que está sendo renderizado dentro de um arquivo Comment. É por isso que demos ao seu prop um nome mais genérico: user em vez de author. Recomenda-se nomear props do ponto de vista do próprio componente em vez do contexto em que está sendo usado. Pode-se, simplificar Comment da seguinte maneira:

```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

#### Estado e Ciclo de Vida

Nenhum componente pai ou filho devem saber se outro componente possui estado ou não. O estado é apenas local ao componente e caso seja necessário envia algum atributo para outro então é feito via props.

#### Integrando webpack ao desenvolvimento com ReactJS
##### O que é webpack?
o webpack é um empacotador de módulo estático para aplicativos JavaScript modernos. Quando o webpack processa seu aplicativo, ele cria internamente um gráfico de dependência de um ou mais pontos de entrada e combina todos os módulos que seu projeto precisa em um ou mais pacotes , que são ativos estáticos para servir seu conteúdo.

##### Configuração
- Entry: Utilizando grafo, o webpack precisa de um ponto d entrada para buscar todos os módulos e dependências.
- Output: É para determinar quais são os bundlers que o webpack irá emitir.
- Loaders: É para permitir que o webpack gerencie arquivos não são javascripts.
- Plugins: Podem ser utlizados para otimização de pacotes, minificação, injeção de scripts e muito mais.
- Mode: Utilizados para abordagem de configuração zero. É possível configurar módulos como production, development ou none.
  - Production trás otimizações internas.
  - Development é executado com três plugins: UgliflyPlugin, ModuleConcatenationPlugin e NoEmitOnErrorsPlugin.

##### O que é ESLint?
O ESLint analisa seu código estaticamente para encontrar problemas rapidamente. O ESLint é integrado à maioria dos editores de texto e você pode executar o ESLint como parte de seu pipeline de integração contínua.

#### Conceitos aplicados aos tipos de dados e condicional do React JS
##### Renderização Condicional
Renderização condicional funciona da mesma forma que uma condicional funciona em JavaScript.

Considere os dois componentes:

```javascript
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

```

Criando um componente Greeting que mostra um dos dois componentes:

```javascript
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);

```

###### Variáveis de Elementos
É possível usar variáveis para guardar elementos. Isto auxilia a renderizar condicionalmente parte do componente enquanto o resto do resultado não muda.

Considere esses dois novos componentes representando os botões de Logout e Login

```javascript
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

```

No exemplo abaixo, é criado um componente *stateful* chamado LoginControl. O componente irá renderizar o *LoginButton* ou *LogoutButton* dependendo do estado atual. Ele tambem irá renderizar *Greeting* do exemplo anterior:

```javascript
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

```
###### If inline com o Operador Lógico &&
É possível encurtar a condição IF. Pode-se incorporar expressão em JSX encapsulando em chaves. Isto inclui o operador lógico && do JavaScript. Isto pode ser conveniente para incluir condicionalmente um elemento:

```javascript
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

Isto funciona porque em JavaScript, true && expressão são sempre avaliadas como expressão, e false && expressão são sempre avaliadas como false. Assim, se a condição é true, o elemento logo depois do && irá aparecer no resultado. Se o elemento é false, React irá ignora-lo.

###### If-Else inline com Operador Condicional
Outro método para renderizar elementos inline é utilizar o operador condicional em JavaScript condição ? true : false.

Abaixo, é utilizado para renderizar condicionalmente um pequeno bloco de texto.

```javascript
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

Também pode ser usado para expressões mais longas, embora, o que está acontecendo seja menos óbvio:

```javascript
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}
```

##### Listas e Chaves

##### Manipulando Eventos

##### Dicas 