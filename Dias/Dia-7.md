# Introdução ao JavaScript

## Conteúdo
- [Introdução ao JavaScript](#introdução-ao-javascript)
  - [Conteúdo](#conteúdo)
  - [História, Evolução e Aplicações](#história-evolução-e-aplicações)
    - [Características:](#características)
    - [Evolução:](#evolução)
    - [Aplicações:](#aplicações)
  - [Recursos Básicos](#recursos-básicos)
    - [Manipulando um arquivo](#manipulando-um-arquivo)
    - [Funções](#funções)
  - [Javascript em uma página da web](#javascript-em-uma-página-da-web)
    - [Estrutura de projeto](#estrutura-de-projeto)
    - [Inserindo javascript numa página HTML](#inserindo-javascript-numa-página-html)
    - [Interagindo com os elemntos do DOM](#interagindo-com-os-elemntos-do-dom)

## História, Evolução e Aplicações

### Características:
- Interpretada;
- Baseada em protótipos;
- Multiparadigma;
- Comumente utilizada em aplicações web client-side;
- Segue o padrão ECMAScript.

### Evolução:

  <p align="center">
 		<img src="https://u3r3f6s2.rocketcdn.me/wp-content/uploads/2021/06/Linha-do-tempo-Javascript-791x1024.png.webp?raw=true" alt="Evolução JavaScript" width="50%" height="60%" />
  </p>

### Aplicações:

  <p align="center">
 		<img src="https://guisalmeida.com/static/c2d56156d8b51a38039d8b30bf1cab19/e8d72/jsssss.webp?raw=true" alt="Aplicações JavaScript" width="50%" height="60%" />
  </p>

- Web;
- Mobile;
- Smartwatches;
- Games;
- Internet of Things;
- APIs.

## Recursos Básicos

### Manipulando um arquivo

Comentaríos:
```javascript
// comentário de uma linha só.

/*
    comentários de mais de uma linha.
*/

```
Variáveis:
```javascript
// Uma variável.
var preco = 2;

// Uma constante.
const PRECO = 2;

```

### Funções

```javascript
// Cria uma função que recebe dois parâmetros.
function soma(a, b){
    console.log(a+b) // muito usado para debugar seu código.
    return a+b;
}

// Chama uma função.
soma(2,5);

```

## Javascript em uma página da web

### Estrutura de projeto
Podemos estruturar um projeto em HTML, CSS e Javascript da seguinte maneira:

  <p align="center">
 		<img src="../Dias/figuras/fig_estrutura_projeto_js.png?raw=true" alt="Aplicações JavaScript" width="40%" height="50%" />
  </p>

### Inserindo javascript numa página HTML

Para inserir um script java em HTML usamos:

```html
<script src="assets/js/scripts.js"></script>
```

### Interagindo com os elemntos do DOM

O Document Object Model (DOM) é uma interface de programação para documentos da web. Ele representa a página para que os programas possam alterar a estrutura, o estilo e o conteúdo do documento. O DOM representa o documento como nós e objetos; dessa forma, as linguagens de programação podem interagir com a página.

Uma página da Web é um documento que pode ser exibido na janela do navegador ou como fonte HTML. Em ambos os casos, é o mesmo documento, mas a representação do Document Object Model (DOM) permite que ele seja manipulado. Como uma representação orientada a objetos da página da Web, ela pode ser modificada com uma linguagem de script, como JavaScript.

Exemplo de interação com o DOM pelo console:

```javascript

// Obtém uma coleção de tags h1 de uma página web.
document.getElementsByTagName('h1')
/*
Resultado
> 0: h1
  length: 1
*/
// Atribui a váriavel heading1 o elemento 0 da coleção.
var heading1=document.getElementsByTagName('h1')[0]

// Mostra o elemento
heading1
/*
 Resultado
 <h1>Olá, Mundo!!</h1>
*/

// Modifica a cor dessa tag.
heading1.style.color='red'

```



