# Coleções Chaveadas
## Conteúdo
- [Coleções Chaveadas](#coleções-chaveadas)
  - [Conteúdo](#conteúdo)
  - [Map](#map)
    - [Características](#características)
    - [Map vs Objeto](#map-vs-objeto)
  - [Set](#set)
    - [Set vs Array](#set-vs-array)

## Map
### Características
- Uma coleção de arrays no formato [chave, valor];
- Pode ser iterado por um loop, e for...of.

```javascript
const myMap = new Map();

myMap.set('maça', 'fruta');
// Map(1) {"maça" => "fruta"}

myMap.get('maça');
// "fruta"

myMap.delete('maça');
// true

myMap.get('maça')
//undefined
```

### Map vs Objeto
- Maps podem ter chaves de qualquer tipo;
- Maps possuem a propriedade length;
- Maps são mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido;
- Os valores tem o mesmo tipo.

## Set

Sets são estruturas que armazenam apenas valores únicos.

```javascript
const mySet = new set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
// true

mySet.has(3);
// false

mySet.delete(5)
```

### Set vs Array

- Possuí valores únicos;
- Em vez da propriedade length, consulta-se o número de registros pela propriedade size;
- Não possui os métodos map, filter, reduce, dentre outros.

