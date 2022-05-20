# Trabalhando com a DOM com JavaScript
## Conteúdo
- [Trabalhando com a DOM com JavaScript](#trabalhando-com-a-dom-com-javascript)
  - [Conteúdo](#conteúdo)
    - [Entendendo o DOM](#entendendo-o-dom)
      - [DOM](#dom)
      - [DOM vs BOM](#dom-vs-bom)
    - [Selecionando Elementos de uma página](#selecionando-elementos-de-uma-página)
      - [Métodos](#métodos)
        - [getElementById()](#getelementbyid)
        - [getElementsByTagName()](#getelementsbytagname)
        - [etElementsByClassName()](#etelementsbyclassname)
        - [querySelectorAll()](#queryselectorall)
        - [Adicionar e deletar elementos](#adicionar-e-deletar-elementos)
    - [Trabalhando com estilos](#trabalhando-com-estilos)
      - [Element.classList](#elementclasslist)
      - [CSS personalizado](#css-personalizado)
    - [Eventos](#eventos)
      - [Tipos](#tipos)
        - [Eventos do mouse](#eventos-do-mouse)
        - [Eventos de clique](#eventos-de-clique)
      - [Acionando eventos](#acionando-eventos)
        - [Event listener](#event-listener)

### Entendendo o DOM
#### DOM

Quando uma página da Web é carregada, o navegador cria um Document Object Modelo da página. O modelo HTML DOM é construído como uma árvore de objetos.

 <p align="center">
 		<img src="https://www.w3schools.com/js/pic_htmltree.gif?raw=true" alt="DOM" width="60%" height="50%" />
  </p>

  O HTML DOM é um modelo de objeto padrão e uma interface de programação para HTML. Ele define:

  - Os elementos HTML como objetos;
  - As propriedades de todos os elementos HTML;
  - Os métodos para acessar todos os elementos HTML;
  - Os eventos para todos os elementos HTML.

Em outras palavras: O HTML DOM é um padrão de como obter, alterar, adicionar ou excluir elementos HTML.

#### DOM vs BOM
O Browser Object Model (BOM) permite que o JavaScript "fale" com o navegador. Não existem padrões oficiais para o Browser Object Model (BOM). Como os navegadores modernos implementaram (quase) os mesmos métodos e propriedades para interatividade do JavaScript, ele é frequentemente chamado de métodos e propriedades do BOM.

O objeto padrão do navegador é window. Significa que você pode chamar todas as funções de window especificando window ou diretamente.

 <p align="center">
 		<img src="https://static.javatpoint.com/images/javascript/bom.jpg?raw=true" alt="BOM" width="60%" height="50%" />
  </p>

### Selecionando Elementos de uma página
#### Métodos

- **id**: Atributo de identififcação único;
- **class**: Identificadores que não são únicos.

##### getElementById()

Método retorna um elemento com um valor especificado. Retorna null se o elemento não existir. É um dos métodos mais comuns no HTML DOM. Ele é usado quase sempre que você deseja ler ou editar um elemento HTML.

```javascript
document.getElementById("elementoID");

```

##### getElementsByTagName()
Método retorna uma coleção de todos os elementos com um nome de tag especificado. Propriedade é somente leitura.

```javascript
const collection = document.getElementsByTagName("li");

```

##### etElementsByClassName()

Método retorna uma coleção de elementos com um(s) nome(s) de classe especificado(s).

```javascript
// Obtenha todos os elementos com class="classe".
const collection = document.getElementsByClassName("classe");
```

##### querySelectorAll()

Método retorna todos os elementos que correspondem a um(s) seletor(es) CSS.


```javascript
// Selecione todos os elementos com class="example".
document.querySelectorAll(".example");
```

##### Adicionar e deletar elementos

|            **Método**           |        **Descrição**        |
|:-------------------------------:|:---------------------------:|
| document.createElement(element) | Cria um novo elemento HTML. |
|  document.removeChild(element)  |     Remove um elemento.     |
|  document.appendChild(element)  |    Adiciona um elemento.    |
| document.replaceChild(new, old) |    Substitui um elemento.   |

### Trabalhando com estilos
#### Element.classList
O Element.classList é uma propriedade somente leitura que retorna uma DOMTokenList coleção ativa dos class atributos do elemento. Isso pode ser usado para manipular uma lista de classes.

```javascript
/*
<div id="meu-elemento" class="classe"></div>
*/

const meuElemento = document.getElementById("meu-elemento");

// Adiciona a classe "meu estilo"
meuElemento.classList.add("novo-estilo");

// Remove a classe "classe"
meuElemento.classList.remove("classe");

// Adiciona a classe "dark-mode" caso ela não faça parte da lista e remove ela casofaça.
meuElemento.classList.toggle("dark-mode");

```

#### CSS personalizado
Acessando diretamente o CSS de um elemento.

```javascript
// Adiciona diretamente no css estilos.
document.getElementsByTagName("p").style.color = "blue";
```

### Eventos
Eventos HTML são "coisas" que acontecem com elementos HTML. Quando o JavaScript é usado em páginas HTML, o JavaScript pode "reagir" a esses eventos.

#### Tipos

##### Eventos do mouse

- **mouseover**: O usuário move o mouse sobre um elemento HTML;
- **mouseout**: O usuário move o mouse para longe de um elemento HTML.

##### Eventos de clique

- **click**: O usuário clica em um elemento HTML.
- **dbclick**: O usuário clica duas vezes em um elemento HTML.

#### Acionando eventos
##### Event listener

O método JavaScript addEventListener() permite que você configure funções a serem chamadas quando um evento especificado ocorrer, como quando um usuário clica em um botão. 

```javascript
const btn = documento.getElementById("myBtn");

// Adiciona um evento de clique a constante btn.
btn.addEventListener("click", outraFuncao);
```

