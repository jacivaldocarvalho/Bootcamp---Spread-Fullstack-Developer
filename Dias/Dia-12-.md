# Map, Filter e Reduce
## Conteúdo
- [Map, Filter e Reduce](#map-filter-e-reduce)
  - [Conteúdo](#conteúdo)
  - [Map](#map)
    - [sintaxe](#sintaxe)
  - [ForEach](#foreach)
  - [Filter](#filter)
    - [Sintaxe](#sintaxe-1)
  - [Reduce](#reduce)
    - [Sintaxe](#sintaxe-2)


## Map
O método map() cria uma nova matriz preenchida com os resultados da chamada de uma função fornecida em cada elemento na matriz de chamada.

### sintaxe

```javascript
arr.map(callback, thisArg)
callback(item, index, arr)
```

Callback: função a ser executada em cada elemento.
thisArg: Valor de 'this' dentro da função de callback. (Elemento opcional)

Exemplo:
```javascript
const arr = [1, 4, 9, 16];

// passa a função para map
const newArr = arr.map(x => x * 2);

console.log(newArr);
// resultado: Array [2, 8, 18, 32]
```

## ForEach
Parecido com o map, porém não retorna um novo array.

Exemplo map vs forEach:
```javascript
// Usando map
const arr = [1, 4, 9, 16];

// passa a função para map
arr.map(x => x * 2);
// resultado: [2, 8, 18, 32]


// Usando forEach
const arr = [1, 4, 9, 16];
arr.forEach(x => x*2); 
// Retorna: undefined
```

Diferança com o map, é no valor retornado que é indefinido por não criar um novo array, então, deve-se considerar ou não o uso de um array auxiliar.

## Filter
Filtra item no array. Cria um novo array, não modififcando o array original.

### Sintaxe
```javascript
array.filter(callback, thisArg) 
```

Callback: função a ser executada em cada elemento.
thisArg: valor de 'this' dentro da função de callback.

```javascript
// cria o array frutas
const frutas = ['maça fuji', 'maça verde', 'laranja', 'abacaxi'];
// filtra no array os items que possui o nome 'maça'
frutas.filter((fruta) => fruta.includes('maça'));
```

## Reduce
Executa uma função em todos os elementos do array, retornando um valor único.

### Sintaxe

```javascript
array.reduce(callbackFn, initialValue);
```

