# Variáveis e tipos

## Conteúdo

- [Variáveis e tipos](#variáveis-e-tipos)
  - [Conteúdo](#conteúdo)
  - [Atribuindo valores](#atribuindo-valores)
    - [Variáveis](#variáveis)
      - [Var e let](#var-e-let)
      - [Hoisting](#hoisting)
    - [Constantes](#constantes)
    - [Resumo](#resumo)
  - [Tipos de dados](#tipos-de-dados)
    - [Strings](#strings)
    - [Numbers](#numbers)
    - [Booleans](#booleans)
    - [Arrays](#arrays)
    - [Objetos](#objetos)
    - [Empty, undefined e null](#empty-undefined-e-null)

## Atribuindo valores

### Variáveis

Boas práticas na atribuição de valores:

|        **Case Type**        |    **Example**   |
|:---------------------------:|:----------------:|
| Original Variable as String | some awesome var |
|          Camel case         |  someAwesomeVar  |
|          Snake Case         | some_awesome_var |
|         Pascal case         |  SomeAwesomeVar  |
|    Upper Case Snake Case    | SOME_AWESOME_VAR |

#### Var e let

var: O escopo é Global
let: O escopo é de Bloco.

```javascript

var a = 1;
var b = 2;

if(a === 1){
    var a = 11; //O escopo é global.
    let b = 22; // O escopo está dentro do bloco if.

    console.log(a); //11
    console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2

```

#### Hoisting
Hoisting refere-se ao processo pelo qual o interpretador parece mover a declaração de funções, variáveis ​​ou classes para o topo de seu escopo, antes da execução do código O içamento permite que as funções sejam usadas com segurança no código antes de serem declaradas. Declarações de variáveis ​​e classes também são içadas, então elas também podem ser referenciadas antes de serem declaradas. Observe que isso pode levar a erros inesperados e geralmente não é recomendado.

Uma das vantagens do içamento é que ele permite que você use uma função antes de declará-la em seu código.

Exemplo:
```javascript
catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
O resultado do código acima é: "O nome do meu gato é Tigre"
*/


```

### Constantes

- Declarada em SNAKE_UPPER_CASE;
- Escopo de bloco;
- Não faz hoisting.

```javascript
const DAYS_IN_A_WEEk = 7;
const MY_NAME = "Junior";

```

### Resumo

|            |     **var**     | **const** | **let** |
|:----------:|:---------------:|:---------:|:-------:|
|   escopo   | global ou local |   bloco   |  bloco  |
| redeclarar |       sim       |    não    |   não   |
| reatribuir |       sim       |    não    |   sim   |
|  hoisting  |       sim       |    não    |   não   |


## Tipos de dados
### Strings
- Comumente são textos.
- Valores declarados entre aspas ou crases.


Exemplos:
```javascript
const DIO = 'Digial Innovation One';

let firstName = 'João';
let lastName = 'Luiz';

let fullName = `Nome completo: ${firstName} ${lastName}`;

```

Métodos importantes:
- Concatenação;
- Propriedade length;
- Iterabilidade;
- Formatação.

### Numbers

- Números inteiro ou decimais;

Exemplo:
```javascript

let num = 100; // declara um inteiro

```
- Trabalha com operações aritméticas;
- Biblioteca Math, trabalha com várias funções e constantes matemáticas.

### Booleans

Valor booleans retorna verdadeiro ou falso.

Exemplos:
```javascript

let validation = 3 === 0 // Retorna false
let validation2 = 3 === 3 // Retorna true

!true // retorna false
!false // retorna true

```

### Arrays

Lista iterável de elementos.

Exemplos:
```javascript

let array = [] // declara array vazio

array.push(3) // adiciona o elemento 3 
array.push(2) // adiciona o elemento 2 

array.pop(2) // remove o elemento 2 

array.shift() // remove o primeiro elemento
array.unshift() // adiciona no inicio da lista
```

### Objetos

Um objeto possue a o seguinte formato:

```javascript
let person = {
    name: 'Junior', // chave é name, e 'Junior' é o valor dessa chave.
    age: 31 // chave é age, e 31 é o valor dessa chave.
};
```

É uma estrutura tipo "chave e valor".

Exemplos
```javascript
let obj = {}; // cria um objeto vazio

obj.name = "Julia";
obj.age = 20;

// Resultado: obj{name: "Julia, age: 20"}

object.values(obj); // retorna os valores do objeto obj
object.keys(obj) // retorna as chaves do objeto obj

```

### Empty, undefined e null

- Empty: Não tem um valor para uma variável;
- Null: O valor nullrepresenta a ausência intencional de qualquer valor do objeto. É um dos valores primitivos do JavaScript e é tratado como falso para operações booleanas;
- undefined: Uma variável que não recebeu um valor é do tipo undefined. Um método ou instrução também retorna undefinedse a variável que está sendo avaliada não tiver um valor atribuído. Uma função retorna undefinedse um valor não era returned.