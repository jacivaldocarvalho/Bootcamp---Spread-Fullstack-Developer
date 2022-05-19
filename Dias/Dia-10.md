# Funções
## Conteúdo

- [Funções](#funções)
  - [Conteúdo](#conteúdo)
    - [Tipos de funções](#tipos-de-funções)
      - [Estrutura](#estrutura)
      - [Função anônima](#função-anônima)
      - [Função autoinvocável](#função-autoinvocável)
      - [Callbacks](#callbacks)
    - [Parâmetros](#parâmetros)
      - [Valores padrão e Objeto "arguments"](#valores-padrão-e-objeto-arguments)
    - [Arrays e Objetos](#arrays-e-objetos)
      - [Array:](#array)
      - [Objetos](#objetos)
    - [Condicionais](#condicionais)
      - [if/else](#ifelse)
      - [Switch/case](#switchcase)
    - [Loops](#loops)
      - [For](#for)
      - [While](#while)
    - [This](#this)
      - [Manipulando seu valor](#manipulando-seu-valor)
        - [Call](#call)
        - [Apply](#apply)
    - [Arrow functions](#arrow-functions)
      - [Outras restrições](#outras-restrições)

### Tipos de funções
#### Estrutura
Variáveis dentro de uma função apenas podem ser utilizadas dentro dela.

```javascript
function nome(parametros){
    // instruções
}
```

Quando invocamos o "return", a função para de ser executada.

```javascript
function nome(parametros){
    // instruções
    return; // valor de retorno
}
```

#### Função anônima
Funções que representam expressões. Uma variáel pode armazenar uma função.

```javascript
const soma = function (a,b){
    return a+b;
}

soma(1,3) // 4
```

#### Função autoinvocável

Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.

```javascript
(
    function(){
        let name = "DIO"
        return name;
    }
)();
```

Também pode ser utilizada com parãmetros ou armazenadoa em uma variável.

```javascript
(
function(a,b){
    return a + b;
}
)(1,2);
```
ou

```javascript
const soma= (
    function(a,b){
        return a + b;
}
)(1,2);

console.log(soma);
```

#### Callbacks

Uma função passada como argumento para outra. Utilizando callbacks, podemos ter maior controle da ordem de chamadas.

```javascript
const calc = function(operacao, num1, num2){
    return operacao(num1,num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}
const sub = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub);
console.log(resultSoma);
```

### Parâmetros

#### Valores padrão e Objeto "arguments"

Pós - ES2015
```javascript
function exponencial(array, num=1){
    const result = [];

    for(let i=0; i< array.length; i++>){
        result.push(array[i]**num);
    }

    return result;
}

exponencial([1, 2, 3, 4]); //[1, 2, 3, 4]
exponencial([1, 2, 3, 4], 4) // [1, 8, 27, 64] 
```

Objeto "arguments": Um array com todos os parâmetros passados quando a função foi invocada.

```javascript
// função que retorna o maior valor de um array.
function findMax(){
    let max = - infinity;

    for(let i=0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }

    return max;
}
```


### Arrays e Objetos

#### Array:
- Técnia de Spread -> Uma forma de lidar separadamente com elementos. o que era parte de um array se torna um elemento independente.
  
```javascript
function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers))
```

- Rest-> Combina os argumentos em um array. O que era um elemento independente se torna parte de um array.

```javascript
function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho(); //0
confereTamanho(1, 2);//2
```

#### Objetos

- Object Destructuring -> Entre {}, podemos filtrar apenas os dados que nos interressam em um objeto.

```javascript
const user = {
    id: 42,
    displayName: 'Jr',
    fullName:{
        firstName: 'Juninho',
        lastName: 'Carvalho'
    }
};

function userId({id}){
    return id;
}

function getFullname({fullname: {firstname: first, lastName: last}}){
    return `${first} ${last}`;
}

userId(user); // 42
getFullName(user);// Juninho Carvalho

```

### Condicionais

#### if/else
Exemplos:
```javascript
function numeroPositivo(num){
    let resultado;

    const ehNegativo = num<0;

    if(ehNegativo){
        resultado = false;
    } else{
        resultado = true;
    }
    return resultado;
}
```

```javascript
function numeroPositivo(num){
    const ehNegativo = num<0;

    if(ehNegativo){
        return false;
    } 

    return true;
}
```

```javascript
function numeroPositivo(num){
    const ehNegativo = num<0;
    const maiorQueDez = > 10;

    if(ehNegativo){
        return "Esse número é negativo!";
    } else if (!ehnegativo && maiorQueDez){
        returno "Esse número é positivo e maior que 10!"
    }

    return "Esse número é positivo!";
}
```

#### Switch/case

- Equivale a uma comparação de tipo e valor (===);
- Sempre precisa de um valor "default";
- Ideal para quando se precisa comparar muitos valores.

```javascript
function getAnimal(id){

    switch(id){
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe";
    }
}

getAnimal(1); // "cão"
getAnimal(4); // "peixe"
```
### Loops
#### For
Loop dentro de elemntos iteráveis (arrays, strings).

```javascript
function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i=0; i< arr.length; i++>){
        multiplicados.push(arr[i]*2);
    }
    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];
multiplicadosPorDois(meusNumeros); // [4, 66, 912, 712, 80]
```

Loop entre propriedades enumeráveis de um objeto.
Exemplo com retorno de propriedades:
```javascript
function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "Junior",
    idade: 31,
    cidade: ""Belém
}

forInExemplo(obj);
// nome
// idade
// cidade
```

Exemplo com retorno dos valores:
```javascript
function forInExemplo(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "Junior",
    idade: 31,
    cidade: "Belém"
}

forInExemplo(obj);
// Junior
// 31
// Belém
```

For ... of: Loop entre estruturas iteráveis (arrays, strings).

Exemplo com strings.
```javascript
function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "abacaxi";

logLetras(palavra)
//saida
//a
//b
//c
//a
//x
//i
```

Exemplo com arrays.
```javascript
function logNumeros(nums){
    for(num of nums){
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

logNumeros(palavra)
//saida
//30
//20
//233
//2
```

#### While
Executa instruções até que a condição se torne falsa.

Exemplo com strings.
```javascript
function exemploWhile(){
    let num = 0;

    while(num <= 5){
        console.log(num);
        num++;
    }
}

exemploWhile()
// Saida
//0
//1
//2
//3
//4
```

Do...while: Executa instruções até que a condição se torne falsa.

Exemplo:
```javascript
function exemploDoWhile(){
    let num = 0;
    do{
        console.log(num);
        num++;
    }while(num <= 5)
}

exemploDoWhile()
//saida
//0
//1
//2
//3
//4
```

Porém, a primeira execução sempre ocorre.

```javascript
function exemploDoWhile(){
    let num = 6;
    do{
        console.log(num);
        num++;
    }while(num <= 5)
}

exemploDoWhile()
//saida
//6
```

### This

A palavra reservada **this** é uma referência de contexto. No exemplo, this refere-se ao objeto pessoa.

```javascript
const pessoa = {
    firstName: "Junior",
    lastName: "Carvalho",
    id: 2,
    fullName: function(){
        return this.firtName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

pessoa.fullName();
// Junior Carvalho
pessoa.getId();
// 2
```

Seu valor pode mudar de acordo com o lugar no código onde foi chamado.

|     **Contexto**     |            **Referência**            |
|:--------------------:|:------------------------------------:|
| Em um objeto(método) |     Próprio objeto dono do método    |
|        Sozinha       | Objeto global (navegadores, windows) |
|        função        |             Objeto global            |
|        Evento        |     Elemento que recebeu o evento    |

#### Manipulando seu valor
##### Call

```javascript
const pessoa = {
    nome: "Miguel"
};

const animal = {
    nome: "Murphy"
}

function getSomething(){
    console.log(this.nome);
}

// através do call identifica a propriedade nome do objeto pessoa e não do objeto animal.
getSomething.call(pessoa); 

// Saida
// Miguel

```

É possível passar parãmetros para essa função separando-os por vírgulas.

```javascript
const myObj = {
    num1 = 2,
    num2 = 4
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);

// Saida
// 12
```
##### Apply
Já usando a função Apply, passamos um array como parâmetro.

```javascript
const myObj = {
    num1 = 2,
    num2 = 4
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]);

// Saida
// 12
```

A função Bind clona a estrutura da função onde é chamado e aplica o valor do objeto passado como parâmetros.

```javascript
const retornaNomes = function(){
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno();
// Bruno
```

### Arrow functions

Uma expressão de função de seta é uma alternativa compacta a uma expressão de função tradicional , mas é limitada e não pode ser usada em todas as situações.

```javascript
// Tradicional
const helloWord = function(){
    return "Hello World";
}

// Com arrow functions
const helloWorld = () => {
    return "Hello World";
}

// outra forma
const helloWorld = () => "Hello World"
```

- Caso exista apenas uma linha, pode dispensar as chaves e o return.
```javascript
const soma = (a,b) => a+b;
soma(4,6);
// 10
```
- Caso exista apenas um parâmetro, pode dispensar os parênteses.
```javascript
const soma = a => a;
soma(4);
// 4
```
Obs. Arrow function **não** faz hoisting!

#### Outras restrições
Existem diferenças entre as funções de seta e as funções tradicionais , bem como algumas limitações:

- As funções de seta não têm suas próprias ligações para this, arguments ou super, e não devem ser usadas como métodos;
- As funções de seta não têm acesso à palavra- new.target chave;
- As funções de seta não são adequadas para call, apply e bind métodos, que geralmente dependem do estabelecimento de um escopo;
- As funções de seta não podem ser usadas como construtores;
- As funções de seta não podem usar yield, dentro de seu corpo.
